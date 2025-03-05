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
app.config["JWT_COOKIE_CSRF_PROTECT"] = True
app.config["JWT_CSRF_IN_COOKIES"] = True
app.config["JWT_COOKIE_SECURE"] = True 
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
    password = data.get("password")
    required_fields = ["email","password"]
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    existing_user = db.session.query(Users).filter(Users.email == email).first()
    if existing_user:
        return jsonify({"error": "User already registered"}), 400

    hashedPassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    new_user = Users(email=email, password=hashedPassword,availableLevels=[1])

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"User created successfully."}),200


@app.route('/login',methods=['POST'])
def handle_login():
    data = request.get_json(force=True)
    email = data["email"]
    password = data["password"]

    required_fields= ["email","password"]

    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields", "missing": missing_fields}), 400
    
    user = Users.query.filter_by(email=email).first()

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
            "email": user.email
        },
        "csrf_token": csrf_token
        })
    
    set_access_cookies(response,access_token)
    
    return response

@app.route("/logout", methods=["POST"])
@jwt_required()
def logout_with_cookies():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response
        
@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok", "uptime": round(time.time() - start_time, 2)}), 200


if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=PORT, debug=False)