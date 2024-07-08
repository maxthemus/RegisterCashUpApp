class Counter {
    constructor(cash) {
        this.cash = cash;
        this.count = 0;
        this.value = 0; //sum of cash values
    }

    increment() {
        this.count++;
        this.value += this.cash.getValue();
    }

    decrement() {
        if(count > 0) {
            this.count--;
            this.value -= this.cash.getValue();
        }
    }

    setCount(count) {
        if(count >= 0) {
            this.count = count;
            this.value = count * this.cash.getValue();
        }
    }
}

export default Counter;