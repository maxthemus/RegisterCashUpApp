
class Register {
    constructor(values) {
        this.currencyValues = [...values]; //Array of possible values in set currency
        this.registerBalance = 0.0; 
        this.registerValueCounter = new Map();

        //Setting up the map 
        this.resetRegister();
        console.log(this.currencyValues);
    }

    //Methods
    resetRegister() { 
        this.registerBalance = 0.0;
        this.registerValueCounter.clear();
        this.currencyValues.forEach((currencyValue) => {
            this.registerValueCounter.set(currencyValue, 0.0);
        });
    }

    addCurrency(currencyValue) {
        if(this.currencyValues.includes(currencyValue)) {
            const currentValue = this.registerValueCounter.get(currencyValue); 
            this.registerValueCounter.set(currencyValue, currentValue+1);

            //Updating the register balance
            this.registerBalance += currencyValue;

            return currentValue+1;
        } 
        return false;
    }

    removeCurrency(currencyValue) {
        if(this.currencyValues.includes(currencyValue)) {
            let currentValue = this.registerValueCounter.get(this.currencyValues);
            if(currencyValue > 0) {
                currencyValue--;
                this.registerValueCounter.set(currencyValue, currentValue);

                //Updating the register balance
                this.registerBalance -= currencyValue;
            }
            return currentValue;
        } else {
            return false;
        }
    }

    getRegisterBalance() {
        return this.registerBalance;
    }

    getRegisterValues() {
        return this.currencyValues;
    }
}

export default Register;