const fs = require('fs');
const promisifiedReadfile = require("./promisifiedReadfile");

// Here we use fs.readfile() and callback functions
fs.readFile('./file1.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data)
})

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile("./file.txt", "utf-8")
  .then((data) => {
    firstSentence = data;
    console.log(firstSentence);
  })
  .catch((err) => {
    console.log(err);
  });
