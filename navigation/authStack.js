import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens 
import WelcomeScreen from '../screens/Welcome';
import InformationsScreen from '../screens/signup/Informations';
import AddressScreen from '../screens/signup/Address';
import HealthInformationsScreen from '../screens/signup/HealthInformations';
import HelpersScreen from '../screens/signup/Helpers'

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="InformationsScreen" component={InformationsScreen} />
        <Stack.Screen name="AddressScreen" component={AddressScreen} />
        <Stack.Screen name="HealthInformationsScreen" component={HealthInformationsScreen} />
        <Stack.Screen name="HelpersScreen"  component={HelpersScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
