const brainstormDinner = require("./dinnerLibrary");

//Native promise version
brainstormDinner().then((meal) =>
  console.log(`I will be cooking ${meal} for dinner`)
);
