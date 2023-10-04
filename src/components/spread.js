// What does the Spread operator do?
// Ans. cannot stand on its own like other operators
// shallow copy

// immutable object update pattern
const array1 = [1,2,3];
const array2 = [1,2,3];

const array3 = [...array1,4,5,6];
console.log(array3);


const alice = {
    name: "Alice",
    age : 32,
    favorites : ['ice cream', 'coffee']
}

const bob = {
    ...alice,
    name: 'Bob'
}
console.log(JSON.stringify(alice));
console.log(JSON.stringify(bob));