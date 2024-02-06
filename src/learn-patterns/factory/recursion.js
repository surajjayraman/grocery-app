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
  const recurse = (i) => {
    console.log(`Hitting index i: ${i}`);
    if (i < end) {
      recurse(i + 1);
    }
  };
  recurse(start);
};

logNumbersRecursively(5, 10);

// Wrapper + Accumulator pattern
const joinElements = (array, joinString) => {
  console.log(`Accumulator Pattern: Joining strings`);
  const recurse = (index, resultSoFar) => {
    console.log(`index: ${index} and result so far: ${resultSoFar}`);
    if (index < array.length - 1) {
      resultSoFar = resultSoFar + array[index] + joinString;
      return recurse(index + 1, resultSoFar);
    }
    if (index === array.length - 1) {
      return resultSoFar + array[index];
    }
  };
  return recurse(0, "");
};

console.log(joinElements(["s", "cr", "tcod", " :) :)"], "e"));
