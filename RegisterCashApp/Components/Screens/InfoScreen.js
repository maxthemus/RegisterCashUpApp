import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../Context/AppContext';
import { StatusBar } from 'expo-status-bar';
import RegisterDifferenceView from '../View/RegisterDifferenceView';
import RegisterUpdateView from '../View/RegisterUpdateView';
import UpdateRegisterView from '../View/UpdateRegisterView';

const InfoScreen = () => {
    const [differenceMap, setDifferenceMap] = useState(new Map());
    const { currencyValues, registerBalance, setRegisterBalance, currencyValueMap, setCurrencyValueMap, defaultRegisterBalance, setDefaultRegisterBalance, defaultCurrencyValueMap, setDefaultCurrencyValueMap }= useContext(AppContext);
    const registerDifference = (parseFloat(registerBalance) - parseFloat(defaultRegisterBalance)).toFixed(2);
  
  const printRegisterDifference = () => {
    if(registerDifference === 0) {
      return (
        <View>
          <Text>Perfect Float</Text>
        </View>
      )
    } else if(registerDifference < 0) {
      return (
        <View>
          <Text>Missing ${registerDifference}</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text>Surplus ${registerDifference}</Text>
        </View>
      )
    }
  };


  useEffect(() => {
    const differenceMap = new Map();

    for (const [key, value] of currencyValueMap.entries()) {
      const defaultValue = defaultCurrencyValueMap.get(key);

      const difference = defaultValue - value;
      differenceMap.set(key, difference);
    }
    setDifferenceMap(differenceMap);
  }, [currencyValueMap, defaultCurrencyValueMap]);
  




  return (
    <View style={styles.container}>
      <RegisterDifferenceView
        difference={registerDifference}
        expectedBalance={defaultRegisterBalance}
        registerBalance={registerBalance}
      />
      <UpdateRegisterView differenceMap={differenceMap}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});