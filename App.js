/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {Component} from 'react';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './app/components/customButton'
import BoardScreen from './app/pages/onBoarding'
import LoginPage from './app/pages/loginPage'
import Link from './app/pages/resendLink'
import ResetPassword from './app/pages/resetPassword'
import Input from './app/components/textInput'
import Logged from './app/pages/loggedpage'
import Navigation from './app/navigation/navigationContainer'
import FbAuth from './app/authentication/fbAuth' 
import GoogleSignIn from './app/authentication/GoogleAuth'
//import Twitter from './app/authentication/twitter'
import TwitterSignIn from './app/authentication/twitterAuth'
class App extends Component{
  render(){
    return(
<Navigation/>
  );
  }
}
export default App;
