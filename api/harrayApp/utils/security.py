from datetime import timedelta, datetime, timezone
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from dotenv import load_dotenv
import os

from ..database.user_model import Users

bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

oauth2_bearer = OAuth2PasswordBearer(tokenUrl='auth/token')

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

def authenticate_user(username: str, password: str, db):
    user = db.query(Users).filter(Users.username==username).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user

def create_access_token(username: str, user_id: int, role: str, expires_delta: timedelta):
    expires = datetime.now(timezone.utc) + expires_delta
    encode = {'sub': username, 'id': user_id, 'role': role, 'exp': expires}
    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)