import React, { useContext } from "react";
import { CounterContext } from "./CounterValue";
const Counter = () => {
  const { count, onAddClick, onMinusClick, onResetClick } =
    useContext(CounterContext);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={onAddClick}>Add +</button>
      <button onClick={onMinusClick}>Minus -</button>
      <button onClick={onResetClick}>Reset 0</button>
    </div>
  );
};

export default Counter;
