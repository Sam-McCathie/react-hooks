import React, {useState} from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);
  // count - current value(state) -> when this changes react will rebuild the ui to show the latest value.
  // setCount - is a setter function that updates count.
  // useState(x) - the value of x is the default/ starting value(state)

  return (
    <div className="App">
      <h1>useState</h1>
      <h3>count: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
