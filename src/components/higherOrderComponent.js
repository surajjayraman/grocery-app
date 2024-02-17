import axios from "axios";
import React, { useEffect } from "react";

export default function DogImages() {
  // fetch dog images
  useEffect(() => {
    async function fetchDogs() {
      const { data } = await axios.get(
        "https://dog.ceo/api/breed/labrador/images/random/4"
      );
      console.log(JSON.stringify(data));
    }
    fetchDogs();
  }, []);

  return (
    <div>
      <p className="highlighted">Higher Order Component Pattern</p>
      <h1>Dogs</h1>
    </div>
  );
}

// import { useState, useEffect } from "react";

// export default function useDogImages() {
//   const [dogs, setDogs] = useState([]);

//   useEffect(() => {
//     async function fetchDogs() {
//       const res = await fetch(
//         "https://dog.ceo/api/breed/labrador/images/random/6"
//       );
//       const { message } = await res.json();
//       setDogs(message);
//     }

//     fetchDogs();
//   }, []);

//   return dogs;
// }
