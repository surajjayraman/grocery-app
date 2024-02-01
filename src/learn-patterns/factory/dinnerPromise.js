const { brainstormDinner, shopForBeans } = require("./dinnerLibrary");

//Native promise version
const cookDinner = () => {
  brainstormDinner().then((meal) =>
    console.log(`I will be cooking ${meal} for dinner`)
  );
};

// async/await version:
async function announceDinner() {
  const meal = await brainstormDinner();
  console.log(`I will be cooking ${meal} for dinner`);
}

cookDinner();

announceDinner();

// await / noawait demo
const myPromise = () => {
  return new Promise((resolve, reject) => {
    console.log(`Hello from myPromise`);
    setTimeout(() => {
      resolve("Yay I resolved");
    }, 2000);
  });
};

async function noAwait() {
  const value = myPromise();
  console.log(value);
}
noAwait();

async function yesAwait() {
  const value = await myPromise();
  console.log(value);
}
yesAwait();

// shopForBeans
async function getBeans() {
  const beanType = await shopForBeans();
  console.log(`I got ${beanType} beans for dinner`);
}
getBeans();
