const promisifiedReadfile = require("./promisifiedReadfile");

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile("./file1.txt", "utf-8")
  .then((data) => {
    firstSentence = data;
    console.log(firstSentence);
  })
  .catch((err) => {
    console.log(err);
  });
