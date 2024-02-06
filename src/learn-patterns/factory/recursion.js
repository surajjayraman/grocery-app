let tracker = 0;

const callMe = () => {
  tracker++;
  if (tracker === 3) {
    return "loops!";
  }
  return callMe("anytime");
};

console.log(callMe());

// translating loops into recursion
const loopNTimes = (n) => {
  console.log(`n === ${n}`);
  if (n <= 1) {
    return "Complete!";
  }
  return loopNTimes(n - 1);
};

console.log(loopNTimes(10));

const computeFactorial = (n) => {
  let result = 1;
  console.log(`n === ${n}`);
  if (n < 1) {
    return 1;
  }
  result = result * n;
  return result * computeFactorial(n - 1);
};

console.log(computeFactorial(5));
console.log(computeFactorial(6));

// log numbers recursively
const logNumbersRecursively = (start, end) => {
  console.log(`Recursively looping from ${start} to ${end}`);
};
logNumbersRecursively(10, 5);
