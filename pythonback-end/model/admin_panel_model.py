import pyodbc
import os
from flask import jsonify
from datetime import datetime


class admin_panel_model():

    def get_all_records(self,table_name):

        selec_query=f"Select * from {table_name}"
        conn=pyodbc.connect(os.getenv("CONN_STR"))
        crs=conn.cursor()
        try:
            crs.execute(selec_query)
            quote_records = crs.fetchall()
            conn.close()

            records_list = []
            for record in quote_records:
                record_dict = dict(zip([column[0] for column in crs.description], record))
                records_list.append(record_dict)
                
            return jsonify(records=records_list), 200
        except Exception as e:
            print(f"Error fetching data: {e}")
            # Close the cursor and connection in case of error
            conn.close()
            return jsonify(error="Failed to fetch data"), 500


            