from flask import Flask, request, jsonify, session
from controller.user_controller import userbp
from controller.forms_submit_controller import forms_bp
from controller.admin_panel_controller import admin_panel_bp
from db_connect import db

from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_session import Session
from dotenv import load_dotenv
import os

load_dotenv()


app = Flask(__name__)
CORS(app, supports_credentials=True)


app.register_blueprint(userbp)
app.register_blueprint(forms_bp)
app.register_blueprint(admin_panel_bp)


secret_key = os.urandom(16)
app.config['SECRET_KEY'] = secret_key


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False



db.init_app(app)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
