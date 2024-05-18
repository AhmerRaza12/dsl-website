import pyodbc
import os
from flask import jsonify
from datetime import datetime


class admin_panel_model():

    def get_all_records(self,table_name):

        selec_query=f"Select * from {table_name}"
        get_prod_range= f"Select * from product_range"
        conn=pyodbc.connect(os.getenv("CONN_STR"))
        crs=conn.cursor()
        try:
            prod_list=None
            crs.execute(selec_query)
            quote_records = crs.fetchall()
            

            # if(table_name=="request_an_account"):
            #     crs.execute(get_prod_range)
            #     prod_list=crs.fetchall()
                




            records_list = []
            for record in quote_records:
                record_dict = dict(zip([column[0] for column in crs.description], record))
                records_list.append(record_dict)  

                # if 'id_product_range' in record_dict:
                #     id_product_range = record_dict['id_product_range']
                #     print(id_product_range, type(id_product_range))
                    
                # # Find the corresponding record in prod_list
                #     matching_prod = next((prod for prod in prod_list if prod[0] == id_product_range), None)
                # if matching_prod:
                #     # Merge the data from matching_prod into record_dict
                #     record_dict.update(matching_prod)
                #     records_list.append(record_dict)    
                # else:
                #     records_list.append(record_dict)
            
            conn.close()
    

                
            return jsonify(records=records_list), 200
        except Exception as e:
            print(f"Error fetching data: {e}")
            # Close the cursor and connection in case of error
            conn.close()
            return jsonify(error="Failed to fetch data"), 500


            