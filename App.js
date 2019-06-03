
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import Home from './Pages/Pages/Home'
import DetailScreen from './Pages/DetailScreen'


//creates a stack navigation between screens:-
const AppNavigator = createStackNavigator(  
  {
    Login,
    Signup,
    Profile,
    Home,
    DetailScreen
  },
  {
    initialRouteName: 'Login'
  },

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
       
  
  render() {
    return (
     
      <AppContainer />
  
    );
  }
}

