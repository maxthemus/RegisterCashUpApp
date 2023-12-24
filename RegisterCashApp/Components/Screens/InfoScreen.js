import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../Context/AppContext';
import { StatusBar } from 'expo-status-bar';

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
  


  const printRegisterChanges = () => {
    return (
      <View>
        <View>
          <Text>Add to Register</Text>
          {Array.from(differenceMap).map(([key, value]) => {
            if (value > 0) {
              return (
                <View key={key + "add"}>
                  <Text>
                    {value} x {key}
                  </Text>
                </View>
              );
            } else {
              return null;
            }
          })}
        </View>
        <View>
          <Text>Remove from Register</Text>
          {Array.from(differenceMap).map(([key, value]) => {
            if (value < 0) {
              return(<View key={key + "remove"}>
                <Text>
                  {(value * -1)} x {key}
                </Text>
              </View>);
            } else {
              return null;
            }
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Info</Text>
      <View>
        <View><Text>Register Balance: {registerBalance.toFixed(2)}</Text></View>
        <View><Text>Wanted Float: {defaultRegisterBalance.toFixed(2)}</Text></View>
        {printRegisterDifference()}
      </View>
      <View>
        {printRegisterChanges()}
      </View>
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