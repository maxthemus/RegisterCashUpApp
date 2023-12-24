import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AppContext from '../../Context/AppContext';
import RegisterController from '../RegisterController';
import { StatusBar } from 'expo-status-bar';
import { deserializeRegister, serializeRegister } from '../../Services/RegisterSerializer';
import storage from '../../Storage/storage';


const DefaultRegisterScreen = () => {
  const {
    currencyValues, defaultRegisterBalance, setDefaultRegisterBalance, defaultCurrencyValueMap, setDefaultCurrencyValueMap
  } = useContext(AppContext);

  useEffect(() => {
    console.log("UPDATED MAP");
    console.log(defaultCurrencyValueMap);
  }, [defaultCurrencyValueMap])
  

  
  const saveDefaultRegister = () => {
    const serialRegister = serializeRegister(defaultCurrencyValueMap);
    storage.save({
      key: "defaultRegister",
      data: {
        register: serialRegister
      },
      expires: null
    }).then(() => {
      Alert.alert("Saved")
    });
  }

  return (
    <View style={styles.container}>
      <RegisterController
        currencyValues={currencyValues}
        currencyValueMap={defaultCurrencyValueMap}
        setCurrencyValueMap={setDefaultCurrencyValueMap}
        setRegisterBalance={setDefaultRegisterBalance}
        registerBalance={defaultRegisterBalance}
        saveButton={true}
        onSave={saveDefaultRegister}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default DefaultRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});