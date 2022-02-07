import React from 'react';
import {Image, StyleSheet, Text,TextInput, TouchableOpacity, View } from 'react-native';


export default class App extends React.Component {
  cstate={
    username:"",
    nom:"",
    prenom:"",
    datenaiss:"",
    email:"",
    tele:"",
    password:""
  }
  
  render(){
    return (
        <View style={styles.container}>
       
       


        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Nom d'utilisateur" 
            placeholderTextColor="#003f5c"
            //onChangeText={(text) => this.validate()}
            onChangeText={text => this.setState({username:text})}
            />
        </View>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Nom" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({nom:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Prenom" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({prenom:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Date de naissance" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({datenaiss:Date})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Telephone" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({tele:text})}/>
        </View>
        
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Mot de passe..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        
        <TouchableOpacity style={styles.SaveBtn} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText} >S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ResetBtn}>
          <Text style={styles.loginText}>Reset</Text>
        </TouchableOpacity>
        
  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:0
  },
  
  inputView:{
    width:"81%",
    backgroundColor:"#8effe1",
    borderRadius:25,
    height:40,
    marginBottom:12,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:40,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  SaveBtn:{
    width:"36%",
    backgroundColor:"green",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
     marginLeft:150,
    marginTop:20
  },
  ResetBtn:{
    width:"36%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
   marginRight:150,
    marginTop:-39,
    marginBottom:0
  },
  loginText:{
    color:"red",
    marginTop:0,

  },
 

});










  