import React, { useState } from "react";
import TodoList from "./TodoList";
const TodoForm = () => {
  const [todo, setTodo] = useState([]);
  const [todoo, setTodoo] = useState();
  const [showButton, setShowButton] = useState(false);
  const [index, setIndex] = useState();

  console.log("e", todoo);
  const handleAdd = () => {
    let myData = {
      name: todoo,
    };
    console.log("e");
    const newTodo = todo.slice();
    console.log("newTodo", newTodo);
    newTodo.push(myData);
    setTodo(newTodo);
    handleNull();
  };

  const handleDelete = (index) => {
    const newTodo = todo.slice();
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const handleEdit = (data, index) => {
    setIndex(index);
    setTodoo(data.name);
    setShowButton(true);
  };

  const handleUpdate = () => {
    const newTodo = todo.slice();
    let data = {
      name: todoo,
    };
    newTodo.splice(index, 1, data);
    setTodo(newTodo);
    setShowButton(false);
    handleNull();
  };
  const handleNull = () => {
    setTodoo("");
  };
  return (
    <>
     <div >
     <h2 className="display">TODO LIST</h2>
      <input
      className="input"
        type="text"
        value={todoo}
        onChange={(e) => setTodoo(e.target.value)}
      ></input>
      {showButton ? (
        <button onClick={() => handleUpdate()}>UpDate</button>
      ) : (
        <button onClick={(e) => handleAdd(e)}>Add</button>
      )}</div> 
<div className="div" >
      <TodoList
        todo={todo}
        handleDelete={(index) => handleDelete(index)}
        handleEdit={(data, index) => handleEdit(data, index)}
      />
    </div>
    </>
  );
};
export default TodoForm;
