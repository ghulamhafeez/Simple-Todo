import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { TodoForm } from "./TodoForm";
import TodoFilter from "./TodoFilter";
import { onGetTodos } from "../../reducers/TodoReducer";
import { getTodos } from "../../services/Todoservices";
import { useDispatch, useSelector } from "react-redux";
const Todos = () => {
  const [todo, setTodo] = useState("");
  const [searchValue, setSearchValue] = useState("");
  // const [filterValue, setFilterValue] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const searchedTodos = todos.filter((x) => x.title.includes(searchValue));
  useEffect(() => {
    // Fetch Method

    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(data => setTodos(data))

    getTodos().then((res) => dispatch(onGetTodos(res)));
  }, [dispatch]);

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onEdit = ({ title, id }) => {
    setTodo(title);
    setId(id);
    setIsEditMode(true);
  };

  // const onFilter = (e) => {
  //   setFilterValue(e.target.value);
  // };

  return (
    <div>
      <TodoForm todo={todo} setTodo={setTodo} isEditMode={isEditMode} id={id} />

      <TodoFilter
        // onFilter={(e) => onFilter(e)}
        // filterValue={filterValue}
        onSearch={(e) => onSearch(e)}
        searchValue={searchValue}
      />
      <TodoList searchedTodos={searchedTodos} onEdit={(data) => onEdit(data)} />
    </div>
  );
};

export default Todos;
