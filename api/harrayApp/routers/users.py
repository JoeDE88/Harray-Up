from sys import prefix
from fastapi import APIRouter, status
from pydantic import BaseModel, Field
from ..utils.security import bcrypt_context

router = APIRouter(
    prefix='/users',
    tags=['users']
)

users = []

class CreateUserRequest(BaseModel):
    username: str = Field(min_length=3, max_length=30)
    email: str
    first_name: str = Field(min_length=3, max_length=30)
    last_name: str = Field(min_length=1, max_length=50)
    password: str

@router.get('/')
async def get_user():
    return users

@router.post('/', status_code=status.HTTP_201_CREATED)
async def create_user(user_request: CreateUserRequest):
    user_model = {
        'username': user_request.username,
        'email': user_request.email,
        'first_name': user_request.first_name,
        'last_name': user_request.last_name,
        'password': bcrypt_context.hash(user_request.password)
    }
    users.append(user_model)

    return user_model