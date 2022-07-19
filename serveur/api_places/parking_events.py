from parametre import *
import json



db=SQLAlchemy(app)


class ParkingEvents(db.Model):
    __tablename__= 'parking_events'
    parking_id = db.Column(db.Integer,primary_key=True)
    slot_id = db.Column(db.Integer,nullable=True)
    door_id = db.Column(db.Integer,nullable=True)
    typ = db.Column(db.String(20), nullable=False)
    sta = db.Column(db.Boolean, nullable=False)

    #  afficher une sortie au format json
    def  json(self):
        return{'id': self.id, 'type': self.typ, 'status': self.sta
        }
    
    #  ajouter une place de parking
    def add(_typ,_sta):
        new_place = Place(typ=_typ, sta=_sta) 
        db.session.add(new_place)
        db.session.commit()

    #  afficher toute les places
    def getAll():
        return[Place.json(place) for place in Place.query.all() ]

    # un film via l'id
    def getByParkingId(_id):
        return [Place.json(Place.query.filter_by(id=_id).first())]



    
      