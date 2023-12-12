var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var n = 1;
//n = 'Bobb';
n = 12356;
var isDone = false;
// array
var names = ['Suraj', 'Tejas', 'Sweety'];
var anyName = ['Suraj', 'Tejas', 'Sweety'];
function statusCheck(status) {
    status ? console.log('All set good to go !') : console.log('Still working on..!');
}
statusCheck(isDone);
statusCheck(true);
statusCheck(n);
// assign integer
names = [12345];
anyName = [2023];
// invalid type return
function getName() {
    return 'Sweety';
}
// void
function getWeather() {
    console.log('Winter is coming!');
}
getWeather();
function printName(stark) {
    console.log(stark.name);
    console.log(stark.age);
}
printName({ name: "Edward" });
printName({ name: "Joe", age: 35 });
// Add class type
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello ".concat(this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter.greet());
// inheritance
var Sprite = /** @class */ (function () {
    function Sprite(name) {
        this.name = "";
        this.x = 0;
        this.y = 0;
        this.name = name;
    }
    Sprite.prototype.isWhat = function () {
        return "Sprite is ".concat(this.name);
    };
    return Sprite;
}());
var drink = new Sprite('Coke');
console.log(drink.isWhat());
var AwesomeDrink = /** @class */ (function (_super) {
    __extends(AwesomeDrink, _super);
    function AwesomeDrink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomeDrink.prototype.isWhat = function () {
        _super.prototype.isWhat.call(this);
        return "".concat(this.name, " is so awesome");
    };
    return AwesomeDrink;
}(Sprite));
var newDrink = new AwesomeDrink('Awesome drink');
console.log(newDrink.isWhat());
