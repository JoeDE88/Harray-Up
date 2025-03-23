import os
import time
import bcrypt

from flask import Flask, jsonify,request
from flask_migrate import Migrate
from flask_cors import CORS
from src.models import db, Users,Dashboard,Levels
from dotenv import load_dotenv
from sqlalchemy import or_
from flask_jwt_extended import create_access_token,get_csrf_token,jwt_required,JWTManager,set_access_cookies,unset_jwt_cookies,get_jwt_identity
from random import randint
from datetime import timedelta

load_dotenv()
app = Flask(__name__)

start_time = time.time()
app.url_map.strict_slashes = False

db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
print(db_url)

jwt_key = os.getenv("JWT_SECRET_KEY")

app.config["JWT_SECRET_KEY"] = "qo138ndqdk2i1"  # Change this!
app.config["JWT_TOKEN_LOCATION"] = ["cookies"]
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=24)
app.config["JWT_COOKIE_CSRF_PROTECT"] = True
app.config["JWT_CSRF_IN_COOKIES"] = True
app.config["JWT_COOKIE_SECURE"] = True 
app.config["JWT_ACCESS_COOKIE_NAME"] = "access_token_cookie"
app.config["JWT_ACCESS_CSRF_HEADER_NAME"] = "X-CSRF-TOKEN" 
jwt = JWTManager(app)

MIGRATE = Migrate(app, db)
db.init_app(app)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, supports_credentials=True)


@app.route('/')
def sitemap():
    return generate_sitemap(app)

@app.route('/levels',methods=['GET'])
def get_all_levels():
    levels = Levels.query.order_by(Levels.id.asc()).all()
    response_body = {
        'content' : levels
    }
    return jsonify(response_body),200


@app.route('/levels/<int:id>',methods=['GET'])
def get_level(id):
    level = Levels.query.get(id)
    response_body = {
        'content': level
    }
    return jsonify(response_body), 200



@app.route('/register',methods=['POST'])
def handle_register():
    data = request.get_json(force=True)
    email = data.get("email")
    username = data.get("username")
    password = data.get("password")
    if email == "" or username == "" or password == "":
        return jsonify({"error" : "can't be blank"}), 400

    required_fields = ["email","username","password"]
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    existing_user = db.session.query(Users).filter(or_(Users.email == email,Users.username == username)).first()
    if existing_user:
        return jsonify({"error": "Email or User already registered"}), 400

    hashedPassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    new_user = Users(email=email,username=username,password=hashedPassword)

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"User created successfully."}),200

@app.route('/login',methods=['POST'])
def handle_login():
    data = request.get_json(force=True)
    username = data["username"]
    password = data["password"]

    required_fields= ["username","password"]

    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400
    
    user = Users.query.filter_by(username=username).first()

    if not user:
        return jsonify({"error":"User not found"}), 400

    is_password_valid = bcrypt.checkpw(password.encode("utf-8"), user.password.encode("utf-8"))

    if not is_password_valid:
        return jsonify({"error":"Password not correct"}), 400

    access_token = create_access_token(identity=str(user.id))
    csrf_token = get_csrf_token(access_token)
    response = jsonify({
        "msg": "login successful",
        "user": {
            "id": user.id,
            "username": user.username
        },
        "csrf_token": csrf_token
        })
    
    set_access_cookies(response,access_token)
    
    return response

@app.route('/me', methods=['GET'])
@jwt_required()  # Solo accesible si hay un JWT válido en las cookies
def get_current_user():
    user_id = get_jwt_identity()
    user = Users.query.get(user_id)

    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "id": user.id,
        "username": user.username,
        "availableLevels": user.availableLevels
    })

@app.route("/<int:id>/userLevel",methods=["PUT"])
def update_levels(id):
    data = request.get_json(force=True)
    updated_levels = data.get("availableLevels")  # El front manda la lista completa

    if not isinstance(updated_levels, list):
        return jsonify({"error": "availableLevels must be a list"}), 400

    user = Users.query.get(id)

    if not user:
        return jsonify({"error": "User not found"}), 404

    # Asignar la nueva lista directamente
    user.availableLevels = updated_levels

    db.session.commit()

    return jsonify({
        "message": "User levels updated successfully.",
        "availableLevels": user.availableLevels
    }), 200




@app.route("/logout", methods=["POST"])
@jwt_required()
def logout_with_cookies():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@app.route("/users",methods=["GET"])
def handle_users():
    users = Users.query.all()
    return jsonify(users)

@app.route("/users/<int:id>",methods=["DELETE"])
def delete_user(id):
    user = Users.query.get(id)

    db.session.delete(user)
    db.session.commit()

    return jsonify({"message": "User deleted successfully"}),200

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok", "uptime": round(time.time() - start_time, 2)}), 200


if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=PORT, debug=False)