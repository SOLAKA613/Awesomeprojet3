import React, { Component } from 'react';
import {StyleSheet, Text, TextInput,View,TouchableHighlight,Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button,Icon,Item} from 'native-base';
import find from '../../../assets/find.png';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA3.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Hadade Hemed</Text>
                <Text note numberOfLines={1}>Spécialité:L’allergologie</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin0')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA4.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Bernard Fride</Text>
                <Text note numberOfLines={1}>Spécialité:L’anesthésiologie</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin1')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA9.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Elhatimi Sara</Text>
                <Text note numberOfLines={1}>Spécialité:L’andrologie</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin2')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA8.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Elrihani Morade</Text>
                <Text note numberOfLines={1}>Spécialité:La chirurgie cardiaque</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin3')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA10.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Mika Juliana</Text>
                <Text note numberOfLines={1}>Spécialité:La chirurgie vasculaire</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin4')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA1.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Chakroune Abdelouahid</Text>
                <Text note numberOfLines={1}>Spécialité:L’endocrinologie</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin5')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA5.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Dino Khane</Text>
                <Text note numberOfLines={1}>Spécialité:La gériatrie</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin6')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA0.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Chauvin Jaurge</Text>
                <Text note numberOfLines={1}>Spécialité:La gynécologie</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin7')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA2.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Slaoui Khadija</Text>
                <Text note numberOfLines={1}>Spécialité:La médecine nucléaire</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin8')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../../assets/Icons_Medecins/PCA7.jpg')} 
                style={styles.circleImageLayout}/>
              </Left>
              <Body>
                <Text>Fadili Solaimane</Text>
                <Text note numberOfLines={1}>Spécialité:L’oncologie</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {this.props.navigation.navigate('ProfileMedecin9')}}>
                  <Text style={styles.content}>plus...</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  circleImageLayout: {
    width: 60,
    height: 60,
    borderRadius: 200 / 2
  },
  content:{
    color:"rgb(114, 164, 234)",
  },
  inputSearch:{
    marginTop:13,
  },
  saveButton: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    width:70,
    alignSelf: 'flex-end',
    backgroundColor: '#40E0D0',
    borderRadius:30,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
    height:35,
    marginBottom:-2,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
},
})