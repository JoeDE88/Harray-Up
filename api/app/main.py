from fastapi import FastAPI

from app.database import engine
from app.models import user_model
from app.routers import users_router

app = FastAPI()

user_model.Base.metadata.create_all(bind=engine)

app.include_router(users_router.router)


@app.get('/')
async def root():
    return {'message' : 'Hello world'}