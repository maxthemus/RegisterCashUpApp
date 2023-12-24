// AppContext.js
import React, { createContext, useEffect, useState } from 'react';
import storage from '../Storage/storage';
import { deserializeRegister } from '../Services/RegisterSerializer';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const currencyValues = [0.1, 0.2, 0.5, 1.0, 2.0, 5.0, 10.0, 20.0, 50.0]; 
    const [registerBalance, setRegisterBalance] = useState(0.0);
    const [currencyValueMap, setCurrencyValueMap] = useState(null);

    const [defaultRegisterBalance, setDefaultRegisterBalance] = useState(0.0);
    const [defaultCurrencyValueMap, setDefaultCurrencyValueMap] = useState(null);

    useEffect(() => {
      storage.load({
        key: "defaultRegister",
        autoSync: false,
      }).then((ret) => {
        if("register" in ret) {
          const map = deserializeRegister(ret.register);
          setDefaultCurrencyValueMap(map);

          let balance = 0.0;
          //Calculating balance
          map.forEach((value, key) => {
            balance += (key * value);
          });
          setDefaultRegisterBalance(balance);
        }
      });
    }, []);

    

  return (
    <AppContext.Provider value={{ currencyValues, registerBalance, setRegisterBalance, currencyValueMap, setCurrencyValueMap, defaultRegisterBalance, setDefaultRegisterBalance, defaultCurrencyValueMap, setDefaultCurrencyValueMap }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;