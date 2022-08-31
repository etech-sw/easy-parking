import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import Map from "./Map";
import MonCompte from "./MonCompte";
import MonCompteNavigation from "./MonCompteNavigation";
import ReservationOne from "./ReservationOne";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../../../couleur";


const tab= createBottomTabNavigator(); 

class ClientNavigation extends Component{
    render(){
        return(
            
                <tab.Navigator 
                    initialRouteName="Map"
                    screenOptions={{
                        tabBarStyle: {
                            backgroundColor:"white"
                        },
                        tabBarActiveTintColor: Colors.black
                    }}
                >
                    <tab.Screen 
                        component={ Map} 
                        name="Map" 
                        options={{
                            headerShown:false,
                            tabBarIcon: ( { focused, color, size } ) => (
                                <Ionicons
                                    color={ color }
                                    name="ios-map"
                                    size={ size } 
                                />
                            ) 
                        }}
                    />
                    <tab.Screen 
                        component={ MonCompteNavigation } 
                        name="MonCompteNavigation"
                        options={{
                            title: "Mon Compte",
                        
                                headerShown:false,
                        
                            tabBarIcon: ( { focused, color, size } ) => (
                                <Ionicons
                                    color={ color }
                                    name="person-circle-outline"
                                    size={ size } 
                                />
                            ) 
                        }}
                    /> 
                </tab.Navigator>
        );
        
    }

}


export default ClientNavigation;