import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterView from './Components/RegisterView';
import { useEffect, useRef, useState } from 'react';
import Register from './Models/Register';
import RegisterController from './Components/RegisterController';
import RegisterbalanceView from './Components/View/RegisterBalanceView';
import TableHeader from './Components/View/TableHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterBalanceScreen from './Components/Screens/RegisterBalanceScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={RegisterBalanceScreen} options={{ headerTitle: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
