
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert
} from 'react-native';
import Logo from './abc/Logo.png'
import firebase from 'react-native-firebase'

export default class App extends Component {
    static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    this.state = {
      Email_ID: '',
      Password: '',
    };
  }
  onValueChange(value, prop) {
    this.setState({
      [prop]: value
    });
  }
//function to sign in with help of firebase:-
  createUser = async () => {
    const { Email_ID, Password } = this.state
    try {
      let user = await firebase.auth().signInWithEmailAndPassword(this.state.Email_ID, String(this.state.Password))
      Alert.alert('Welcome ' + user.user.uid)
    }
    catch (e) {
      console.warn('Error ', String(e))
      Alert.alert('Error', String(e))
    }
   
  }
 

 render() {
       
     return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#ff6f00"
          barStyle="light-content"
        />
        <View style={styles.LogoContainer}>
          <Image source={Logo} style={styles.logo} />
          <View>
            <TextInput style={styles.and} placeholder='Email-ID'
              placeholderTextColor='white'
              keyboardType='email-address' onChangeText={(text) => this.onValueChange(text, 'Email_ID')} />
            <TextInput style={styles.and} placeholder='Password'
              placeholderTextColor='white' secureTextEntry={true} onChangeText={(text) => this.onValueChange(text, 'Password')} />
            <TouchableOpacity onPress={() => this.createUser()}><Text style={styles.buttonText}>Sign In</Text></TouchableOpacity>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}><Text style={styles.newText}>Sign Up</Text></TouchableOpacity>
          </View>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    flex: 1,

  },

  logo: {
    height: 200,
    width: 310,
    opacity: 0.9

  },
  LogoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'

  },
  and: {
    backgroundColor: 'grey',
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 130,
    color: 'white',
    borderRadius: 20
  },
  buttonText: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 20

  },
  signupText:{
    textAlign:'center',
    fontSize:16,
    justifyContent:'center',
    paddingVertical:20,
  },
  newText:{
    flexDirection:'row',
    textAlign:'center',
    fontSize:17,
    justifyContent:'center'
  }
});
