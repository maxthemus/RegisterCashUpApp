import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import RegisterView from './RegisterView';
import RegisterbalanceView from './View/RegisterBalanceView';
import RegisterBalanceView from './View/RegisterBalanceView';
import TableHeader from './View/TableHeader';

const RegisterController = () => {
    const currencyValues = [0.1, 0.2, 0.5, 1.0, 2.0, 5.0, 10.0, 20.0, 50.0]; 
    const [registerBalance, setRegisterBalance] = useState(0.0);
    const [currencyValueMap, setCurrencyValueMap] = useState(new Map());

    useEffect(() => {
        //Init the currencyValueMap
        resetRegister(); 
    }, [])
    

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
                    const resetBalance = registerBalance - (currencyValue * currencyValue);

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
      <RegisterBalanceView value={registerBalance}/>
      <TableHeader />
      <RegisterView
        addCurrency={addCurrency}
        removeCurrency={removeCurrency}
        registerValues={currencyValueMap}
      />
    </View>
  );
}

export default RegisterController;