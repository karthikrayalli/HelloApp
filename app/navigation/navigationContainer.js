
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './stackNavigator'
import BottomTabNavigator from './tabNavigator'
class Navigation extends Component{
  render(){
    return(

          <NavigationContainer>
             <MainStackNavigator/>
          </NavigationContainer>
    
    );
  } 
}
export default Navigation;
