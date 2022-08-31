import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import AddCar from "./AddCar";
import MonCompte from "./MonCompte";
const Stack = createNativeStackNavigator();

class MonCompteNavigation extends Component{
    render(){
        return(
            <Stack.Navigator 
                initialRouteName="Accueil"
            >
                <Stack.Screen 
                    component={ MonCompte } 
                    name="MonCompte" 
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    component={ AddCar } 
                    name="AddCar"
                    options={{
                        title: "Nouvelle Voiture"
                    }}
                /> 
                
            </Stack.Navigator>
        );
    }

}


export default MonCompteNavigation;