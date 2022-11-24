import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [id, setId] = useState(0);

  const onAdd = () => {
    let myData = {
      name: todo,
      id: Date.now(),
      isCompleted: false,
    };
    const newTodo = [...todos, myData];

    setTodos(newTodo);
    setTodo("");
  };

  const onDelete = (id) => {
    const newTodoList = todos.filter((todo) => id !== todo.id);

    setTodos(newTodoList);
  };

  const onEdit = ({ name, id }) => {
    setTodo(name);
    setId(id);
    setIsEditMode(true);
  };

  const onUpdate = () => {
    //findindex method//

    // const newTodo = todos.slice();
    // let index = todos.findIndex((i) => i.id == id);
    // newTodo.splice(index, 1, myData);

    const updatedTodos = todos.map((x) =>
      x.id == id ? { ...x, name: todo } : x
    );
    setTodos(updatedTodos);
    setIsEditMode(false);
    setTodo("");
  };

  const onToggleCompletion = (id) => {
    const checkIsCompleted = todos.map((x) =>
      x.id === id ? { ...x, isCompleted: !x.isCompleted } : x
    );

    setTodos(checkIsCompleted);
  };

  return (
    <div>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        isEditMode={isEditMode}
        onUpdate={() => onUpdate()}
        onAdd={() => onAdd()}
      />
      <TodoList
        todos={todos}
        onDelete={(id) => onDelete(id)}
        onEdit={(data) => onEdit(data)}
        onToggleCompletion={(id) => onToggleCompletion(id)}
      />
    </div>
  );
};

export default Todos;
