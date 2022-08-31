import React, { Component } from "react";
import { View, Text,TextInput,StyleSheet,Pressable } from "react-native";
import Colors from "../../../couleur";


class ReservationOne extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.partie1}>
                    <Text style={{fontSize:17,textAlign:"center",color:Colors.purple2,fontWeight:"700"}}>VOTRE PARKING TRES PROCHE</Text>
                    <Text style={{fontSize:10,textAlign:"center",color:Colors.black,fontWeight:"500"}}>facile et optimale</Text>
                </View>
                
               <View style={styles.partie2}>
                    <View style={styles.titre}><Text >Heure de debut</Text></View>
                    <TextInput style={styles.champs} placeholder="exple:10h30"/>
                    <View style={styles.titre}><Text >Nombre d'heure</Text></View>
                    <TextInput style={styles.champs} placeholder="exple:1"/>

                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "" );
                        } }>
                        <Text style={{ fontWeight:"700",fontSize:15,color:Colors.white,textTransform: 'uppercase'}}> Continuer</Text>
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
        justifyContent: "center", 
        
      },
    partie1: {

        width:"100%",
        height:"10%",
        justifyContent:"center",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingTop: 5,
        backgroundColor:Colors.white,
        
        
    }
    ,
    partie2: {
        width:"100%",
        height:"70%",     
        alignItems:"center",
        paddingTop: 2,
        backgroundColor:Colors.white,
        
    },
    partie4: {
        width:"100%",
        height:"10%",
        paddingTop: 20,
        backgroundColor:Colors.white
    },
    champs:{
        width:"90%",
        height:60,
        backgroundColor:"transparent",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#DDD",
        marginTop:5,
        paddingLeft:15

    },
    press:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:Colors.purple2,
        height:65, 
        marginTop: 20,  
    },
    titre:{
        width:"90%",
        justifyContent:"flex-start",
        paddingLeft:3,
        marginTop:20,
    },
    confirmation:{
        width:15,
        height:15,
        borderWidth:1,
        borderColor:Colors.black,
        marginRight:10,
        borderRight:5,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    cochez:{
        alignItems:"center",
        flexDirection:'row'
    },
    chekbox:{
        width: 11,
        height: 11,
        backgroundColor:Colors.white,
        borderWidth: 4,
        borderColor:Colors.black,
        borderRadius:4

    }


});

export default ReservationOne;