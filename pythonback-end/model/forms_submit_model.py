import pyodbc
import os
from flask import jsonify
from datetime import datetime


class forms_submit_model():

    def submit_quote(self,data):
        ins_query=f"""Insert into request_quote(type_quote,name,email,phone,
                    from_place,to_place,shipment_type,product_type,service_type,
                    weight,pcs,length,width,height,request_time) 
                    values
                    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"""
        

        conn=pyodbc.connect(os.getenv("CONN_STR"))
        crs=conn.cursor()

        try:
            crs.execute(ins_query,(data["type_quote"],data["name"],data["email"],data["phone"],data["from_place"],data["to_place"],
                    data["shipment_type"],data["product_type"],data["service_type"],data["weight"],data["pcs"],data["length"],
                    data["width"],data["height"], datetime.now()))
            conn.commit()
            print("Query executed successfully!")
            conn.close()
            return jsonify("Form submitted successfully."), 200
        except Exception as e:
            print(f"Error executing query: {e}")
            conn.close()
            return jsonify("Form failed to submit."), 422
    

    def submit_pickup(self,data):

        ins_query = """INSERT INTO request_pickup ([name], [phone], [email], [from_place],
               [address], [weight], [pcs], [length], [width], [height], [request_time])
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"""
        
        conn=pyodbc.connect(os.getenv("CONN_STR"))
        crs=conn.cursor()
        try:
            crs.execute(ins_query, (data["name"], data["phone"], data["email"], data["from_place"],
                        data["address"], data["weight"], data["pcs"], data["length"],
                        data["width"], data["height"], datetime.now()))
            conn.commit()
            print("Query executed successfully!")
            conn.close()
            return jsonify("Form submitted successfully."), 200
        except Exception as e:
            print(f"Error executing query: {e}")
            conn.close()
            return jsonify("Form failed to submit."), 422
        
        
       
    

    def submit_account(self,data):

        items_dict = ["clothing", "books", "perfumes_cosmetics", "watches", "home_decor", "sports", "home_appliances", "health_fitness", "mobiles_tablets", "computer_peripherals"]
        product_range = ["clothing","books","computer","perfumes"]
        # print(product_range)
        result_dict = {}


        for item in items_dict:
    # Extract item name from the key
            item_name = item.split('_')[0]
            is_present = any(item_name in product for product in product_range)
            result_dict[item] = True if is_present else False

    


        result_dict_filtered = {key: value for key, value in result_dict.items() if value == True}


        columns = ', '.join(result_dict_filtered.keys())
        # values = '- '.join(str(value) for value in result_dict_filtered.values())


        comma_question_marks = ', '.join(['?'] * len(result_dict_filtered))
        prod_ins_query = f"Insert into product_range ({columns}) values ({comma_question_marks})" 




 
        conn=pyodbc.connect(os.getenv("CONN_STR"))
        crs=conn.cursor()
        values = tuple(result_dict_filtered.values())
        prod_id= None
        try:

            crs.execute(prod_ins_query,(values))
            conn.commit()
            print("Query executed successfully!")

        except Exception as e:
            print(f"Error executing query: {e}")

        try:
            fetch_prod_range = "SELECT TOP 1 id_product_range FROM product_range ORDER BY id_product_range DESC"
            crs.execute(fetch_prod_range)
            prod_id= crs.fetchone() 
            print("Query executed successfully!")

        except Exception as e:
            print(f"Error executing query: {e}")

 

        ins_query= f"""Insert into request_an_account(company_name, full_name, ntn, sales_tax_num, landline, company_phone, mobile_num,
                    email, cnic, url_page, pickup_address, city, nature_of_business, number_months_in_business,
                    ship_per_week,id_product_range, request_time)
                    values
                    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,? ,?)"""

        try:
            crs.execute(ins_query, (data["company_name"], data["full_name"], data["ntn"], data["sales_tax_num"], data["landline"],
                    data["company_phone"],data["mobile_num"], data["email"], data["cnic"], data["url_page"], data["pickup_address"],
                    data["city"], data["nature_of_business"], data["number_months_in_business"], data["ship_per_week"],
                    prod_id.id_product_range,  datetime.now()))
            conn.commit()
            print("Query executed successfully!")
            conn.close()
            return jsonify("Form submitted successfully."), 200
        except Exception as e:
            print(f"Error executing query: {e}")
            conn.close()
            return jsonify("Form failed to submit."), 422
