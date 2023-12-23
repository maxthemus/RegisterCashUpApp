import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RegisterView from './Components/RegisterView';
import { useEffect, useRef, useState } from 'react';
import Register from './Models/Register';
import RegisterController from './Components/RegisterController';
import RegisterbalanceView from './Components/View/RegisterBalanceView';
import TableHeader from './Components/View/TableHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterBalanceScreen from './Components/Screens/RegisterBalanceScreen';
import DefaultRegisterScreen from './Components/Screens/DefaultRegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createBottomTabNavigator();
//const Stack = createMaterialTopTabNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Home"
            component={RegisterBalanceScreen}
            options={{ headerTitle: () => null}}

          />
          <Stack.Screen
            name="Test"
            component={DefaultRegisterScreen}
            options={{ headerTitle: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
