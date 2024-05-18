from flask import Flask, request, jsonify, session
from controller.user_controller import userbp
from controller.forms_submit_controller import forms_bp
from controller.admin_panel_controller import admin_panel_bp

import pyodbc
import appmap
from db_connect import conn
from flask_cors import CORS
import redis
from flask_session import Session
import os
from appmap.flask import AppmapFlask
from dotenv import load_dotenv

#initialise app

app= Flask(__name__)
CORS(app, supports_credentials=True)
app.register_blueprint(userbp)
app.register_blueprint(forms_bp)
app.register_blueprint(admin_panel_bp)
secret_key = os.urandom(16)
app.config['SECRET_KEY'] = secret_key

###################for appmaps
appmap_flask = AppmapFlask(app)
appmap_flask.init_app()
load_dotenv()


# crs= conn.cursor()


if __name__=="__main__":
  os.environ['APPMAP'] = 'true'
  app.run(host='0.0.0.0', port=5000, debug=True)




    