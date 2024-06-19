from flask import request, jsonify, session
from db_connect import db
from sqlalchemy.sql import text
from sqlalchemy.exc import SQLAlchemyError
from functools import wraps
from datetime import datetime
from sqlalchemy import func

class AdminPanelModel:

    def get_all_records(self, table_name):
        try:
            page = int(request.args.get('page', 1))
            page_size = int(request.args.get('page_size', 10))

            start_date = request.args.get('start_date')
            end_date = request.args.get('end_date')

            offset = (page - 1) * page_size

            if table_name == "booking":
                columns = "DSL_CN, Content, Ptnr_Code, Product, Service, PayMode, Shpr_Name, Orgn_Code, Shpr_Mobile, Cngs_Name, Dstn_Code, Cngs_Mobile"
                where_clauses = []
                params = {}
                print(session['admin_id'])
                print(request.cookies)

                if session['admin_id'] != 'mainadmin':
                    where_clauses.append("Staff = :staff")
                    params['staff'] = session['admin_id']
            else:
                columns = "*"
                where_clauses = []
                params = {}

            base_query = f"SELECT {columns} FROM {table_name}"
            count_query = f"SELECT COUNT(*) FROM {table_name}"

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

            base_query += " ORDER BY Entry_DateTime DESC"
            base_query += " LIMIT :limit OFFSET :offset"

            total_result = db.session.execute(text(count_query), params)
            total_records = total_result.scalar()

            result = db.session.execute(text(base_query), {**params, 'limit': page_size, 'offset': offset})
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


    def insert_record(self, table_name):
        try:
            data = request.form

            admin_id = session.get('admin_id')
            if not admin_id:
                return jsonify({"error": "Authentication required"}), 401

            branch_name_query = text("SELECT branch_name FROM admin WHERE ID = :admin_id")
            branch_name_result = db.session.execute(branch_name_query, {'admin_id': admin_id}).fetchone()
            print(branch_name_result[0])
            if not branch_name_result:
                return jsonify({"error": "Admin not found"}), 404
            branch_name = branch_name_result[0]

            default_values = {
                "Is_Valid": 1,
                "Is_Billed": 0,
                "Is_Uploaded": 1,
                "Entry_DateTime": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                "dstnCC": None,
                "Staff": admin_id,
                "Route": "XTR",
                "Ptnr_Total": 0,
                "DSL_Total": data.get("Total", 0),
                "branch_name": branch_name
            }

            required_fields = [
                "DSL_CN", "Ptnr_Code", "Ptnr_CN", "Product", "Service", "PayMode",
                "AcctNo", "Bkg_Date", "Pku_Date", "Orgn_Code", "Dstn_Code", "Pieces",
                "Weight", "Shpr_Name", "Shpr_Mobile", "Shpr_Phone", "Shpr_Addr", 
                "Cngs_Name", "Cngs_Mobile", "Cngs_Phone", "Cngs_Addr", "Content", 
                "Insured_Value", "Service_Chrg", "Other_Chrg", "Insured_Chrg", "GST",
                "Total", "Remarks", "Instruction", "Discount", "Height", "Length", 
                "Width", "COD", "Status"
            ]

            record_data = {field: data.get(field) for field in required_fields}
            record_data.update(default_values)

            record_data['DSL_CN'] = f"{record_data['DSL_CN']}{branch_name}"

            idbooking_query = text(f"SELECT MAX(idbooking) + 1 FROM {table_name}")
            idbooking_result = db.session.execute(idbooking_query)
            next_idbooking = idbooking_result.scalar() or 1
            record_data['idbooking'] = next_idbooking

            columns = ", ".join(record_data.keys())
            placeholders = ", ".join([f":{field}" for field in record_data.keys()])
            query = text(f'INSERT INTO {table_name} ({columns}) VALUES ({placeholders})')

            db.session.execute(query, record_data)
            db.session.commit()

            return jsonify({"message": "Record inserted successfully"}), 201

        except SQLAlchemyError as e:
            db.session.rollback()
            print(f"Error inserting record: {e}")
            return jsonify(error=str(e)), 500
        

    def update_record(self, table_name, dsl_cn):
        try:
            if table_name != 'booking':
                return jsonify({"error": "Invalid table name"}), 400

            admin_id = session.get('admin_id')
            if not admin_id:
                return jsonify({"error": "Authentication required"}), 4010

            update_data = {
                'DSL_CN': request.form.get('DSL_CN', ''),
                'Ptnr_Code': request.form.get('Ptnr_Code'),
                'Ptnr_CN': request.form.get('Ptnr_CN'),
                'Product': request.form.get('Product'),
                'Service': request.form.get('Service'),
                'PayMode': request.form.get('PayMode'),
                'AcctNo': request.form.get('AcctNo'),
                'Bkg_Date': request.form.get('Bkg_Date'),
                'Pku_Date': request.form.get('Pku_Date'),
                'Orgn_Code': request.form.get('Orgn_Code'),
                'Dstn_Code': request.form.get('Dstn_Code'),
                'Pieces': request.form.get('Pieces'),
                'Weight': request.form.get('Weight'),
                'Shpr_Name': request.form.get('Shpr_Name'),
                'Shpr_Mobile': request.form.get('Shpr_Mobile'),
                'Shpr_Phone': request.form.get('Shpr_Phone'),
                'Shpr_Addr': request.form.get('Shpr_Addr'),
                'Cngs_Name': request.form.get('Cngs_Name'),
                'Cngs_Mobile': request.form.get('Cngs_Mobile'),
                'Cngs_Phone': request.form.get('Cngs_Phone'),
                'Cngs_Addr': request.form.get('Cngs_Addr'),
                'Content': request.form.get('Content'),
                'Insured_Value': request.form.get('Insured_Value'),
                'Service_Chrg': request.form.get('Service_Chrg'),
                'Other_Chrg': request.form.get('Other_Chrg'),
                'Insured_Chrg': request.form.get('Insured_Chrg'),
                'GST': request.form.get('GST'),
                'Total': request.form.get('Total'),
                'Remarks': request.form.get('Remarks'),
                'Instruction': request.form.get('Instruction'),
                'Discount': request.form.get('Discount'),
                'Height': request.form.get('Height'),
                'Length': request.form.get('Length'),
                'Width': request.form.get('Width'),
                'COD': request.form.get('COD'),
                'Status': request.form.get('Status')
            }

            update_data = {k: v for k, v in update_data.items() if v is not None}

            set_clause = ", ".join([f"{key} = :{key}" for key in update_data.keys()])

            update_query = text(f"UPDATE {table_name} SET {set_clause} WHERE DSL_CN = :dsl_cn")
            
            update_data['dsl_cn'] = dsl_cn

            db.session.execute(update_query, update_data)
            db.session.commit()

            return jsonify({"message": "Record updated successfully"}), 200
        except SQLAlchemyError as e:
            print(f"Error updating data: {e}")
            return jsonify(error=str(e)), 500
        

    def get_next_dsl_cn(self):
        try:
            if 'admin_id' not in session:
                return jsonify({"error": "Authentication required"}), 401

            admin_id = session['admin_id']

            branch_query = text("SELECT branch_name FROM admin WHERE ID = :admin_id")
            branch_result = db.session.execute(branch_query, {'admin_id': admin_id}).fetchone()
            if not branch_result:
                return jsonify({"error": "Admin not found"}), 404

            branch_name = branch_result[0]

            latest_dsl_cn_query = text("""
                SELECT DSL_CN FROM booking
                ORDER BY Entry_DateTime DESC
                LIMIT 1
            """)
            latest_dsl_cn_result = db.session.execute(latest_dsl_cn_query).scalar()
            
            if latest_dsl_cn_result:
                numerical_part = int(latest_dsl_cn_result[:-3])
                next_dsl_cn_numeric = numerical_part + 1
            else:
                next_dsl_cn_numeric = 1 

            next_dsl_cn = f"{next_dsl_cn_numeric}{branch_name}"

            return jsonify({"next_dsl_cn": next_dsl_cn}), 200
        except Exception as e:
            print(f"Error fetching next DSL_CN: {e}")
            return jsonify(error="Internal Server Error"), 500
        
    def get_booking_details(self):
        try:
            if 'admin_id' not in session:
                return jsonify({"error": "Authentication required"}), 401

            admin_id = session['admin_id']
            
            dsl_cn = request.args.get('dsl_cn')
            if not dsl_cn:
                return jsonify({"error": "DSL_CN parameter is required"}), 400

            booking_details_query = text("""
                SELECT DSL_CN, Status, PayMode, Shpr_Name, Shpr_Addr, Cngs_Name, Cngs_Addr, Content, COD
                FROM booking
                WHERE DSL_CN = :dsl_cn
            """)
            booking_details_result = db.session.execute(booking_details_query, {'dsl_cn': dsl_cn}).fetchone()

            if not booking_details_result:
                return jsonify({"error": f"Booking with DSL_CN {dsl_cn} not found"}), 404

            booking_details = {
                "DSL_CN": booking_details_result[0],
                "Status": booking_details_result[1],
                "PayMode": booking_details_result[2],
                "Shpr_Name": booking_details_result[3],
                "Shpr_Addr": booking_details_result[4],
                "Cngs_Name": booking_details_result[5],
                "Cngs_Addr": booking_details_result[6],
                "Content": booking_details_result[7],
                "COD": booking_details_result[8]
            }

            return jsonify(booking_details), 200
        except Exception as e:
            print(f"Error fetching booking details: {e}")
            return jsonify(error="Internal Server Error"), 500