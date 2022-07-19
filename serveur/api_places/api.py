from places import *

@app.route('/data', methods=['POST'])
def ajouter_place():
    
    request_data = request.get_json()  # recuperer le donnees du client
    Place.ajouter_place(request_data["type"], request_data["statut"]
                    )
    response = Response("place ajouter", 201, mimetype='application/json')
    return response

#  obtenr toute les laces de notre bd
@app.route('/places', methods=['GET'])
def get_places():
   
    return jsonify({'Places': Place.get_all_place()})

#  obtenir la place par l'id

@app.route('/places/<int:id>', methods=['GET'])
def get_place_by_id(id):
    return_value = Place.get_place(id)
    return jsonify(return_value)   

#  ajouter un films a la bd     

@app.route('/places', methods=['POST'])
def ajouter_place():
    
    request_data = request.get_json()  # recuperer le donnees du client
    Place.ajouter_place(request_data["type"], request_data["statut"]
                    )
    response = Response("place ajouter", 201, mimetype='application/json')
    return response

#mettre a jour un film

@app.route('/places/<int:id>', methods=['PUT'])

def update_place(id):
    
    request_data = request.get_json()
    Place.update_place(id, request_data['type'], request_data['statut'])
    response = Response("place modifier", status=200, mimetype='application/json')
    return response


@app.route('/placess/<int:id>', methods=['PUT'])

def update_places(id):
    
   # request_data = request.get_json()
    Place.update_places(id)
    #response = Response("place modifier", status=200, mimetype='application/json')
    return "ok"



@app.route('/places/<int:id>', methods=['DELETE'])
def remove_movie(id):
    
    Place.delete_place(id)
    response = Response("place suprimer", status=200, mimetype='application/json')
    return response

if __name__ == "__main__":
    app.run(port=1234, debug=True)    


