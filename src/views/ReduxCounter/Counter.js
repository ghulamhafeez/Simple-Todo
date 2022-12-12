import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../reducers/CounterReducer";

const Counter =()=> {
  const counter = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
      Counter
      </h1>
      
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default Counter;
