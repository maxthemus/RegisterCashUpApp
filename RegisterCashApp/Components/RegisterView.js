import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CurrencyView from './CurrencyView';

const RegisterView = ({ addCurrency=() => null, removeCurrency=() => null, registerValues=null }) => {
    
    mapCurrencies = () => {
        if(registerValues != null) {
            return Array.from(registerValues).map(([key, value], index) => {
                return(
                    <CurrencyView key={index} add={() => addCurrency(key)} remove={() => removeCurrency(key)} name={key} value={value} />
                );
            });
        } else {
            return null;
        }
    }

  return (
    <View style={styles.container}>
        <ScrollView style={styles.container}>
            {mapCurrencies()}
        </ScrollView>
    </View>
  )
}

export default RegisterView;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});