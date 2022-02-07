import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,Alert,ScrollView,FlatList,} from 'react-native';
import Mrecord from '../../assets/Mrecord.png';
import find from '../../assets/find.png';
import join from '../../assets/join.png'
//import { Mohamed } from '../../App';

import Carnet from './Carnet';
import Chercher from './Chercher';
import Joindre from './Joindre';
export default class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Accedez a votre carnet", image:Mrecord,name:"Carnet"},
        {id:2, title: "Cherchez un etablissment", image:find,name:"Chercher"},
        
        {id:2, title: "Joindre un compte", image:join,name:"Joindre"},
        
      ]
    };
  }

  

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.props.navigation.navigate(item.name)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={item.image}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}> {item.title}{item.name} </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
 
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:"white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});