var n: Number = 1;

//n = 'Bobb';
n = 12356;
let isDone: Boolean = false;

// array
let names: String[] = ['Suraj', 'Tejas', 'Sweety'];
let anyName: any[] = ['Suraj', 'Tejas', 'Sweety'];

function statusCheck(status: Boolean) {
    status ? console.log('All set good to go !') : console.log('Still working on..!')
}

statusCheck(isDone);
statusCheck(true);
statusCheck(n);
// assign integer
names = [12345];
anyName = [2023];

// invalid type return
function getName(): String {
    return 'Sweety';
}

// void
function getWeather(): void {
    console.log('Winter is coming!');
}

getWeather();

// the power of interfaces
interface Stark {
    name: string;
    age?: number;
}

function printName(stark: Stark) {
    console.log(stark.name);
    console.log(stark.age);
}

printName({ name: "Edward" });
printName({ name: "Joe", age: 35 });

// Add class type
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello ${this.greeting}`
    }
}

let greeter = new Greeter('world')
console.log(greeter.greet());