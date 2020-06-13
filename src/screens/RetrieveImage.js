import React from 'react';
import {ActivityIndicator,Button,Clipboard,Image,Share,StatusBar,StyleSheet,Text,TouchableOpacity,View,Alert} from 'react-native';
import uuid from 'uuid';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import firebase from '../database/firebaseDb';
import firestore from 'firebase/firestore';

console.disableYellowBox = true;

export default class AsyncImage extends React.Component {
  
  //The constructor for your component
  constructor(props) {
    super(props);
    this.state =
    {
        loading: true,
        mounted: true,
        image: "images",
        url: "",
        profileImageUrl: "",
    }
 }
  TableUrl=[];
 
   //The code that is called when the component is first mounted. Use it to setup the component and load the image files
  componentDidMount() {
    this.setState({ isMounted: true })
    this.getAndLoadHttpUrl()
  }

  getAndLoadHttpUrl = () =>{
    //const {imageName} = this.state.image;
    let storageRef = firebase.storage().ref(this.state.image);
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(imageRef) {
        // And finally display them
        imageRef.getDownloadURL().then((url) => {
          //from url you can fetched the uploaded image easil
          
          this.TableUrl.push(url);
          console.log(TableUrl[0]);
        }).catch((e) => console.log('getting downloadURL of image error => ', e));
      });
    }).catch((e) => console.log('getting listAll of image error => ', e));
  }

  //The code that is called when the component is about to unmount. Use it to cancel any http calls otherwise you will get a memory warning from React
  componentWillUnmount() {
    this.setState({ isMounted: false })
  }
  //The code that is called when the props passed to the component change. It is typically useful when say you are implementing a search functionality and you need to refresh the image after the component is refreshed on the component.
  UNSAFE_componentWillReceiveProps(props) {
    this.props = props
    if (this.props.refresh == true) {
    //Write whatever code you want here.
    console.log(this.state.image);
    }
  }
 

  //The render function to display the image
  render() {
    console.log(this.TableUrl[0]);
        return (
          <>
          <Image source={{uri: this.TableUrl[0]}}  style={{ width: 50, height: 50 }}/>
          <Image source={{uri: this.TableUrl[1]}}  style={{ width: 50, height: 50 }}/>
          </>
        )
     
  }
}





const styles = StyleSheet.create({
  image: {
    width: 100, 
    height: 100
  },
});  