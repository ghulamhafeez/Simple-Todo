import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [searchValue, setSearchValue] = useState("");
  // const [filterValue, setFilterValue] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [id, setId] = useState(0);

  const searchedTodos = todos.filter((x) => x.name.includes(searchValue));
  console.log("Searched Todos", searchedTodos);

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

  const onSearch = (e) => {
    setSearchValue(e.target.value);
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
      x.id === id ? { ...x, name: todo } : x
    );
    setTodos(updatedTodos);
    setIsEditMode(false);
    setTodo("");
  };

  // const onFilter = (e) => {
  //   setFilterValue(e.target.value);
  // };
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

      <TodoFilter
        // onFilter={(e) => onFilter(e)}
        // filterValue={filterValue}
        onSearch={(e) => onSearch(e)}
        searchValue={searchValue}
      />
      <TodoList
        todos={searchedTodos}
        onDelete={(id) => onDelete(id)}
        onEdit={(data) => onEdit(data)}
        onToggleCompletion={(id) => onToggleCompletion(id)}
      />
    </div>
  );
};

export default Todos;
