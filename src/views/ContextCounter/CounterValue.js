import React, { useState, createContext } from "react";
import Counter from "./Counter";
export const CounterContext = createContext({ count: 0 });
const CounterValue = () => {
  const [count, setCount] = useState(0);

  const onAddClick = () => {
    setCount(count + 1);
  };
  const onMinusClick = () => {
    setCount(count - 1);
  };
  const onResetClick = () => {
    setCount(0);
  };
  return (
    <div>
      <CounterContext.Provider
        value={{ count, onAddClick, onMinusClick, onResetClick }}
      >
        <Counter />
      </CounterContext.Provider>
    </div>
  );
};

export default CounterValue;
