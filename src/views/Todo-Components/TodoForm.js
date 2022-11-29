import React from "react";
const TodoForm = ({
  onUpdate,
  setTodo,
  onAdd,
  isEditMode,
  onFilter,
  todo,
}) => {
  return (
    <div>
      <h2 className="display">TODO LIST</h2>
      <div className="input">
        <b>Todo: </b>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        {isEditMode ? (
          <button data-testid={"UpdateTest"} onClick={() => onUpdate()}>UpDate</button>
        ) : (
          <button data-testid={"AddTest"} onClick={() => onAdd()}>Add</button>
        )}
      </div>
    </div>
  );
};
export default TodoForm;
