import React, { Component } from "react";
import { View, Text,TextInput,StyleSheet,Pressable,ScrollView } from "react-native";
import Colors from "../../../couleur";


class CreerUnCompteOne extends Component{
    render(){
        return(
            <ScrollView  style={styles.container}>
                <View style={styles.partie1}>
                    <Text style={{fontSize:17,textAlign:"center",color:Colors.purple2,fontWeight:"700"}}>VOTRE PARKING TRES PROCHE</Text>
                    <Text style={{fontSize:10,textAlign:"center",color:Colors.black,fontWeight:"500"}}>facile et optimale</Text>
                </View>
                
               <View style={styles.Partie2}>
                    <View style={styles.titre}><Text >Nom</Text></View>
                    <TextInput style={styles.champs} placeholder="Nom"/>
                    <View style={styles.titre}><Text >Prenom</Text></View>
                    <TextInput style={styles.champs} placeholder="prenom"/>
                    <View style={styles.titre}><Text >Telephone</Text></View>
                    <TextInput style={styles.champs} placeholder="Telephone"/>

                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "CreerUnCompte" );
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
             </ScrollView >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        backgroundColor: '#fff',
        paddingBottom:25,
        paddingTop:20
        
        
      },
    partie1: {

        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingTop: 5,
        backgroundColor:Colors.white,
        
        
    }
    ,
    Partie2: {
        width:"100%",     
        paddingTop: 2,
        backgroundColor:Colors.white,
        alignItems:"center",
        
    },
    partie4: {
        width:"100%",
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
    }

});

export default CreerUnCompteOne;