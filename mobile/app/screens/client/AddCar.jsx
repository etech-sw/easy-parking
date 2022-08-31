import react, { Component } from "react";
import React from "react";
import { View, StyleSheet,Text,TextInput,Pressable,ScrollView} from "react-native";
import Colors from "../../../couleur";



class AddCar extends Component{
    render(){
        return(
            <ScrollView>
                <View style={styles.partie1}>
                    <Text style={{fontSize:15,textAlign:"center",fontWeight:"300",lineHeight:18}}>
                    pour acceder au parking,merci d'ajouter 
                    les informations relative a votre vehicule.
                    Elles seront associees a votre reservation.Vous n'aurez pas a 
                    les ajouter de nouveau
                    </Text>
                </View>


                <View style={styles.partie2}>
                    <View style={styles.titre}><Text >Surnom du vehicule</Text></View>
                    <TextInput style={styles.champs} placeholder="Surnom du vehicule"/>
                    <Text style={styles.titre}>Modele</Text>
                    <TextInput style={styles.champs} placeholder="Modele" />
                    <Text style={styles.titre}>Couleur</Text>
                    <TextInput style={styles.champs} placeholder="Couleur" />
                    <Text style={styles.titre}>Immatriculation</Text>
                    <TextInput style={styles.champs} placeholder="Immatriculation" secureTextEntry={true}/>
                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "Autorisation" );
                        } }>
                        <Text style={{ fontWeight:"700",fontSize:15,color:Colors.white,textTransform: 'uppercase'}}> Confirmation</Text>
                        </Pressable>

               </View>

            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width:"100%",
        alignItems: 'center',
        justifyContent: "center", 

        
      },
    partie1: {

        width:"100%",
        paddingHorizontal:15,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colors.white,
        
        
    },
    partie2: {
        width:"100%",
            
        alignItems:"center",
        paddingTop:0,
        backgroundColor:Colors.white,

        
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
        height:10,
        borderWidth:1,
        borderColor:Colors.black,
        marginRight:10,
        borderRight:5,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },


});
export default AddCar;