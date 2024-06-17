from flask import jsonify, request
from db_connect import db
from sqlalchemy.sql import text
from sqlalchemy.exc import SQLAlchemyError

class AdminPanelModel:
    

    def get_all_records(self, table_name):
        try:
            page = int(request.args.get('page', 1))
            page_size = int(request.args.get('page_size', 10))
            
            start_date = request.args.get('start_date')
            end_date = request.args.get('end_date')
            
            offset = (page - 1) * page_size
            
            if table_name == "booking":
                columns = "idbooking, Content, Ptnr_Code, Product, Service, PayMode, Shpr_Name, Orgn_Code, Shpr_Mobile, Cngs_Name, Dstn_Code, Cngs_Phone"
            else:
                columns = "*"
            
            base_query = f"SELECT {columns} FROM {table_name}"
            count_query = f"SELECT COUNT(*) FROM {table_name}"
            
            where_clauses = []
            params = {'limit': page_size, 'offset': offset}
            
            if start_date:
                where_clauses.append("Bkg_Date >= :start_date")
                params['start_date'] = start_date
            
            if end_date:
                where_clauses.append("Bkg_Date <= :end_date")
                params['end_date'] = end_date
            
            if where_clauses:
                where_clause = " WHERE " + " AND ".join(where_clauses)
                base_query += where_clause
                count_query += where_clause
            

            base_query += " LIMIT :limit OFFSET :offset"
            

            total_result = db.session.execute(text(count_query), params)
            total_records = total_result.scalar()
            

            result = db.session.execute(text(base_query), params)
            records = result.fetchall()
            
            records_list = [dict(row._mapping) for row in records]
            
            response = {
                'records': records_list,
                'page': page,
                'page_size': page_size,
                'total_records': total_records,
                'total_pages': (total_records + page_size - 1) // page_size
            }
            
            return jsonify(response), 200
        except SQLAlchemyError as e:
            print(f"Error fetching data: {e}")
            return jsonify(error=str(e)), 500


