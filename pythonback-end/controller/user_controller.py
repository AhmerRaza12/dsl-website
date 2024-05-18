from flask import Blueprint
userbp = Blueprint("user_controller", __name__)
from model.usermodel import usermodel
from flask import request
usr_modl_Obj = usermodel()


@userbp.route("/user/signup", methods= ["POST"])
def signup_controller():
    return usr_modl_Obj.user_signup_model(request.form)

@userbp.route("/user/login", methods= ["POST"])
def login_controller():
    return usr_modl_Obj.user_login(request.form)


@userbp.route("/user/details", methods=["GET"])
def user_details_controller():
    return usr_modl_Obj.get_current_user()

@userbp.route("/user/logout", methods=["POST"])
def logout_controller():
    return usr_modl_Obj.user_logout()

