
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass,field
from sqlalchemy import ForeignKey,Integer,String
from enum import Enum

db = SQLAlchemy()

    
@dataclass     
class Users(db.Model):
    __tablename__ = 'Users'
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    ID:int = db.Column(db.Integer, primary_key=True, unique=True)
    email:str = db.Column(db.String(250), nullable=False, unique=True)
    username:str = db.Column(db.String(250), unique=True)
    password = db.Column(db.VARCHAR(0), nullable=False)
    def __repr__(self):
        return '<Users %r>' % self.username

@dataclass
class Dashboard(db.Model):
    __tablename__ = 'Films'
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    ID:int = db.Column(db.Integer, primary_key=True, unique=True)
    User_id:int = db.Column(db.Integer, ForeignKey(Users.ID), nullable=False)
    level:str = db.Column(db.String(250), nullable=False)
    time:int = db.Column(db.Integer, nullable=False)
    def __repr__(self):
        return '<Dashboard %r>' % self.dashboard