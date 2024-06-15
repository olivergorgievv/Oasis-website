"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function plus() {
    setCount((prevCount) => prevCount + 1);
  }
  function minus() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plus}>Add</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}

export default Counter;
