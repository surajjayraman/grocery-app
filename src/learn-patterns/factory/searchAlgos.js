// implement a linear search

function linearSearch(list, item) {
  let index = -1;
  list.forEach((element, i) => {
    if (element === item) {
      index = i;
    }
  });
  return index;
}

console.log(linearSearch([2, 55, 6, 77, 90, 6], 6));
console.log(linearSearch([2, 55, 6, 77, 90, 6], 666));

// implement a binary search

const binarySearch = (list, item) => {
  let index = -1;
  let min = 0;
  let max = list.length - 1;
  console.log(`input array: ${list}`);
  return index;
};

console.log(
  binarySearch(
    [2, 55, 6, 77, 90, 6].sort((a, b) => {
      return a - b;
    }),
    6
  )
);
