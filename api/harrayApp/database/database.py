from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

POSTGRESQL_DATABASE_URL = 'postgresql://postgres:Sampdoria1.@localhost:5432/harrayUpDatabase'

engine = create_engine(POSTGRESQL_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()