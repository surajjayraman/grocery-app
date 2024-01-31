const brainstormDinner = require("./dinnerLibrary");

//Native promise version
brainstormDinner().then((meal) =>
  console.log(`I will be cooking ${meal} for dinner`)
);

// async/await version:
async function announceDinner() {
  const meal = await brainstormDinner();
  console.log(`I will be cooking ${meal} for dinner`);
}

announceDinner()

