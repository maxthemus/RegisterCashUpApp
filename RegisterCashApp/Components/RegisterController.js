import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import RegisterView from './RegisterView';
import RegisterbalanceView from './View/RegisterBalanceView';
import RegisterBalanceView from './View/RegisterBalanceView';
import TableHeader from './View/TableHeader';

const RegisterController = ({ currencyValues=[0.1, 0.2, 0.5, 1.0, 2.0, 5.0, 10.0, 20.0, 50.0], registerBalance=0.0, setRegisterBalance=()=>null, currencyValueMap=null, setCurrencyValueMap=()=>null, saveButton=false, onSave=()=>null}) => {

    useEffect(() => {
        if (currencyValueMap === null) {
          resetRegister();
        }
    }, []);

    //Register methods
    const resetRegister = () => { 
        setRegisterBalance(0.0);
        setCurrencyValueMap((prevRegister) => {
            const newRegister = new Map();
            currencyValues.forEach((value) => {
                newRegister.set(value, 0.0);
            });
            return newRegister;
        });
    };

    const addCurrency = (currencyValue) => {
        if (currencyValues.includes(currencyValue)) {
          const currentValue = currencyValueMap.get(currencyValue);
          setCurrencyValueMap((prevMap) => {
            return(new Map(prevMap).set(currencyValue, currentValue+1));
          });
          //Updating the register balance
          setRegisterBalance((prevBalnce) => prevBalnce+currencyValue);
          return true;
        }
        return false;
    };

    const removeCurrency = (currencyValue) => {
        if (currencyValues.includes(currencyValue)) {
          const currentValueCount = currencyValueMap.get(currencyValue);
          if (currentValueCount > 0) {
            setCurrencyValueMap((prevMap) => {
              return new Map(prevMap).set(currencyValue, currentValueCount - 1);
            });
            setRegisterBalance((prevBalance) => prevBalance - currencyValue);
          }
          return true;
        }
        return false;
    };

    const setCurrency = (currencyValue, updatedCount) => {
        if(currencyValues.includes(currencyValue)) {
            if(updatedCount >= 0) {
                const currentValueCount = currencyValueMap.get(currencyValue);
                if(updatedCount != currentValueCount) {
                    //resetting balance
                    const resetBalance = parseFloat(registerBalance) - (parseFloat(currencyValue) * parseFloat(currentValueCount));

                    setCurrencyValueMap((prevMap) => {
                      return new Map(prevMap).set(
                        currencyValue,
                        updatedCount
                      );
                    });

                    setRegisterBalance(() => resetBalance + (currencyValue * updatedCount));
                    return true;
                }
            } 
        }
        return false;
    };

  
  return (
    <View>
      <RegisterBalanceView value={registerBalance} />
      <View style={styles.saveContainer}>
        {saveButton ? (
          <TouchableOpacity style={styles.saveButton} onPress={() => onSave()}>
            <Text>Save Register</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <TableHeader />
      <RegisterView
        addCurrency={addCurrency}
        removeCurrency={removeCurrency}
        setCurrency={setCurrency}
        registerValues={currencyValueMap}
      />
    </View>
  );
}

export default RegisterController;

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    width: "50%"
  },
  saveContainer: {
    backgroundColor: "rgba(78,73,73,1)",
    alignItems: "center",
  },
});