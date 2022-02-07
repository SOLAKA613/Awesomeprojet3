import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.png';
import avatar6 from '../../assets/avatar6.png';

export default class Joindre extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data:[
        {image: avatar1},
        {image: avatar2},
        {image:avatar3},
        {image: avatar4},
        {image: avatar6},
     ]
    };
  }

  render() {
    return (
      <FlatList enableEmptySections={true}
        data={this.state.data}
        renderItem={({item}) => {
          return (
            <View style={styles.box}>
              <Image style={styles.image} source={item.image} />
              <View style={styles.boxContent}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                <View style={styles.buttons}>
                  <TouchableHighlight style={[styles.button, styles.view]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ok/androidL/30/ffffff'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.profile]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/male-user/win8/30/ffffff'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.message]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/envelope/p1em/30/ffffff'}}/>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          )
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height:100,
  },
  box: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  title:{
    fontSize:18,
    color:"#151515",
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  buttons:{
    flexDirection: 'row',
  },
  button: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:50,
    marginRight:5,
    marginTop:5,
  },
  icon:{
    width:20,
    height:20,
  },
  view: {
    backgroundColor: "#FF1493",
  },
  profile: {
    backgroundColor: "#1E90FF",
  },
  message: {
    backgroundColor: "#228B22",
  },
});