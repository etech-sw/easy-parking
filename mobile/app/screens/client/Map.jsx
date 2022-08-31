import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text,TextInput, View, Dimensions, Button, StatusBar, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../../couleur';
import { BlurView } from 'expo-blur';

export default function Map() {
  const [ isFucosed, setFocused ] = React.useState( false );
  const [ showAutoComplete, setVisible ] = React.useState( true );
  const [ text, setText ] = React.useState( "" );
  const [ data, setData ] = React.useState( [
    "Melen", "Mendong", "Poste Centrale",
    "Awaie", "Acacia", "TKC", "Mokolo", "Mokolo Elobi"
  ] );

  const getMatching = ( val = "" ) => {
    if( val === "" ) {
      return [];
    }

    val = val.toLocaleLowerCase().trim();
    val = val.replace( /[\s\t\r]{1,}/ig, " " );
    val = val.split( " " );

    return data.filter( ( item = "" ) => {
      const 
       place = item.toLocaleLowerCase();
        for( let part of val ) {
          if ( place.search( part ) !== -1 ) {
            return true;
          }
        }
      return false;
    } );
  };

  return (
    
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View 
        style={[
          styles.searchBarContainer,
          isFucosed ? styles.searchBarContainerFocused : {}
        ]}
      >
        <BlurView
          intensity={ 110 } 
          tint="light"
          style={styles.search}
        >
          <View style={styles.searchBar}>
            <Ionicons 
              name="arrow-back" 
              size={25} 
              color={ Colors.black }
              style={ {
                marginRight: 10,
                display: isFucosed ? "flex" : "none"
              } } 
              onPress={ () => {
                setFocused( false )
              } }
            /> 
            <TextInput
              placeholder='Recherche:'
              style={styles.searchField}
              value={ text }
              onFocus={ () => setFocused( true ) }
              onChangeText={ ( text ) => {
                setText( text );
                setVisible( true );
              } }
            />
            <Ionicons 
              name="search" 
              size={25} 
              color={ Colors.black } 
              style={ {
                display: isFucosed ? "none" : "flex"
              } } 
            /> 
          </View>
          <View 
            style={[
              styles.dataList, {
                display: showAutoComplete ? "flex" : "none"
              }
            ]}
          >
            { getMatching( text ).map( ( item, index ) => {
              return (
                <Pressable 
                  style={ styles.dataListItem }
                  key={ String( index ) }
                  onPress={ () => {
                    setText( item );
                    setVisible( false );
                  } }
                >
                  <Text> { item } </Text>
                </Pressable>
              );
            } ) }
          </View>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search:{
    width:"90%",
    flexDirection:"column",
    backgroundColor: Colors.white,
    borderWidth: 0,
    borderColor:"#EEE",
    position: "relative",
    overflow: "hidden",
    paddingHorizontal: 15,
    borderRadius: 10
  },
  searchBar:{
    flexDirection:"row",
    width:"100%",
    alignItems: "center"
  },
  searchField: {
    height: 55,
    borderWidth: 0,
    flex: 1
  },
  dataList:{
    flexDirection:"column",
    width:"100%"
  },
  dataListItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: 'center',
    height: 45
  },
  searchBarContainer:{
    width:"100%",
    backgroundColor:"transparent",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: StatusBar.currentHeight
    
  },
  searchBarContainerFocused: {
    height: "100%",
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'flex-start',
    top: 0
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});