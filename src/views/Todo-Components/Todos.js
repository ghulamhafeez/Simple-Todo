import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
const Todos = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  const [index, setIndex] = useState(0);

  const onAdd = () => {
    let myData = {
      name: todo,
      id: Date.now(),
    };

    const newTodo = todoList.slice();
    newTodo.push(myData);
    setTodoList(newTodo);
    valueNull();
  };

  const onDelete = (id) => {
    const newTodoList = todoList.filter((todo) => id !== todo.id);

    setTodoList(newTodoList);
  };

  const onEdit = (data, i) => {
    setTodo(data.name);
    setIndex(i);
    setIsEditMode(true);
  };

  const onUpdate = () => {
    const newTodo = todoList.slice();
    let data = {
      name: todo,
      id: Date.now(),
    };

    newTodo.splice(index, 1, data);

    setTodoList(newTodo);
    setIsEditMode(false);
    valueNull();
  };
  const valueNull = () => {
    setTodo("");
  };
  return (
    <div>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        isEditMode={isEditMode}
        onUpdate={() => onUpdate()}
        onAdd={(data) => onAdd(data)}
      />
      <TodoList
        todo={todoList}
        onDelete={(id) => onDelete(id)}
        onEdit={(data, i) => onEdit(data, i)}
      />
    </div>
  );
};

export default Todos;
