const numberPromise = async () => {
  return Math.random();
};

numberPromise().then((data) => console.log(data));

function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}
