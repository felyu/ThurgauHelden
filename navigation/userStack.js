import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


// import DiscoveryScreen from '../screens/DiscoveryScreen';
// import SearchScreen from '../screens/SearchScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import DealsScreen from '../screens/DealsScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import BusinessDetailsScreen from '../screens/BusinessDetailsScreen';
// import SearchKeyboard from '../screens/SearchKeyboardScreen';

import EmergencyScreen from '../screens/Emergency';
import MapScreen from '../screens/Map';
import ChatScreen from '../screens/Chat';

// SVG Icons for the bototm tab Navigator

import Chat from '../assets/icons/Chat';
import Pin from '../assets/icons/Pin';

import Trophy from '../assets/icons/Trophy';
import LightningBolt from '../assets/icons/LightningBolt';
import Search from '../assets/icons/Search';
import Compass from '../assets/icons/Compass';
import Settings from '../assets/icons/Settings';
import Health from '../assets/icons/Health';
import Logo from '../assets/icons/Logo';



// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function UserTabStack() {
// Generé des icons
// https://react-svgr.com/playground/?icon=true&native=true

  return (
      <Tab.Navigator 
        initialRouteName="Emergency"
        screenOptions={{ 
          tabBarVisible: false,
          headerShown: false,
          tabBarInactiveTintColor: '#B9BCBE',
          tabBarActiveTintColor: '#F00100',
          tabBarStyle:({
            fontFamily: 'chivo',
            backgroundColor: 'white',
            borderTopColor: "#E5E5E5",
            borderTopWidth: 1,
          }),
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: "chivo",
          }
        }}>

        {/* <Tab.Screen 
        name='Deals'
        component={EmergencyScreen}
        options={{
          title: 'News',
          tabBarBadge: true,
          tabBarBadgeStyle: ({
            top: Platform.OS === "ios" ? 3 : 9,
            marginLeft: 2,
            minWidth: 9,
            maxHeight: 9,
            borderRadius: 6,
            fontSize: 6,
            lineHeight: 10,
            alignSelf: undefined,
            backgroundColor: '#FF0000',
          }),
          tabBarIcon: ({ focused, color }) => (
            <LightningBolt name="LightningBolt" size={23} color={color} />
          )
        }}
        /> */}

        <Tab.Screen 
        name='Map'
        component={MapScreen}
        options={{
          title: 'Karte',
          tabBarIcon: ({color}) => (
            <Pin name="Pin" size={28} color={color} />
          )
        }}
        />

        <Tab.Screen 
        name='Discovery'
        component={EmergencyScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({focused, color }) => (
            <View
              style={{
                position: 'absolute',
                bottom: -10, // space from bottombar
                height: 64,
                width: 64,
                borderRadius: 100,
                backgroundColor: focused ? "#ffffff" : "#ffffff",
                borderWidth: focused ? 3.25 : 2.5,
                borderColor: focused ? "#F00100" : "#B9BCBE",
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Logo name="Search" size={35}  color={focused ? "#F00100" : "#B9BCBE"}/>
            </View>
          ),
        }}
        />

        <Tab.Screen 
        name='Status'
        component={ChatScreen}
        options={{
          title: 'Überblick',
          tabBarIcon: ({color}) => (
            <Health name="Health" size={24} color={color} />
          )
        }}
        /> 

        {/* <Tab.Screen 
        name='Settings'
        component={EmergencyScreen}
        options={{
          title: 'Rangliste',
          tabBarIcon: ({color}) => (
            <Trophy name="Trophy" size={21} color={color} />
          )
        }}
        />  */}

      </Tab.Navigator>

  );
}

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
     initialRouteName="Home"
     screenOptions={{ 
      headerShown: false,
     }}
     >
      <Stack.Screen name="Home" component={UserTabStack} />
      <Stack.Screen 
      options={{
        animationEnabled:false,
        headerShown: false,
       }}
      name="SearchPage" component={EmergencyScreen} />
      <Stack.Screen 
      options={{
        animationEnabled:false,
        headerShown: false,
       }}
      name="BusinessDetails" component={EmergencyScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
  