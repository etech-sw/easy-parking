import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import Accueil from "./Accueil";
import CreerUnCompte from "./CreerUnCompte";
import Autorisation from "./Autorisation";
import Connexion from "./Connexion";
import AddCar from "../client/AddCar";
import CreerUnCompteOne from "./CreerUnCompteOne";
import ReservationOne from "../client/ReservationOne";
import Map from "../client/Map";
import ClientNavigation from "../client/ClientNavigation";
const Stack = createNativeStackNavigator();

class VisiteurNavigation extends Component{
    render(){
        return(
            <Stack.Navigator 
                initialRouteName="Accueil"
            >
                <Stack.Screen 
                    component={ Accueil } 
                    name="Accueil" 
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    component={ CreerUnCompteOne } 
                    name="CreerUnCompteOne"
                    options={{
                        title: "Creation de compte 1/2"
                    }}
                /> 
                <Stack.Screen 
                    component={ CreerUnCompte } 
                    name="CreerUnCompte"
                    options={{
                        title: "Creation de compte 2/2"
                    }}
                />
                <Stack.Screen 
                    component={ Autorisation } 
                    name="Autorisation"
                    options={{
                        title: "Autorisation"
                    }}
                />
                <Stack.Screen 
                    component={ Connexion } 
                    name="Connexion"
                    options={{
                        title: "Connexion"
                    }}
                />
                <Stack.Screen
                    component={AddCar}
                    name="AddCar"
                    options={{
                        title:"Nouvelle voiture"
                    }} 
                />

                <Stack.Screen
                    component={ReservationOne}
                    name="ReservationOne"
                    options={{
                        title:"RESERVATION"
                    }} 
                />

                <Stack.Screen
                    component={ Map}
                    name="Map"
                    options={{
                        title:"Localisation"
                    }} 
                />
                
                <Stack.Screen
                    component={ClientNavigation}
                    name="ClientNavigation"
                    options={{
                        headerShown:false
                    }} 
                />
            </Stack.Navigator>
        );
    }

}


export default VisiteurNavigation;