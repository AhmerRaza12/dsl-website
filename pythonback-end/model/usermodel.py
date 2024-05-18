# from db_connect import conn
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
import os
import pyodbc
from flask import jsonify,make_response,session


class usermodel():
    def user_signup_model(self,data):

        conn=pyodbc.connect(os.getenv("CONN_STR"))
        query_user=f"Select * from customer where user_id='{data['username']}' "
        crs=conn.cursor()
        crs.execute(query_user)
        user_details=crs.fetchone()
        if(user_details):
            return jsonify({"error": "Email already being used."}), 401


        bcrypt=Bcrypt()
        hashed_pw=bcrypt.generate_password_hash(data['pwd']).decode('utf-8')

        ins_str= f"INSERT into customer(fname,lname,contact,user_id,pwd,shpp_addr) values ('{data['fname']}','{data['lname']}','{data['contact']}','{data['username']}','{hashed_pw}','{data['shpp_addr']}')"

        crs.execute(ins_str)
        conn.commit()
        conn.close()
        session["user_id"] = data["username"]
        return jsonify("success")
    

    def user_login(self,data):

        conn=pyodbc.connect(os.getenv("CONN_STR"))
        bcrypt=Bcrypt()
        query_user=f"Select * from customer where user_id='{data['username']}' "
        crs=conn.cursor()
        crs.execute(query_user)
        user_details=crs.fetchone()
        conn.close()
        if(user_details is None):
            return jsonify({"error": "user does not exist"}), 401

        
        else:
            if(bcrypt.check_password_hash(user_details.pwd, data['pwd'])):  # returns true if pass correct
                session["user_id"] = data["username"]
                return  jsonify(user_details.fname.rstrip())
            
            else: 
                
                return jsonify({"error": "wrong password"}), 401     
        


    def user_logout(self):
        
        if session.get('user_id', None) is None:
            return "Please Login First to Logout"
        session.pop("user_id",None)
        return "200"
    

    def get_current_user(self):
        user_id = session.get("user_id")
        if not user_id:
            return jsonify({"error": "Please Login First"}), 401
        
        conn=pyodbc.connect(os.getenv("CONN_STR"))
        query_user=f"Select * from customer where user_id='{user_id}' "
        crs=conn.cursor()
        crs.execute(query_user)
        user_details=crs.fetchone()
        conn.close()
        fname = user_details.fname.strip() if user_details.fname is not None else None
        lname = user_details.lname.strip() if user_details.lname is not None else None
        contact = user_details.contact.strip() if user_details.contact is not None else None
        ship_addr = user_details.shpp_addr.strip() if user_details.shpp_addr is not None else None
        paymode = user_details.paymode.strip() if user_details.paymode is not None else None

        return jsonify({
            "fname": fname,
            "lname": lname,
            "contact": contact,
            "ship_addr":ship_addr,
            "paymode": paymode
        }) 