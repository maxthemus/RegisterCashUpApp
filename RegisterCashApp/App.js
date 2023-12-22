import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterView from './Components/RegisterView';
import { useEffect, useRef, useState } from 'react';
import Register from './Models/Register';
import RegisterController from './Components/RegisterController';
import RegisterbalanceView from './Components/View/RegisterBalanceView';
import TableHeader from './Components/View/TableHeader';

export default function App() {

  return (
    <View style={styles.container}>
      <RegisterController />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
