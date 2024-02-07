//  create a function to be memoized
const sayHello = (name) => {
  return `hello there ${name}`;
};

// factorial func to be memoized
const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

//console.log(sayHello("suraj"));

const memoizeFunc = (cb) => {
  const cache = {};
  let result = "";

  const wrapper = (...args) => {
    console.log(`----Cache contents----: ${JSON.stringify(cache)}`);
    if (!cache[args[0]]) {
      result = cb(args[0]);
      cache[args[0]] = result;
      return result;
    }
    // retrieve from  cache
    result = cache[args[0]];
    return result;
  };

  return wrapper;
};

// tests for random func memoization
const sayHelloMemo = memoizeFunc(sayHello);
console.log(sayHelloMemo("Sweety"));
console.log(sayHelloMemo("Suraj"));
console.log(sayHelloMemo("Suraj"));

// tests for factorial func
const computeFactorial = memoizeFunc(factorial);
console.log(computeFactorial(5));
console.log(computeFactorial(6));
console.log(computeFactorial(5));
