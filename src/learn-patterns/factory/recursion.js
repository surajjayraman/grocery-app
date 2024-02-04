let tracker = 0;

const callMe = () => {
  tracker++;
  if (tracker === 3) {
    return "loops!";
  }
  return callMe("anytime");
};

console.log(callMe());
