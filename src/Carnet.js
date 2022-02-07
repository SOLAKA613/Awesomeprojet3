import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import pescription from '../../assets/prescription.png';
import drug from '../../assets/Drug.jpg';
import appointment from '../../assets/appointment.png';
import visit from '../../assets/visit.png';
import radio from '../../assets/radio.png';
import lab from '../../assets/lab.png';
import op from '../../assets/operation.png';
import vaccin from '../../assets/vaccine.png';
import mesure from '../../assets/measurement.png';
import diet from '../../assets/diet.png';
import allergie from '../../assets/allergy.png';
import pression from '../../assets/Bloodpressure.png';
export default class Carnet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Ordonnances",  color:"#87CEEB", members:6,  image:pescription},
        {id:2, title: "Medicament",     color:"#4682B4", members:12, image:drug} ,
        {id:3, title: "Rendez vous",   color:"#6A5ACD", members:5,  image:appointment} ,
        {id:4, title: "Medecins",  color:"#FF69B4", members:6,  image:visit, name:"ChoisirMedecins"} ,
        {id:5, title: "Vistes",   color:"#00BFFF", members:7,  image:"https://img.icons8.com/color/70/000000/classroom.png"} ,
        {id:6, title: "Radiologies",   color:"#00FFFF", members:8,  image:radio} ,
        {id:8, title: "Test de laboratoire",    color:"#20B2AA", members:23, image:lab} ,
        {id:9, title: "Chirurgies", color:"#191970", members:45, image:op} ,
        {id:10, title: "Vaccins",     color:"#008080", members:13, image:vaccin} ,
        {id:11, title: "Poids et mesusres",     color:"#4682B4", members:13, image:mesure} ,
        {id:12, title: "Regime alimentaire",     color:"#FF69B4", members:13, image:diet} ,
        {id:13, title: "Parties du corps soignees",     color:"#00BFFF", members:13, image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
        {id:14, title: "Allergies",     color:"#008080", members:13, image:allergie} ,
        {id:7, title: "Pression arterielle",  color:"#FF69B4", members:6,  image:pression} 
      ]
    };
  }

  ui

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
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.props.navigation.navigate(item.name)}}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Image style={styles.icon} source={{uri:"https://img.icons8.com/ios/40/000000/settings.png"}}/>
                </View>
                <Image style={styles.cardImage} source={item.image}/>
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.members} members</Text>
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
    
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
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
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     