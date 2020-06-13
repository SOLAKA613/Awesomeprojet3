import React from 'react';
import {ActivityIndicator,Button,Clipboard,Image,Share,StatusBar,StyleSheet,Text,TouchableOpacity,View,Alert} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import AsyncImage from './src/screens/RetrieveImage';
import Avatar from './src/screens/showMultipleImages';

console.disableYellowBox = true;

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      < Avatar/>
    </View>
  );
};
export default App;
