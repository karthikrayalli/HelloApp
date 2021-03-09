
import 'react-native-gesture-handler';
import React,{Component} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './tabNavigator'

import BoardScreen from '../pages/onBoarding'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/cards'
import ResetPassword from '../pages/resetPassword';
import CreateAccount from '../pages/createAccount';
import { ActivityIndicator ,View ,Text,StyleSheet} from 'react-native';


const Stack = createStackNavigator();

class MainStackNavigator extends Component{
  constructor(){
    super();
    this.state = { splash:false };
  }
   
 
  componentDidMount(){
    setTimeout(() => {
      this.setTimePassed();
    },1000);
      
  }

  setTimePassed(){
    this.setState({splash:true});
  }

  render(){
    if(!this.state.splash){
     return( 
        <ActivityIndicator  style={[styles.container, styles.horizontal]}
      color = '#8f60de'
      size = 'large'/>)
    }
    else{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Board" component={BoardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Reset" component={ResetPassword} options={{ headerShown: false }}/>
        <Stack.Screen name="Create" component={CreateAccount} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );
    }           
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});


export default MainStackNavigator;