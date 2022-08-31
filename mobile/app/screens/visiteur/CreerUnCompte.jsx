import React, { Component } from "react";
import { View, Text,TextInput,StyleSheet,Pressable,ScrollView } from "react-native";

import Colors from "../../../couleur";


class CreerUnCompte extends Component{
    constructor( props ) {
        super( props );
        this.state = {
            checkbox1: false,
            checkbox2: false
        };
    }

    toggle1() {
        this.setState( {
            checkbox1: !this.state.checkbox1
        } )
    }

    toggle2() {
        this.setState( {
            checkbox2: !this.state.checkbox2
        } )
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.partie1}>
                    <Text style={{fontSize:17,textAlign:"center",color:Colors.purple2,fontWeight:"700"}}>VOTRE PARKING TRES PROCHE</Text>
                    <Text style={{fontSize:10,textAlign:"center",color:Colors.black,fontWeight:"500"}}>facile et optimale</Text>
                </View>
                
               <View style={styles.partie2}>
                    <View style={styles.titre}><Text >Email</Text></View>
                    <TextInput style={styles.champs} placeholder="Email"/>
                    <Text style={styles.titre}>Mot de passe</Text>
                    <TextInput style={styles.champs} placeholder="Mot de passe" secureTextEntry={true}/>
                    <Text style={styles.titre}>Confirmer</Text>
                    <TextInput style={styles.champs} placeholder="confirmation de Mot de passe " secureTextEntry={true}/>
                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "Autorisation" );
                        } }>
                        <Text style={{ fontWeight:"700",fontSize:15,color:Colors.white,textTransform: 'uppercase'}}> Confirmation</Text>
                        </Pressable>

               </View>
               <View style={styles.partie3}>
                     <View>
                        <Pressable 
                            style={styles.cochez}
                            onPress={ this.toggle1.bind( this ) }
                        >
                            <View style={styles.confirmation}>
                                <View style={[ styles.chekbox, {
                                    display: this.state.checkbox1 ? "flex" : "none"
                                } ]}></View>
                            </View>
                            <Text>  j'accepte la politique de confidentialite</Text>
                        </Pressable>
                        <Pressable 
                            style={[styles.cochez,{marginTop:6}]}
                            onPress={ this.toggle2.bind( this ) }
                        >
                            <View style={styles.confirmation}>
                                <View style={[ styles.chekbox, {
                                    display: this.state.checkbox2 ? "flex" : "none"
                                } ]}></View>
                            </View>
                            <Text>  je souhaite recevoir les bons plans </Text>
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
             </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        backgroundColor: '#fff'
      
        
     
        
      },
    partie1: {

        width:"100%",
       
        justifyContent:"center",
        alignItems:"center",
        justifyContent:"flex-start",
       
        
      
        
        
    }
    ,
    partie2: {
        width:"100%",
          
        alignItems:"center",
        paddingTop: 8,
        backgroundColor:Colors.white,

        
    },
    partie3: {

        width:"100%", 
        alignItems:"center",
        backgroundColor:Colors.white,
        justifyContent:"center",
        alignItems:"center",
        paddingTop: 5,
       
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
        alignItems:"center",
        overflow:"hidden"
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
        borderRadius:4,

    }


});

export default CreerUnCompte;