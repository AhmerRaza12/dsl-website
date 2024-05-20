import sqlite3
from flask_bcrypt import Bcrypt
from flask import jsonify, session
import os

class UserModel:
    def __init__(self):
        self.db_path = 'sqlite:///database.db'  

    def get_column_index(self, cursor, table_name, column_name):
        cursor.execute(f"PRAGMA table_info({table_name})")
        columns = cursor.fetchall()
        for column in columns:
            if column[1] == column_name:
                return column[0]
        return None

    def user_signup_model(self, data):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()

        query_user = f"SELECT * FROM customer WHERE user_id=?"
        cursor.execute(query_user, (data['username'],))
        user_details = cursor.fetchone()

        if user_details:
            conn.close()
            return jsonify({"error": "Email already being used."}), 401

        bcrypt = Bcrypt()
        hashed_pw = bcrypt.generate_password_hash(data['pwd']).decode('utf-8')

        ins_str = "INSERT INTO customer(fname, lname, contact, user_id, pwd, shpp_addr) VALUES (?, ?, ?, ?, ?, ?)"
        cursor.execute(ins_str, (data['fname'], data['lname'], data['contact'], data['username'], hashed_pw, data['shpp_addr']))

        conn.commit()
        conn.close()
        session["user_id"] = data["username"]
        return jsonify("success")

    def user_login(self, data):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()

        bcrypt = Bcrypt()
        query_user = "SELECT * FROM customer WHERE user_id=?"
        cursor.execute(query_user, (data['username'],))
        user_details = cursor.fetchone()
        conn.close()

        if not user_details:
            return jsonify({"error": "user does not exist"}), 401
        else:
            pwd_index = self.get_column_index(cursor, 'customer', 'pwd')
            if not pwd_index:
                return jsonify({"error": "Database error"}), 500

            if bcrypt.check_password_hash(user_details[pwd_index], data['pwd']):
                session["user_id"] = data["username"]
                fname_index = self.get_column_index(cursor, 'customer', 'fname')
                return jsonify(user_details[fname_index].rstrip())
            else:
                return jsonify({"error": "wrong password"}), 401

    def user_logout(self):
        if session.get('user_id', None) is None:
            return "Please Login First to Logout"
        session.pop("user_id", None)
        return "200"

    def get_current_user(self):
        user_id = session.get("user_id")
        if not user_id:
            return jsonify({"error": "Please Login First"}), 401

        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()

        query_user = "SELECT * FROM customer WHERE user_id=?"
        cursor.execute(query_user, (user_id,))
        user_details = cursor.fetchone()
        conn.close()

        fname_index = self.get_column_index(cursor, 'customer', 'fname')
        lname_index = self.get_column_index(cursor, 'customer', 'lname')
        contact_index = self.get_column_index(cursor, 'customer', 'contact')
        shpp_addr_index = self.get_column_index(cursor, 'customer', 'shpp_addr')
        paymode_index = self.get_column_index(cursor, 'customer', 'paymode')

        fname = user_details[fname_index].strip() if fname_index is not None and user_details[fname_index] else None
        lname = user_details[lname_index].strip() if lname_index is not None and user_details[lname_index] else None
        contact = user_details[contact_index].strip() if contact_index is not None and user_details[contact_index] else None
        shpp_addr = user_details[shpp_addr_index].strip() if shpp_addr_index is not None and user_details[shpp_addr_index] else None
        paymode = user_details[paymode_index].strip() if paymode_index is not None and user_details[paymode_index] else None

        return jsonify({
            "fname": fname,
            "lname": lname,
            "contact": contact,
            "ship_addr": shpp_addr,
            "paymode": paymode
        })
