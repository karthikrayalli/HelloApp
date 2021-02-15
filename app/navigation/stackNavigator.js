
import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BoardScreen from '../pages/onBoarding'
import LoginPage from '../pages/loginPage'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Board" component={BoardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;