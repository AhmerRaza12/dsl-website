from flask import jsonify
from db_connect import db
from sqlalchemy.sql import text
from sqlalchemy.exc import SQLAlchemyError

class AdminPanelModel:
    
      def get_all_records(self, table_name):
        try:
            query = text(f"SELECT * FROM {table_name}")
            result = db.session.execute(query)
            records = result.fetchall()
            # Convert RowProxy objects to dictionaries
            records_list = [dict(row._mapping) for row in records]
            return jsonify(records=records_list), 200
        except SQLAlchemyError as e:
            print(f"Error fetching data: {e}")
            return jsonify(error=str(e)), 500

