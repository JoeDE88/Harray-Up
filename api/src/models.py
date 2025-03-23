
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass,field
from sqlalchemy import ForeignKey,Integer,String,JSON
from enum import Enum

db = SQLAlchemy()

    
@dataclass     
class Users(db.Model):
    __tablename__ = 'users'
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    id:int = db.Column(db.Integer, primary_key=True, unique=True)
    email:str = db.Column(db.String(250), nullable=False, unique=True)
    username:str = db.Column(db.String(250),nullable=False,unique=True)
    password = db.Column(db.VARCHAR(60), nullable=False)
    def __repr__(self):
        return '<Users %r>' % self.username

@dataclass
class Dashboard(db.Model):
    __tablename__ = 'dashboard'
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    id:int = db.Column(db.Integer, primary_key=True, unique=True)
    User_id:int = db.Column(db.Integer, ForeignKey(Users.id), nullable=False)
    level:str = db.Column(db.String(250), nullable=False)
    time:int = db.Column(db.Integer, nullable=False)
    def __repr__(self):
        return '<Dashboard %r>' % self.dashboard

@dataclass
class Levels(db.Model):
    __tablename__ = "levels"
    id:int = db.Column(db.Integer,primary_key=True,unique=True)
    introduction:str = db.Column(db.VARCHAR,nullable=False)
    example:str = db.Column(db.VARCHAR,nullable=False,unique=True)
    instructions:str = db.Column(db.VARCHAR,nullable=False)
    staticCode: str = db.Column(db.VARCHAR,nullable=False)
    goalArray:str = db.Column(db.VARCHAR,nullable=False)
    def __repr__(self):
        return '<Levels %r>' % self.levels