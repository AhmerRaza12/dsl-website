from flask import jsonify
from db_connect import db
from sqlalchemy.exc import SQLAlchemyError

class AdminPanelModel:
    
    def get_all_records(self, table_name):
        try:
            query = f"SELECT * FROM {table_name}"
            result = db.session.execute(query)
            records = result.fetchall()
            records_list = [dict(row) for row in records]
            return jsonify(records=records_list), 200
        except SQLAlchemyError as e:
            print(f"Error fetching data: {e}")
            return jsonify(error="Failed to fetch data"), 500
