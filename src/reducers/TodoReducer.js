import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  todos: [],
  searchValue: "",
  id: 0,
};

export const TodoReducer = createSlice({
  name: "todo",
  initialState: initialStateValue,
  reducers: {
    onAdd: (state, action) => {
      let myData = {
        title: action.payload,
        id: Date.now(),
        isCompleted: false,
      };

      state.todos = [...state.todos, myData];
    },

    onUpdate: (state, action) => {
      let updatedTodos = state.todos.map((x) =>
        x.id === action.payload.id
          ? { ...x, title: action.payload.todovalue }
          : x
      );

      state.todos = updatedTodos;
     
    },
    onDelete: (state, action) => {
      state.todos = state.todos.filter((todo) => action.payload !== todo.id);
    },
    onToggleCompletion: (state, action) => {
      let checkIsCompleted = state.todos.map((x) =>
        x.id === action.payload ? { ...x, isCompleted: !x.isCompleted } : x
      );

      state.todos = checkIsCompleted;
    },
    onGetTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { onAdd, onUpdate, onDelete, onGetTodos, onToggleCompletion } =
  TodoReducer.actions;

export default TodoReducer.reducer;
