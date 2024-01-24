const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 11000],
  ["bags", 2],
];

// Write your code below:

function handleSuccess(value) {
  console.log(value);
}

function handleFailure(value) {
  console.log(value);
}

checkInventory(order).then(handleSuccess, handleFailure);
