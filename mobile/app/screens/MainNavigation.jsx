import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { View ,Text} from "react-native";
import VisiteurNavigation from "./visiteur/VisiteurNavigation";

const Stack = createNativeStackNavigator();

class MainNavigation extends Component{

    render(){
        return(
            <Stack.Navigator 
                initialRouteName="VisiteurNavigation"
                screenOptions={ {
                    headerShown: false
                } }
            >
                <Stack.Screen component={VisiteurNavigation } name="VisiteurNavigation"/>
            </Stack.Navigator>

        );
    }       
}


export default MainNavigation;