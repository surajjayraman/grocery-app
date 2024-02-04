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
