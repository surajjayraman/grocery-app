import { useState } from "react";

const useCounter = (initial) => {

    const [count, setCount] = useState(initial);

    const increment = () => {
        setCount(count => count+1);
    }

    const decrement = () => {
        setCount(count => count - 1);
    }
    const clear = () => {
        setCount(0);
    }
    return {count, increment, decrement, clear};
}

export default useCounter;