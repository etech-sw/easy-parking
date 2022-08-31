import React, { Component } from "react";
import { View, Text, StyleSheet,Pressable,Image } from "react-native";
import Colors from "../../../couleur";


class Accueil extends Component{

    render(){

        return(
            <View style={styles.container}>
                <View style={styles.partie1}>
                    <Text style={{fontSize:26,textAlign:"center",color:Colors.purple2,fontWeight:"700"}}>
                        BIENVENUE CHEZ EDSON PARKING
                    </Text>

                </View>
                <View style={styles.partie2}>
                    <Image source={require('../../../assets/logo1.png')}
                    style={{ width:"45%"}}
                    resizeMode='contain' />

                </View>
                <View style={styles.partie3}>
                    <Pressable style={[ styles.press, styles.press1 ]}
                        onPress={ () => {
                            this.props.navigation.push( "ClientNavigation" );
                          } }>
                        <Text style={ styles.press1Text}> Chercher une place </Text>
                    </Pressable>
                    <Pressable 
                      style={[styles.press, styles.press2]}
                      onPress={ () => {
                        this.props.navigation.push( "CreerUnCompteOne" );
                      } }
                    >
                        <Text style={ styles.press2Text }> Créer un Compte </Text>
                    </Pressable>

                </View>
                <View style={styles.partie4}>
                <Pressable onPress={()=>{this.props.navigation.push('Connexion');}}>
                <Text style={{fontSize:18,textAlign:"center",color:"black"}}>
                    Deja un compte ?
                    
                        <Text style={{color:Colors.purple2,fontWeight:"900", textDecorationLine: "underline"}}> se connecter</Text>
                    
                    </Text>
                    </Pressable>
                </View>
                
                
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "flex-start", 

    },
    partie1: {

        width:"96%",
        height:"25%",
        justifyContent:"center",
        alignItems:"center",
        paddingTop: 30
        
    }
    ,
    partie2: {

        width:"100%",
        height:"25%",
        justifyContent:"center",
        alignItems:"center"
    },
    partie3: {

        width:"100%",
        height:"35%",
        alignItems:"center",
        paddingTop: 45
    },
    partie4: {
        width:"100%",
        height:"15%",
        paddingTop: 20
    },
    press:{
        width:"70%",
        height: 65,
        backgroundColor:"black",
        borderRadius: 15,
        marginTop:10,
        justifyContent: "center",
        alignItems: "center"
    },
    press1: {
        backgroundColor: Colors.purple2
    },
    press1Text:{
        fontSize:15,
        fontWeight:"700",
        color:Colors.white
    },
    press2Text:{
        fontSize:15,
        fontWeight:"700",
        color:Colors.purple2,

    },
    press2:{
        backgroundColor:"transparent",
        borderWidth:3,
        borderStyle:"solid",
        borderColor:Colors.purple2
    }

  });




export default Accueil;