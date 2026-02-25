'use client';
import { useState } from "react";

export default function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}