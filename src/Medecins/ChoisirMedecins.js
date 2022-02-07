import React, { Component } from 'react';
import {StyleSheet, Text, TextInput,View,TouchableHighlight,Image} from 'react-native';
import { Container, Header, Content, Form, Item, Picker,Button,Icon  } from 'native-base';
export default class PickerInputExample extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }

  onValueChange1(value: string) {
    this.setState({
      selected1: value
    });
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  onValueChange3(value: string) {
    this.setState({
      selected3: value
    });
  }
  render() {
    return (
      <Container>
        
        <Content>
        
          <Text style={styles.Text1} >Choisir la spécialité médicale:</Text>

          <Form style={styles.form1} >
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="spécialité"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange1.bind(this)}
              >
                <Picker.Item label="L’allergologie ou l’immunologie" value="key0" />
                <Picker.Item label="L’anesthésiologie" value="key1" />
                <Picker.Item label="L’andrologie" value="key2" />
                <Picker.Item label="La cardiologie" value="key3" />
                <Picker.Item label="La chirurgie" value="key4" />
              </Picker>
            </Item>
          </Form>
          
          <Text style={styles.Text1} >Choisir pays:</Text>

          <Form style={styles.form2} >
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Pays"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Marroc" value="key0" />
                <Picker.Item label="mauritanie" value="key1" />
                <Picker.Item label="France" value="key2" />
                <Picker.Item label="Espagne" value="key3" />
                <Picker.Item label="USA" value="key4" />
              </Picker>
            </Item>
          </Form>

          <Text style={styles.Text1} >Choisir ville:</Text>

          <Form style={styles.form2} >
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Ville"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChange3.bind(this)}
              >
                <Picker.Item label="Tetouan" value="key0" />
                <Picker.Item label="Tanger" value="key1" />
                <Picker.Item label="Rabat" value="key2" />
                <Picker.Item label="Casablanca" value="key3" />
                <Picker.Item label="marrakech" value="key4" />
              </Picker>
            </Item>
          </Form>

          <Button style={styles.button} full success onPress={() => this.props.navigation.navigate('ListeMedecins')}>
          <Text>Valider</Text>
          </Button>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  Text1: {
      fontSize:20,
      marginTop:20,
      marginBottom:20,
  },  
  button: {
      width:285,
      borderRadius:20,
      marginTop:55,
      marginLeft:35,
  }

});