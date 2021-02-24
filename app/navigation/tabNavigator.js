import React from "react"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
//import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons' this will not work in tab navigator
import Icon from 'react-native-vector-icons/Ionicons'

import Contacts from '../pages/contactPage'
import Cards from '../pages/cards'
import Scan from '../pages/scanPage'
import Settings from '../pages/settingsPage'

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Cards"
    activeColor="#8f60de"
    barStyle={{ backgroundColor: '#fff' }}
  >
    <Tab.Screen
      name="Cards"
      component={Cards}
      options={{
        tabBarLabel: 'Cards',
        tabBarIcon: ({ color }) => (
         <Icon name="albums-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Contacts"
      component={Contacts}
      options={{
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ color }) => (
          <Icon name="people-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Scan"
     component={Scan}
      options={{
        tabBarLabel:'Scan',
        tabBarIcon: ({ color }) => (
          <Icon name="md-camera-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-settings-outline" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default BottomTabNavigator;