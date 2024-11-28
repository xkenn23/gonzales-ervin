import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      Count: {count}
      <button onClick={handleIncrement}> Increment Counts</button>
      <button onClick={handleDecrement}> Increment Counts</button>
    </div>
  );
};

export default Counter;
