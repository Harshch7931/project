import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class Signup extends Component {

static navigationOptions = { header: null }

  render() {
    return (
      <View style={styles.container1}>
        <Text style={styles.header}>SIGN-UP</Text>
        <TextInput style={styles.and1} placeholder='Email-ID'
          placeholderTextColor='#bdbdbd'
          keyboardType='email-address' />
        <TextInput style={styles.and1} placeholder='Password'
          placeholderTextColor='#bdbdbd' secureTextEntry={true} />
        
        /> */}
        <TouchableOpacity style={styles.bottom} onPress={() => this.props.navigation.navigate('Profile')}><Text style={styles.bintext}>Sign Up</Text></TouchableOpacity>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#eeeeee',
    flex: 1

  },
  header: {
    fontSize: 24,
    color: 'grey',
    padding: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  
  and1: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1

  },
  
  bottom: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#ff9800",
    marginTop: 357,
    paddingHorizontal:20


  },
  bintext: {
    color: 'white',
    fontWeight: 'bold'
  },

});
