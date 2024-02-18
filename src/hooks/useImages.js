import axios from "axios";
import { useEffect, useState } from "react";

export default function useImages() {
  const [dogs, setDogs] = useState([]);
  // fetch dog images
  useEffect(() => {
    async function fetchDogs() {
      const { data } = await axios.get(
        "https://dog.ceo/api/breed/labrador/images/random/5"
      );
      console.log(JSON.stringify(data));
      setDogs(data.message);
    }
    fetchDogs();
  }, []);

  if (!dogs) {
    return <p>Loading...</p>;
  }

  return dogs;
}
