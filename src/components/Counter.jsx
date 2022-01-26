import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const changeCount = (e) => {
    const target = e.target.dataset.type;
    target === "increment" ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button data-type="increment" onClick={(e) => changeCount(e)}>
        Increment
      </button>
      <button data-type="decrement" onClick={(e) => changeCount(e)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
