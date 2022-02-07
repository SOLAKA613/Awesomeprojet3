
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button,TextInput,SafeAreaView, Alert,TouchableOpacity} from 'react-native';



   export default function Appp(){
 
    const [person,setPasseword] = React.useState({oldPassed: '' , newPassed: '' , confirNewPassed: ''});

    const clickHandler = () => {
      setPasseword({oldPassed: '' , newPassed: '' , confirNewPassed: ''});
    }

    return (
    
      <SafeAreaView style={styles.container}>
        <View > 
         
          <View style={styles.contentText}>
               <Text style={styles.TitleChan}>Changement de mot de passe</Text>
          </View>
        </View>
        <View style={styles.forms}>
          <Text style={styles.label}>Entrer l'ancien mot de passe:</Text>
          <TextInput secureTextEntry 
            //  multiline for write lot of line in input
            style={styles.input} placeholder="Ancien mot de passe"
            onChangeText={(val) => setPasseword({oldPassed:val})} />
        
          <Text style={styles.label}>Enter nouveau mot de passe:</Text>
          <TextInput  secureTextEntry 
            style={styles.input} placeholder='Nouveau mot de passe '
            onChangeText={(val1) => setPasseword({newPassed:val1})} />
        
          <Text style={styles.label1}>Confirmer le mot de passe:</Text>
          <TextInput
            style={styles.input} returnKeyType='go'
            secureTextEntry    autoCorrect={false} placeholder='Mot de passe '
            onChangeText={(val1) => setPasseword({newPassed:val1})} />
        </View>
        
        <View style={styles.bottounContainer}>
          <TouchableOpacity style={styles.bottoun1} onPress={clickHandler}>
            <Text style={styles.btnText}>Annuler</Text>  
          </TouchableOpacity> 
          <TouchableOpacity style={styles.bottoun2} onPress={clickHandler}>
            <Text style={styles.btnText}>Modifier</Text>
          </TouchableOpacity> 
        </View>

      </SafeAreaView>
     
  

    );
}

const styles = StyleSheet.create({

  container: {
     width : "100%",
    height : "80%",
    justifyContent : "center",
    alignSelf: 'center',
    alignContent: "center",
    backgroundColor: '#F5FCFF',
    flex: 1,   
    
  },
    forms: {
      alignItems:"center",
    },
  instructions: {
    color: 'red',
    marginBottom: 5,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#A5BCEF',
  },
  bottounContainer: {
    marginTop: 20,
    flexDirection: 'row',
   // justifyContent: 'space-between',
    position:'relative',
  },
  bottoun1: {
    width: "30%",
    borderWidth: 1,
    borderRadius: 40,  
    marginLeft: "13%",
    marginVertical: 8,
    borderColor:"red",
    backgroundColor:'#f54c10',
    height:35

  },
  bottoun2: {
    width: "30%",
    borderWidth: 1,
    borderRadius: 40, 
    marginLeft: "13%",
    marginVertical: 8,
    borderColor:"#0397e2", 
    backgroundColor:'#41a6d9',
    height:35
  },
  btnText: {
    textAlign: 'center',
    marginTop:7
  },
  input: {
     height: 42,
     width: "80%",
     borderBottomWidth: 1, 
     marginTop:10,
     marginBottom:10
  },
  label: {
    marginLeft:"-33%" ,
    marginTop: "5%", 
  },
  label1: {
    marginLeft:"-37%",
    marginTop:"5%",
  },
  contentText: {
    height: 45,
    paddingTop: 10,
    backgroundColor: '#afa8a8',
    marginTop:-95,
  },
  TitleChan:{
    textAlign:"center",
    
  }
});