import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(-10);
  // let counter1=0;

  const handleClick = () => {
    setCounter(counter + 1);
    console.log("Counter: " + counter);
  };

  return (
    <div>
      <h1>Counter : {counter} </h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default State;