from parametre import *
import json



db=SQLAlchemy(app)


class Place(db.Model):
    __tablename__= 'places'
    id = db.Column(db.Integer,primary_key=True)
    typ = db.Column(db.String(20), nullable=False)
    sta = db.Column(db.Boolean, nullable=False)

    #  afficher une sortie au format json
    def  json(self):
        return{'id': self.id, 'type': self.typ, 'status': self.sta
        }
    
    #  ajouter une place de parking
    def ajouter_place(_typ,_sta):
        new_place = Place(typ=_typ, sta=_sta) 
        db.session.add(new_place)
        db.session.commit()

#  afficher toute les places

    def get_all_place():
        return[Place.json(place) for place in Place.query.all() ]

# un film via l'id


    def get_place(_id):
        return [Place.json(Place.query.filter_by(id=_id).first())]

#  mettre a jour une place 

    def update_place(_id,_typ,_sta):

        Place_to_update = Place.query.filter_by(id=_id).first()
        Place_to_update.typ = _typ
        Place_to_update.sta = _sta
        db.session.commit()

#  mettre a jour une place 

    def update_places(_id):
       
        Place_to_update = Place.query.filter_by(id=_id).first()
        if Place_to_update.sta == 0 :
            Place_to_update.sta = 1
        else:
            Place_to_update.sta = 0

        db.session.commit()


# suprimer une place

    def delete_place(_id):
        Place.query.filter_by(id=_id).delete()
        
        db.session.commit()

    
      