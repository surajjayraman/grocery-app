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
