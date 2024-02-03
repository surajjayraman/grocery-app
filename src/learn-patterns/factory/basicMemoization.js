// take an argument and multiply times 10

const times10 = (n) => {
  return n * 10;
};

console.log("------Task1------");
console.log(`times10 returns: ${times10(9)}`);

const cache = {};
const memoTimes10 = (n) => {
  console.log(`Cache holds: ${JSON.stringify(cache)}, ${cache[n]}`);
  if (!cache[n]) {
    console.log("------Caching------");
    cache[n] = times10(n);
  }
  return cache[n];
};

console.log("------Task2------");
console.log(`memotimes10 returns: ${memoTimes10(9)}`);
console.log(`memotimes10 returns: ${memoTimes10(10)}`);
console.log(`memotimes10 returns: ${memoTimes10(9)}`);
console.log(`Cache holds: ${JSON.stringify(cache)}`);
