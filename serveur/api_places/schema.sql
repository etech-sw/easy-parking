DROP TABLE IF EXISTS parking_events;

CREATE TABLE parking_events (
    parking_id INTEGER PRIMARY KEY AUTOINCREMENT,
    slot_id INTEGER NOT NULL,
    door_id INTEGER NOT NULL,
    slot_type TEXT NOT NULL,
    slot_status TEXT NOT NULL,
    door_status TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL
);