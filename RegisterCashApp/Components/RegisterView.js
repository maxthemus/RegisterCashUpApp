import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import CurrencyView from './CurrencyView';
import CountModal from './modals/CountModal/CountModal';

const RegisterView = ({ addCurrency=()=>null, removeCurrency=()=>null, setCurrency=()=>null, registerValues=null }) => {
    const [updateCountModalOpen, setUpdateCountModalOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    const openCountModal = (currencyValue) => {
        if (registerValues != null) {
            if (registerValues.has(currencyValue)) {
                setSelectedCurrency(currencyValue);
                setUpdateCountModalOpen(true);
            }
        }
    }    

    const closeCountModal = () => {
        setUpdateCountModalOpen(false);
        setSelectedCurrency(null);
    }

    const onSubmitUpdateCount = (selectedCurrency, updatedCount) => {
        if(updatedCount >= 0) {
            const updated = setCurrency(selectedCurrency, updatedCount);
            if(updated) {
                closeCountModal();
            }  else {
                Alert.alert("Error updating count");
            }
        } else {
            Alert.alert("Invalid Count", "try again");
        }
    }


    mapCurrencies = () => {
        if(registerValues != null) {
            return Array.from(registerValues).map(([key, value], index) => {
                return(
                    <CurrencyView key={index} add={() => addCurrency(key)} remove={() => removeCurrency(key)} name={key} value={value} onUpdate={openCountModal}/>
                );
            });
        } else {
            return null;
        }
    }

  if(registerValues === null) return null;
  return (
    <View style={styles.container}>
        <CountModal
            isOpen={updateCountModalOpen} 
            onClose={closeCountModal}
            onSubmit={onSubmitUpdateCount}
            currencyValue={selectedCurrency}
            value={registerValues.get(selectedCurrency)}
        />
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