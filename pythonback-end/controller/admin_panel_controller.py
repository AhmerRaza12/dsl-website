from flask import Blueprint, request, session, jsonify
from model.admin_panel_model import AdminPanelModel
from functools import wraps

admin_panel_bp = Blueprint("admin_panel_controller", __name__)

admin_panel_modl_Obj = AdminPanelModel()

def admin_login_required(func):
    @wraps(func)
    def decorated_function(*args, **kwargs):
        if 'admin_id' not in session:
            return jsonify({"error": "Authentication required"}), 401
        return func(*args, **kwargs)
    return decorated_function

@admin_panel_bp.route("/admin/all_quotes")
def fetch_quotes():
    return admin_panel_modl_Obj.get_all_records("req_quote")

@admin_panel_bp.route("/admin/all_pickups")
def fetch_pickups():
    return admin_panel_modl_Obj.get_all_records("req_pickup")

@admin_panel_bp.route("/admin/all_accounts")
def fetch_account_requests():
    return admin_panel_modl_Obj.get_all_records("req_acc")

@admin_panel_bp.route("/admin/all_bookings")
@admin_login_required
def fetch_bookings():
    return admin_panel_modl_Obj.get_all_records("booking")

@admin_panel_bp.route("/admin/insert_record", methods=["POST"])
@admin_login_required
def insert_record_to_booking():
    return admin_panel_modl_Obj.insert_record("booking")

@admin_panel_bp.route("/admin/update_booking/<dsl_cn>", methods=["POST"])
@admin_login_required
def update_booking_controller(dsl_cn):
    return admin_panel_modl_Obj.update_record("booking", dsl_cn)


@admin_panel_bp.route("/admin/get_next_dsl_cn", methods=["GET"])
def get_next_dsl_cn():
    return admin_panel_modl_Obj.get_next_dsl_cn()

@admin_panel_bp.route("/admin/get_booking_details", methods=["GET"])
def get_booking_details():
    return admin_panel_modl_Obj.get_booking_details()