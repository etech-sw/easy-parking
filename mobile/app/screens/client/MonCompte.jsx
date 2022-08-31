import React, { Component } from "react";
import { View, Text,TextInput,StyleSheet,Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../../../couleur";
import AddCar from "./AddCar";


class MonCompte extends Component{
    render(){
        return(
            <View style={styles.container}>
                
                
                    <Pressable 
                        style={[ styles.champs, styles.compte ]}
                        onPress={ () => {
                        this.props.navigation.push( "AddCar" );
                        } }>
                            <Ionicons
                                    name="person-circle-outline"
                                    size={60}
                                    color="#6930C3"
                                    
                                />
                        <Text style={{ fontWeight:"700",fontSize:15,color:Colors.black,textTransform: 'uppercase'}}> KANOU Edson</Text>
                    </Pressable>
                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "AddCar" );
                        } }>
                            <Ionicons
                                    name="car"
                                    size={25}
                                    color='black'
                                    
                                />
                        <Text style={styles.text}> Mes vehicules</Text>
                    </Pressable>

                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "AddCar" );
                        } }>
                            <Ionicons
                                    name="ios-add-circle-sharp"
                                    size={25}
                                    color='black'
                                    
                                />
                        <Text style={styles.text}> Mes reservations</Text>
                    </Pressable>
                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "AddCar" );
                        } }>
                            <Ionicons
                                    name="gift"
                                    size={25}
                                    color='black'
                                    
                                />
                        <Text style={styles.text}> Mes bons plans</Text>
                    </Pressable>
                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "AddCar" );
                        } }>
                            <Ionicons style={styles.icon}
                                    name="information"
                                    size={25}
                                    color='black'
                                    
                                />
                        <Text style={styles.text}>  A propos</Text>
                    </Pressable>
            
               
             </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        backgroundColor:Colors.white,
        alignItems: "flex-start",
        justifyContent: "flex-start", 
        
      },
      text:{
        fontWeight:"100",
        fontSize:15,
        color:"#333"

      },
    
    champs:{
        width:"100%",
        height:60,
        backgroundColor:"transparent",
        borderRadius:10,
        borderColor:"#DDD",
        marginTop:2,
        paddingLeft:15,
        alignContent:"flex-start",
        flexDirection:"row"
        

    },
    press:{
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor:Colors.white,
        height:65, 
        marginTop: 3,  
    },
    compte:{
        width:"100%",
        height:"25%",
        backgroundColor:"#DDD",
        alignContent:"center",
        alignItems:"center",
        borderRadius:0
    }
});

export default MonCompte;