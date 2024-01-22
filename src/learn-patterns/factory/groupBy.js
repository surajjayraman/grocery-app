require("core-js/actual/array/group-by");

const people = [
  { name: "kyle", age: 28 },
  { name: "Sally", age: 45 },
  { name: "John", age: 49 },
  { name: "Sally", age: 28 },
];

// group users
const groupedNames = people.groupBy((person) => {
  return person.name;
});

console.log(groupedNames);

// sort users
const users = [
  { name: "kyle", age: 28 },
  { name: "Sally", age: 45 },
  { name: "John", age: 49 },
  { name: "Sally", age: 28 },
];
function sortByName(users) {
  return users.sort((userA, userB) => {
    if (userA.name.toLowerCase() < userB.name.toLowerCase()) return -1;
    if (userA.name.toLowerCase() > userB.name.toLowerCase()) return 1;
    return 0;
  });
}

const sortedUsers = sortByName(users);
console.log(sortedUsers);

// regular array sort
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

// use of Map
const userMap = new Map([
  [1, { name: "kyle" }],
  [2, { name: "Sally" }],
]);

console.log(userMap);
userMap.set(3, { name: "John" });
console.log(userMap);

// functions are just variables

function test() {}
const test2 = test;
console.log(test2 === test);
console.log(test);
console.dir(test);

// Big O

function sum_char_codes(n) {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }

  return sum;
}

console.log(sum_char_codes("suraj"));

const a = new ArrayBuffer(6);
console.log(a);

// promise demo
const promise1 = new Promise((resolve, reject) => {
  resolve("Success!");
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "Success!"
});

// Creating a new Promise and saving it to the testLuck variable.
// Two arguments are being passed, one for when the promise resolves,
// and one for if the promise gets rejected.

const testLuck = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    resolve("Lucky Winner");
  }
  reject(new Error("Unlucky!"));
});

testLuck
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
const orderSunglasses = new Promise((resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
});

orderSunglasses
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
