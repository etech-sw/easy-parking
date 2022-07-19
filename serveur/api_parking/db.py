import sqlite3

conn = sqlite3.connect("parking.sqlite")

cursor = conn.cursor()
sql_query = """CREATE TABLE PARKING_SMART (
    
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    parking_id INTEGER NOT NULL,
    slot_id INTEGER,
    door_id INTEGER,
    slot_type TEXT,
    slot_status BOOLEAN,
    door_status BOOLEAN,
    created_at DATETIME    
)"""

cursor.execute(sql_query)
