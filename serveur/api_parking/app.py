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
        cursor = conn.execute("SELECT * FROM Parking ")

        parkings=[

            dict (id_parking=row[0], slot_id=row[1], door_id=row[2], slot_type=row[3], slot_status=row[4], door_status=row[5], created_at=row[6])
            for row in cursor.fetchall()
        ]

        if parkings is not None:
            return jsonify(parkings)

    if request.method == "POST":
        new_slot_id = request.form["id_place"]
        new_door_id = request.form["id_porte"]
        new_slot_type = request.form["type_place"]
        new_slot_status = request.form["status_place"]
        new_door_status = request.form["status_porte"]
        new_created_at = request.form["time"]
        sql = """INSERT INTO Parking (slot_id,door_id,slot_type,slot_status,door_status,created_at) VALUES (?,?,?,?,?,?) """

        cursor = cursor.execute(sql, (new_slot_id,new_door_id,new_slot_type,new_slot_status,new_door_status,new_created_at))

        conn.commit()

        return f"Parking avce l'id:{cursor.lastrowid} creer avec sucess", 201


@app.route("/parking/<int:id>", methods=["GET","PUT"])

def rechercher_parking(id):
    conn = db_connection()
    cursor = conn.cursor()
    parking = None

    if request.method== "GET":
        cursor.execute("SELECT * FROM Parking WHERE parking_id=?",(id,))
        parkings=[

            dict (id_parking=row[0], slot_id=row[1], door_id=row[2], slot_type=row[3], slot_status=row[4], door_status=row[5], created_at=row[6])
            for row in cursor.fetchall()
        ]

        if parkings is not None:
            return jsonify(parkings)
        else:
            return "erreur",404            


if __name__=="__main__":
    app.run(debug=True)
