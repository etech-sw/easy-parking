import sqlite3

conn = sqlite3.connect("parking.sqlite")

cursor = conn.cursor()
sql_query = """CREATE TABLE Parking (
    
    parking_id INTEGER PRIMARY KEY AUTOINCREMENT,
    slot_id INTEGER NOT NULL,
    door_id INTEGER NOT NULL,
    slot_type TEXT NOT NULL,
    slot_status BOOLEAN NOT NULL,
    door_status BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL    
)"""

cursor.execute(sql_query)
