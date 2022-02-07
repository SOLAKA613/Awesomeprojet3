import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button,Icon,Item} from 'native-base';

export default class Project1 extends Component {

  render() {
    return (
      <View style={styles.Container}>

        <Image
          source={require('../../../../assets/Icons_Medecins/PCA0.jpg')}
          style={styles.circleImageLayout}
        />
        <View style={styles.text}>
          <View style={styles.text3}>
           <Text style={styles.text1}>Nom: </Text>
           <Text style={styles.text2}>Chauvin </Text>
          </View>
          <View style={styles.text3}>
           <Text style={styles.text1}>Prénom: </Text>
           <Text style={styles.text2}>Jaurge</Text>
          </View>
          <View style={styles.text3}>
           <Text style={styles.text1}>Date de naissance: </Text>
           <Text style={styles.text2}>11/05/1965</Text>
          </View>
          <View style={styles.text3}>
           <Text style={styles.text1}>Pays: </Text>
           <Text style={styles.text2}>Mali</Text>
          </View>
          <View style={styles.text3}>
           <Text style={styles.text1}>Ville: </Text>
           <Text style={styles.text2}>San</Text>
          </View>
          <View style={styles.text3}>
           <Text style={styles.text1}>Hopitale: </Text>
           <Text style={styles.text2}>Clinique la Colombe</Text>
          </View>
          <View style={styles.text3}>
           <Text style={styles.text1}>Spécialité: </Text>
           <Text style={styles.text2}>La gynécologie</Text>
          </View>
          <View style={styles.text3}>
           <Text style={styles.text1}>Nombre d'année de travaille: </Text>
           <Text style={styles.text2}>29</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    //flex: 1,
    marginTop:20,
  },
  circleImageLayout: {
    width: 100,
    height: 100,
    borderRadius: 200 / 2
  },
  text1:{
    fontSize: 18,
  },
  text2:{
    fontSize: 18,
  },
  text: {
    margin: 40,
  },
  text3: {
    flexDirection: 'row',
    marginBottom:25,
  }

});