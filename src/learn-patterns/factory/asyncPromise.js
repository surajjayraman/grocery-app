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

withConstructor(0).then((data) =>
  console.log(
    ` withConstructor(0) returned a promise which resolved to ${data}`
  )
);

async function withAsync(num) {
  if (num === 0) {
    return "zero";
  }
  return "not zero";
}
