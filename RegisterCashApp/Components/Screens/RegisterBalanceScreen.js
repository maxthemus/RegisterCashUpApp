import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RegisterController from '../RegisterController';
import { StatusBar } from 'expo-status-bar';

const RegisterBalanceScreen = () => {
  return (
      <View style={styles.container}>
        <RegisterController />
        <StatusBar style="auto" />
      </View>
  );
}

export default RegisterBalanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});