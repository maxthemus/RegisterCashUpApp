import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import RegisterController from '../RegisterController';
import { StatusBar } from 'expo-status-bar';
import AppContext from '../../Context/AppContext';

const RegisterBalanceScreen = () => {
  const {
    currencyValues,
    registerBalance,
    setRegisterBalance,
    currencyValueMap,
    setCurrencyValueMap,
  } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <RegisterController
        currencyValues={currencyValues}
        currencyValueMap={currencyValueMap}
        setRegisterBalance={setRegisterBalance}
        registerBalance={registerBalance}
        setCurrencyValueMap={setCurrencyValueMap}
      />
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