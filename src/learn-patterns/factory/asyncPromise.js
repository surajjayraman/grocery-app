const numberPromise = async () => {
  return Math.random();
};

numberPromise()
.then((data) => console.log(data))

