class Dog {
    constructor(name) {
        this.name = name;
    }
}

const animalFunctionality = {
    walk: () => console.log("Waking!"),
    sleep: () => console.log("Sleeping!")
}

const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
};

Object.assign(Dog.prototype, dogFunctionality)

const pet1 = new Dog("Daisy");

pet1.name; // Daisy
pet1.bark(); // Woof!
pet1.play(); // Playing!

animalFunctionality.walk()
animalFunctionality.sleep()

