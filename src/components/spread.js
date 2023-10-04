// What does the Spread operator do?
// Ans. cannot stand on its own like other operators
// shallow copy

const array1 = [1,2,3];
const array2 = [1,2,3];

const array3 = [...array1,4,5,6];
console.log(array3);