import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View,  } from 'react-native';
import DatePicker from 'react-native-datepicker';
import firebase from 'react-native-firebase';


export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Email_ID: '',
            password: '',
            date: '01-01-1900'
        };
    }
    static navigationOptions = { header: null }

    handelsetNamelocalstate = (Name) => {
        this.setState({
            Name,
        });
    }
    handelsetEmail_IDlocalstate = (Email_ID) => {
        this.setState({
            Email_ID,
        });
    }
    handelsetpasswordlocalstate = (password) => {
        this.setState({
            password,
        });
    }
    handelsetdatelocalstate = (date) => {
        this.setState({
            date,
        });
    }
    handleRegisterUser = async () => {
        const {
            Name, Email_ID, password, date } = this.state;

       await firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(Email_ID, password)
            .then((user) => {
                const fbRootRefFS = firebase.firestore();
                const user_ID = user.user.uid;
                const userRef = fbRootRefFS.collection('Users').doc(user_ID);
                userRef.set({
                    Name: Name,
                    Email_ID: Email_ID,
                    password: password,
                    date: date
                })
                Alert.alert('Welcome ' + user.user.uid);
            }).catch((error) => {
                Alert.alert('Error')


            })
            
    }

    render() {
        return (
            <View style={styles.container1}>
                <Text style={styles.header}>Profile</Text>
                <TextInput style={styles.and1} placeholder='Name'
                    value = {this.state.Name}
                    placeholderTextColor='#bdbdbd' onChangeText={(text) => this.handelsetNamelocalstate(text)} />
                <TextInput style={styles.and1} placeholder='Email-ID'
                    placeholderTextColor='#bdbdbd'
                    value = {this.state.Email_ID}
                    keyboardType='email-address' onChangeText={(text) => this.handelsetEmail_IDlocalstate(text)} />
                <TextInput style={styles.and1} placeholder='Password'
                    value = {this.state.password}
                    placeholderTextColor='#bdbdbd' secureTextEntry={true} onChangeText={(text) => this.handelsetpasswordlocalstate(text)} />
                <Text style={{ color: 'grey' }}>D.O.B</Text><DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-1900"
                    maxDate="29-05-2019"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(text) => this.handelsetdatelocalstate(text)}
                />
                <TouchableOpacity style={styles.bottom} onPress={() => { this.handleRegisterUser(); this.props.navigation.navigate('Home') }}><Text style={styles.bintext}>Sign Up</Text></TouchableOpacity>
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
        marginTop: 229


    },
    bintext: {
        color: 'white',
        fontWeight: 'bold'
    },

});
