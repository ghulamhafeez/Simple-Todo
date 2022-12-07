import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/CounterReducer";
import todoReducer from "../reducers/TodoReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
});
