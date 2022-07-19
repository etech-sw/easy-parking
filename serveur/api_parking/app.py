from colorama import Cursor
from flask import Flask, request, jsonify
import json 
import sqlite3

app = Flask(__name__)

def db_connection():
        conn = None
        try:
            conn = sqlite3.connect('parking.sqlite')
        except sqlite3.error as e:
            print(e)
        return conn        


@app.route("/parking", methods=["GET","POST"])
def parkings():
    conn = db_connection()
    cursor = conn.cursor()

    if request.method == "GET":
        cursor = conn.execute("SELECT * FROM PARKING_SMART ")

        parkings=[

            dict (id=row[0], parking_id=row[1],slot_id=row[2], door_id=row[3], slot_type=row[4], slot_status=row[5], door_status=row[6], created_at=row[7])
            for row in cursor.fetchall()
        ]

        if parkings is not None:
            return jsonify(parkings)

    if request.method == "POST":
        request.form= request.get_json() 
        new_parking_id = request.form["parking_id"]
        new_slot_id = request.form["slot_id"]
        new_door_id = request.form["door_id"]
        new_slot_type = request.form["slot_type"]
        new_slot_status = request.form["slot_status"]
        new_door_status = request.form["door_status"]
        new_created_at = request.form["created_at"]
        sql = """INSERT INTO PARKING_SMART (parking_id,slot_id,door_id,slot_type,slot_status,door_status,created_at) VALUES (?,?,?,?,?,?,?) """

        cursor = cursor.execute(sql, (new_parking_id,new_slot_id,new_door_id,new_slot_type,new_slot_status,new_door_status,new_created_at))

        conn.commit()

        return f"Parking avce l'id:{cursor.lastrowid} creer avec sucess", 201


@app.route("/parking/<int:id>", methods=["GET","PUT"])

def rechercher_parking(id):
    conn = db_connection()
    cursor = conn.cursor()
    parking = None

    if request.method== "GET":
        cursor.execute("SELECT * FROM PARKING_SMART WHERE parking_id=?",(id,))
        parkings=[
            
            dict (id=row[0], parking_id=row[1],slot_id=row[2], door_id=row[3], slot_type=row[4], slot_status=row[5], door_status=row[6], created_at=row[7])
            for row in cursor.fetchall()
        ]

        if parkings is not None:
            return jsonify(parkings)
        else:
            return "erreur",404            


if __name__=="__main__":
    app.run(debug=True)
