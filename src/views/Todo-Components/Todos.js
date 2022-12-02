import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
// import {TodoForm} from "./TodoForm";
import { TodoForm } from "./TodoForm";
import TodoFilter from "./TodoFilter";
import { getTodos } from "../../services/Todoservices";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [searchValue, setSearchValue] = useState("");
  // const [filterValue, setFilterValue] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    // Fetch Method

    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(data => setTodos(data))

    getTodos().then((res) => setTodos(res));
  }, []);

  const searchedTodos = todos.filter((x) => x.title.includes(searchValue));

  const onAdd = (TodoValue) => {
    let myData = {
      title: TodoValue,
      id: Date.now(),
      isCompleted: false,
    };
    const updatedTodos = [myData, ...todos];
    setTodos(updatedTodos);
    setTodo("");
  };

  const onDelete = (id) => {
    const newTodoList = todos.filter((todo) => id !== todo.id);

    setTodos(newTodoList);
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onEdit = ({ title, id }) => {
    setTodo(title);
    setId(id);
    setIsEditMode(true);
  };

  const onUpdate = (TodoValue) => {
    //findindex method//

    // const newTodo = todos.slice();
    // let index = todos.findIndex((i) => i.id == id);
    // newTodo.splice(index, 1, myData);

    const updatedTodos = todos.map((x) =>
      x.id === id ? { ...x, title: TodoValue } : x
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
        onUpdate={(TodoValue) => onUpdate(TodoValue)}
        onAdd={(TodoValue) => onAdd(TodoValue)}
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
