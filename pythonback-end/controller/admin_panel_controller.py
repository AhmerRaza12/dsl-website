# from flask import Blueprint
# admin_panel_bp = Blueprint("admin_panel_controller", __name__)

from flask import Blueprint
admin_panel_bp = Blueprint("admin_panel_controller", __name__)

from model.admin_panel_model import AdminPanelModel
admin_panel_modl_Obj = AdminPanelModel()

@admin_panel_bp.route("/admin/all_quotes")
def fetch_quotes():
    return admin_panel_modl_Obj.get_all_records("request_quote")

@admin_panel_bp.route("/admin/all_pickups")
def fetch_pickups():
    return admin_panel_modl_Obj.get_all_records("request_pickup")

@admin_panel_bp.route("/admin/all_accounts")
def fetch_account_requests():
    return admin_panel_modl_Obj.get_all_records("request_an_account")




