import { useState } from "react";

export const useCounter = () => {
    const [counter, setCounter] = useState(1);

    const handleAdd = () => {
    setCounter(counter + 1);
    return counter;
    }

    return {
        counter,
        handleAdd
    }
}