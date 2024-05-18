from flask import Blueprint
forms_bp = Blueprint("forms_submit_controller", __name__)
from model.forms_submit_model import forms_submit_model
from flask import request
forms_modl_Obj = forms_submit_model()


@forms_bp.route("/submit/quote", methods= ["POST"])
def submit_quote_controller():
    return forms_modl_Obj.submit_quote(request.form)

@forms_bp.route("/submit/pickup", methods= ["POST"])
def submit_pickup_controller():
    return forms_modl_Obj.submit_pickup(request.form)

@forms_bp.route("/submit/account", methods= ["POST"])
def submit_account_controller():
    return forms_modl_Obj.submit_account(request.form)


