import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/CounterReducer";
import todoReducer from "../reducers/TodoReducer";
import { TodosApi } from "../services/TKRservices";

export const store = configureStore({
  reducer: {
    [TodosApi.reducerPath]: TodosApi.reducer,
    counter: counterReducer,
    todo: todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TodosApi.middleware),
});
