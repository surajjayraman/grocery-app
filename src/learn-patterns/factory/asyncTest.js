const axios = require("axios");
async function fetchData() {
  try {
    await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    ).then(response => {
        console.log(response);
    });

    // const data = await response.json();
    // console.log(JSON.stringify(response));
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
