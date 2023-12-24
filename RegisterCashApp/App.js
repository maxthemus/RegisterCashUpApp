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
import InfoScreen from './Components/Screens/InfoScreen';
import AppContext, { AppProvider } from './Context/AppContext';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

const Stack = createBottomTabNavigator();
//const Stack = createMaterialTopTabNavigator();

export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Home"
            component={RegisterBalanceScreen}
            options={{
              headerTitle: () => null,
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" size={size} color={color} />
              ),
            }}
          />
          <Stack.Screen
            name="Default"
            component={DefaultRegisterScreen}
            options={{
              headerTitle: () => null,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="cash-register" size={size} color={color} />
              ),
            }}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{
              headerTitle: () => null,
              tabBarIcon: ({ color, size }) => (
                <Entypo name="info" size={size} color={color} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
