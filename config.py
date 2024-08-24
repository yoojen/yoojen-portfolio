from os import path, getenv
from dotenv import load_dotenv


BASE_DIR = path.abspath(path.dirname(__file__))
load_dotenv(path.join(BASE_DIR, '.env'))

class Config:
    SECRET_KEY = getenv('SECRET_KEY')
    MAIL_SERVER = getenv('MAIL_SERVER')
    MAIL_PORT = getenv('MAIL_PORT')
    MAIL_USERNAME = getenv('MAIL_USERNAME')
    MAIL_PASSWORD = getenv('MAIL_PASSWORD')
    MAIL_USE_SSL = getenv('MAIL_USE_SSL')
    MAIL_USE_TLS = getenv('MAIL_USE_TLS')

