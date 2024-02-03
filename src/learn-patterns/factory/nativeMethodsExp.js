// what are some simple, native JS
// methods/expressions/operations?

const arr = [1, 2, 3];
const newArr = arr.pop(); // 3 // constant time space complexity
console.log(newArr, arr, arr[0]);

const obj = { a: 1 };
console.log(obj.a);

// what is the TC
const countChars = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
};

console.log(countChars("Today is a friday!")); // TC = O(n)

// string property lookup O(1)
const countCharsLookUp = (str) => {
  return str.length;
};

console.log(countCharsLookUp("Abracadabrahabracadabra"));

//calculate the time complexity for the
//native methods below (separately)

const myList = ["hello", "hola"];

myList.push("bonjour");

console.log(myList);

myList.shift();
console.log(myList);

// TC = O(n^2)
const isUnique = (arr) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        result = false;
        break;
      }
    }
  }
  return result;
};

console.log(isUnique([1, 2, 3]));
console.log(isUnique([1, 2, 1]));
console.log(isUnique([1, 1, 3]));
console.log(isUnique([1, 2, 3, 4, 4, 5]));

// Refactor TC = O(n) for isUnique
const isUniqueOn = (arr) => {
  const cache = {};
  let result = true;
  for (let item of arr) {
    if (cache[item]) {
      result = false;
      break;
    }
    cache[item] = true;
  }
  console.log(`Cache object ${JSON.stringify(cache)}`);
  return result;
};

console.log(
  `Refactored isUnique`,
  isUniqueOn([
    1, 2, 3, 4, 5, 6, 7, 8, 10000, 0.3, 9, 11, 12, 13, 14, 8, 255, 256, 257,
  ])
);

//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2])); // => [2,3,4]
