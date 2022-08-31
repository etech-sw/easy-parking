import React, { Component } from "react";
import { View, Text,TextInput,StyleSheet,Pressable,Image,ScrollView} from "react-native";
import Colors from "../../../couleur";


class Connexion extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.partie1}>
                <Image source={require('../../../assets/connexion.png')}
                    style={{height:"80%",width:"70%"}}/>
                </View>
                <View style={styles.partie2}>
                    <View style={styles.titre}><Text >Email</Text></View>
                    <TextInput style={styles.champs} placeholder="Email"/>
                    <Text style={styles.titre}>Mot de passe</Text>
                    <TextInput style={styles.champs}  placeholder="Mot de passe" secureTextEntry={true} /*right={<TextInput.Icon name="eye-off-outline"/>}*/ />
                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "Autorisation" );
                        } }>
                        <Text style={{ fontWeight:"700",fontSize:15,color:Colors.white,textTransform: 'uppercase'}}> Connexion</Text>
                    </Pressable>                      
               </View>
               <View style={styles.partie3}>
                    <Text style={{fontWeight:'600'}}>Mot de passe oublier?</Text>
          

               </View>
               <View style={styles.partie4}>
                    <Text style={{fontWeight:'600'}}>___________OU___________</Text>
                    <Pressable 
                        style={[ styles.champs, styles.press2 ]}
                        onPress={ () => {
                        this.props.navigation.push( "AddCar" );
                        } }>
                        <Text style={{ fontWeight:"700",fontSize:15,color:Colors.purple2,textTransform: 'uppercase'}}> Creer un compte</Text>
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
        height:"25%",
        backgroundColor:Colors.white,
        justifyContent:"center",
        alignItems:"center",
        marginTop:55


      },
      partie2:{
        width:"80%",
        height:"40%",
        backgroundColor:Colors.white

      },
      partie3:{
        width:"100%",
        height:"8%",
        backgroundColor:Colors.white,
        marginTop:1, 
        alignItems:"center"
      },
      partie4:{
        width:"100%",
        height:"20%",
        backgroundColor:Colors.white,
        marginTop:0, 
        alignItems:"center",
        
      },
      titre:{
        width:"90%",
        justifyContent:"flex-start",
        paddingLeft:3,
        marginTop:15,
    },
      champs:{
        width:"100%",
        height:55,
        backgroundColor:"transparent",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#DDD",
        marginTop:1,
        paddingLeft:15

    },
    press:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:Colors.purple2,
        height:60, 
        marginTop:30,  
    },
    press2:{
        justifyContent: "center",
        alignItems: "center",
        opacity:0.9,
        height:50, 
        width:'80%',
        marginTop:15,
        borderWidth:3,
        borderColor:Colors.purple2
    }
    });
export default Connexion;