from datetime import timedelta
from typing import Annotated
from fastapi import APIRouter, Depends, Path, status, HTTPException
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session


from ..database.user_model import Users
from ..database.database import SessionLocal
from ..utils.security import authenticate_user, bcrypt_context, create_access_token

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

class Token(BaseModel):
    access_token: str
    token_type: str

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

@router.post('/login', response_model=Token)
async def login_with_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: db_dependency):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Incorrect username or password.')
    
    token = create_access_token(user.username, user.id, user.role, timedelta(minutes=10))

    response = JSONResponse(content={'access_token': token, 'token_type': 'bearer'})
    return response

@router.delete('/{user_id}',status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(db:db_dependency, user_id: int = Path(gt=0)):
    user = db.query(Users).filter(Users.id==user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found.')
    db.delete(user)
    db.commit()