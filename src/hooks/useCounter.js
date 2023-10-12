import { useState } from "react";

const useCounter = (initial) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count+1);
    }

    const decrement = () => {
        setCount(count => count - 1);
    }
    const clear = () => {
        setCount(0);
    }
}