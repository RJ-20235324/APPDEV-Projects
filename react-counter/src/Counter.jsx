import React, { useState } from "react";
export default function Counter() {
  //useState Hook for updating variable or STATEFUL VARIABLEs
  const [Count, SetCount] = useState(0);
  //to Increment Count
  const IncrementFive = () => {
    //Previous State => new State
    SetCount((C) => C + 5);
  };
  const Increment = () => {
    //Previous State => new State
    SetCount((C) => C + 1);
  };

  const Decerement = () => {
    SetCount((C) => C - 1);
  };

  const DecerementFive = () => {
    SetCount((C) => C - 5);
  };

  const Reset = () => {
    SetCount((C) => (C = 0));
  };
  return (
    <div className="container">
      <p className="counter-container">
        Counter: <br /> {Count}
      </p>
      &nbsp;
      <button className="button-container-increment" onClick={IncrementFive}>
        +5
      </button>
      <button className="button-container-increment" onClick={Increment}>
        +1
      </button>
      <button className="button-container-reset" onClick={Reset}>
        Reset
      </button> 
      <button className="button-container-decrement" onClick={Decerement}>
        -1
      </button>
      <button className="button-container-decrement" onClick={DecerementFive}>
        -5
      </button>
    </div>
  );
}
