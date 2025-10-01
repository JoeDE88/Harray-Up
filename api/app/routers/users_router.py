from fastapi import APIRouter
from app.database import DB_DEPENDENCY
from app.schemas.user_schema import UserSchema
from app.models.user_model import User

router = APIRouter(
    prefix='/users'
)


users = [{'username':'name','password':'pass123','email':'joe@joe.com'}]


@router.post('')
async def create_user(db:DB_DEPENDENCY, user_request: UserSchema): #type: ignore
    user_model = User(**user_request.model_dump())
    db.add(user_model)
    db.commit()
    db.refresh(user_model)
    return user_model


@router.get('', response_model=list[UserSchema])
async def get_users(db:DB_DEPENDENCY):  #type: ignore
    return db.query(User).all()