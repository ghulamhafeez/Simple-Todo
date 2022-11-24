import React from "react";

const TodoForm = ({ onUpdate, setTodo, onAdd, isEditMode, todo }) => {
  return (
    <div>
      <h2 className="display">TODO LIST</h2>
      <input
        className="input"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      {isEditMode ? (
        <button onClick={() => onUpdate()}>UpDate</button>
      ) : (
        <button onClick={() => onAdd()}>Add</button>
      )}
    </div>
  );
};
export default TodoForm;
