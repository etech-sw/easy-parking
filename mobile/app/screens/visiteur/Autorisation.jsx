import React, { Component } from "react";
import { View, Text,TextInput,StyleSheet,Pressable,Image } from "react-native";
import Colors from "../../../couleur";


class Autorisation extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.partie1}>
                <Image source={require('../../../assets/politique.png')}
                    style={{height:"70%",width:"60%"}}/>
                </View>
                <View style={styles.partie2}>
                <Text style={styles.titre}>acceptez-vous les <Text style={{textDecorationLine:"underline"}}>conditions generales d'utilisation et la politique  de confidentialite</Text> de edson parking?</Text>
                </View>
                <View style={styles.partie3}>
                <Pressable style={styles.accepte}>
                    <Text style={{fontSize:20,fontWeight:"400",color:Colors.white}}>J'accepte</Text>
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
      partie1:{
        width:"100%",
        height:"40%",
        backgroundColor:Colors.white,
        justifyContent:"center",
        alignItems:"center"


      },
      partie2:{
        width:"70%",
       
        backgroundColor:Colors.white

      },
      partie3:{
        width:"100%",
      
        backgroundColor:Colors.white,
        alignItems:"center",
        paddingTop:30

      },
      titre:{
        fontSize:20,
        textAlign:"left",
        marginTop:30,
        textAlign:"center"
      },
      accepte:{
        width:"60%",
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        backgroundColor:Colors.purple2,
        
      }
    });
export default Autorisation;