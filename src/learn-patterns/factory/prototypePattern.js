class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `Woof!`;
    }
}

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log("Flying!");
    }
}

const dog1 = new Dog("Daisy");
const dog2 = new SuperDog("Max");
const dog3 = new Dog("Spot");

Dog.prototype.play = () => console.log("Playing now!");

dog1.play();
dog2.fly();
