let counter = 0;
let instance;

class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance!!");
        }
        instance = this
    }
    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

//const counter1 = new Counter()
//const counter2 = new Counter()

//console.log(counter1.getInstance() === counter2.getInstance())

const singletonCounter = Object.freeze(new Counter())
export default singletonCounter;