import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  console.log("UseState render");
  return (
    <div>
      <h3>Count is: {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        {" "}
        Count: {count}
      </button>
      <button onClick={() => setCount((count) => count)}> Count: 0</button>
      <button onClick={() => setCount((count) => count)}> Count: 0</button>
    </div>
  );
}
