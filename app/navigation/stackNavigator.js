
import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './tabNavigator'

import BoardScreen from '../pages/onBoarding'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/cards'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Board" component={BoardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}



export default MainStackNavigator;