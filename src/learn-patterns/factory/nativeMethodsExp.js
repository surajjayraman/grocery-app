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
