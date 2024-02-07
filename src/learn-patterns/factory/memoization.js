//  create a function to be memoized
const sayHello = (name) => {
  return `hello there ${name}`;
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

const sayHelloMemo = memoizeFunc(sayHello);
console.log(sayHelloMemo("Sweety"));
console.log(sayHelloMemo("Suraj"));
console.log(sayHelloMemo("Suraj"));
