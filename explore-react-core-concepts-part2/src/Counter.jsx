import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleDecrement = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    const handleReset = () => {
        const newCount = 0;
        setCount(newCount);
    }

    return (
        <div style={{border: '2px solid green'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}