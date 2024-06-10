from flask import jsonify
from datetime import datetime
from db_connect import db
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import text,Table, insert, MetaData
import sqlalchemy as sa
import sqlite3


class FormsSubmitModel:
    def __init__(self):
        self.db_path = 'database.db'  


    def submit_quote(self, data):
        ins_query = text("""
            INSERT INTO req_quote(type_quote, name, email, phone, from_place, to_place, shipment_type,
                                      product_type, service_type, weight, pcs, length, width, height, request_time)
            VALUES (:type_quote, :name, :email, :phone, :from_place, :to_place, :shipment_type,
                    :product_type, :service_type, :weight, :pcs, :length, :width, :height, :request_time)
        """)

        try:
            db.session.execute(ins_query, {
                "type_quote": data["type_quote"], "name": data["name"], "email": data["email"], "phone": data["phone"],
                "from_place": data["from_place"], "to_place": data["to_place"], "shipment_type": data["shipment_type"],
                "product_type": data["product_type"], "service_type": data["service_type"], "weight": data["weight"],
                "pcs": data["pcs"], "length": data["length"], "width": data["width"], "height": data["height"],
                "request_time": datetime.now()
            })
            db.session.commit()
            print("Query executed successfully!")
            return jsonify("Form submitted successfully."), 200
        except SQLAlchemyError as e:
            print(f"Error executing query: {e}")
            db.session.rollback()
            return jsonify("Form failed to submit."), 422

    def submit_pickup(self, data):
        ins_query = text("""
            INSERT INTO req_pickup (name, phone, email, from_place, address, weight, pcs, length, width, height, request_time)
            VALUES (:name, :phone, :email, :from_place, :address, :weight, :pcs, :length, :width, :height, :request_time)
        """)

        try:
            db.session.execute(ins_query, {
                "name": data["name"], "phone": data["phone"], "email": data["email"], "from_place": data["from_place"],
                "address": data["address"], "weight": data["weight"], "pcs": data["pcs"], "length": data["length"],
                "width": data["width"], "height": data["height"], "request_time": datetime.now()
            })
            db.session.commit()
            print("Query executed successfully!")
            return jsonify("Form submitted successfully."), 200
        except SQLAlchemyError as e:
            print(f"Error executing query: {e}")
            db.session.rollback()
            return jsonify("Form failed to submit."), 422

    def submit_account(self, data):
        items_dict = ["clothing", "books", "perfumes_cosmetics", "watches", "home_decor", "sports",
                      "home_appliances", "health_fitness", "mobiles_tablets", "computer_peripherals"]
        product_range = ["clothing", "books", "computer", "perfumes","sports"]
        result_dict = {item: item.split('_')[0] in product_range for item in items_dict}
        result_dict_filtered = {key: value for key, value in result_dict.items() if value}

        columns = ', '.join(result_dict_filtered.keys())
        comma_question_marks = ', '.join([f':{key}' for key in result_dict_filtered])
        prod_ins_query = text(f"INSERT INTO product_range ({columns}) VALUES ({comma_question_marks})")

        try:
            db.session.execute(prod_ins_query, result_dict_filtered)
            db.session.commit()
            print("Product range query executed successfully!")
        except SQLAlchemyError as e:
            print(f"Error executing product range query: {e}")
            db.session.rollback()
            return jsonify("Form failed to submit."), 422

        try:
            print("in 2nd try catch")
            fetch_prod_range = text("SELECT id_product_range FROM product_range ORDER BY id_product_range DESC LIMIT 1")
            # print(fetch_prod_range,type(fetch_prod_range))
            result = db.session.execute(fetch_prod_range).fetchone()
            print(result)
            prod_id = result[0] if result else None
            print("Fetch product range query executed successfully!")
        except SQLAlchemyError as e:
            print(f"Error fetching product range id: {e}")
            return jsonify("Form failed to submit."), 422

        ins_query = text("""
            INSERT INTO req_acc(company_name, full_name, ntn, sales_tax_num, landline, company_phone, mobile_num,
                                           email, cnic, url_page, pickup_address, city, nature_of_business, number_months_in_business,
                                           ship_per_week, id_product_range, request_time)
            VALUES (:company_name, :full_name, :ntn, :sales_tax_num, :landline, :company_phone, :mobile_num,
                    :email, :cnic, :url_page, :pickup_address, :city, :nature_of_business, :number_months_in_business,
                    :ship_per_week, :id_product_range, :request_time)
        """)

        try:
            db.session.execute(ins_query, {
                "company_name": data["company_name"], "full_name": data["full_name"], "ntn": data["ntn"], 
                "sales_tax_num": data["sales_tax_num"], "landline": data["landline"], "company_phone": data["company_phone"], 
                "mobile_num": data["mobile_num"], "email": data["email"], "cnic": data["cnic"], 
                "url_page": data["url_page"], "pickup_address": data["pickup_address"], "city": data["city"], 
                "nature_of_business": data["nature_of_business"], "number_months_in_business": data["number_months_in_business"], 
                "ship_per_week": data["ship_per_week"], "id_product_range": prod_id, "request_time": datetime.now()
            })
            db.session.commit()
            print("Account request query executed successfully!")
            return jsonify("Form submitted successfully."), 200
        except SQLAlchemyError as e:
            print(f"Error executing account request query: {e}")
            db.session.rollback()
            return jsonify("Form failed to submit."), 422
