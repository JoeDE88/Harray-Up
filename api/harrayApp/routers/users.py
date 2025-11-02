from typing import Annotated
from fastapi import APIRouter, Depends, status
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session

from ..database.user_model import Users
from ..database.database import SessionLocal
from ..utils.security import bcrypt_context

# DECLARING router FOR USERS
router = APIRouter(
    prefix='/users',
    tags=['users']
)

# DATABASE SESSION FUNCTION
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# DECLARING DEPENDENCY FOR DB
db_dependency = Annotated[Session, Depends(get_db)]

# DECLARING CreateUserRequest model
class CreateUserRequest(BaseModel):
    username: str = Field(min_length=3, max_length=30)
    email: str
    first_name: str = Field(min_length=3, max_length=30)
    last_name: str = Field(min_length=1, max_length=50)
    password: str
    role: str

@router.get('/')
async def get_users(db: db_dependency):
    users = db.query(Users).all()

    return users

@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_user(db: db_dependency, user_request: CreateUserRequest):
    user_model = Users(
        username = user_request.username,
        email = user_request.email,
        first_name = user_request.first_name,
        last_name = user_request.last_name,
        hashed_password = bcrypt_context.hash(user_request.password),
        role = user_request.role
    )
    db.add(user_model)
    db.commit()

    return {'message':'User created successfully!'}