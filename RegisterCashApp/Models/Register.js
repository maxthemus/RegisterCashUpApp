import Counter from "./Counter";

class Register {
    constructor(cashValues) {
        this.avaliableCash = cashValues; //Array of possible cash objects
        this.cashMap = new Map(); //Map cash objects to Counters

        this.balance = 0.0; 

        //Setting up the map 
        this.resetRegister();
    }

    //Methods
    resetRegister() { 
        this.balance = 0.0;
        this.cashMap.clear();
        this.avaliableCash.forEach((cashObj) => {
            this.cashMap.set(cashObj, new Counter(cashObj)); //Setting
        });
    }

    addCurrency(cashObj) {
        if(!this.avaliableCash.includes(cashObj)) {
            throw new Error("Currency Not in register");
        }

        const cashCounter = this.cashMap.get(cashObj);
        cashCounter.increment();

        this.balance += cashObj.getValue();
    }

    removeCurrency(cashObj) {
        if(!this.avaliableCash.includes(cashObj)) {
            throw new Error("Currency Not in register");
        }

        const cashCounter = this.cashMap.get(cashObj);
        cashCounter.decrement();

        this.balance -= cashObj.getValue();
    }

    getRegisterBalance() {
        return this.balance;
    }

    getRegisterValues() {
        return this.cashValues;
    }
}

export default Register;