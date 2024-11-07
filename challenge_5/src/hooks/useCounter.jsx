import { useState } from "react";

export const getCounter = () => {
    const [counter, setCounter] = useState(100);

    const handleSubstract = () => {
     setCounter(counter - 1);
    return counter;
    }

    const handleReset = () => {
    setCounter(100);
    return counter;
    }

    const handleAdd = () => {
    setCounter(counter + 1);
    return counter;
    }

    return {
        counter,
        handleSubstract,
        handleReset,
        handleAdd
    }
}