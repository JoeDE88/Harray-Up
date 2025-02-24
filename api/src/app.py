import os
import time

from flask import Flask, jsonify,request
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, Users
from random import randint

app = Flask(__name__)
start_time = time.time()
app.url_map.strict_slashes = False

db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

MIGRATE = Migrate(app, db)
db.init_app(app)
CORS(app)


@app.route('/')
def sitemap():
    return generate_sitemap(app)


@app.route('/register',methods=['POST'])
def handle_register():
    data = request.get_json(force=True)
    required_fields = {"email","password"}
    new_user = Users(
        email=data["email"],
        password=data["password"]
    )

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"User created successfully."}),200


@app.route('/login',methods=['POST'])
def handle_login:
    data = request.get_json(force=True)
    data = request.get_json()
    email = data["email"]
    password = data["password"]

    required_fields= ["email","password"]

    if not all(field in data for field in required_fields):
        return jsonify({"error": "Missing required fields", "missing": missing_fields}), 400
    
    user = Users.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error":"Username not found"}), 400

    is_password_valid = bcrypt.checkpw(password.encode('utf-8'),user.password.encode('utf-8'))

    if not is_password_valid:
        return jsonify({"error":"Password not correct"}), 400

    access_token = create_access_token(identity=str(user.ID))
    response = jsonify({
        "msg": "login successful",
        "user": user
        })
    
    set_access_cookies(response,access_token)
    
    return response
        
@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok", "uptime": round(time.time() - start_time, 2)}), 200


if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=PORT, debug=False)