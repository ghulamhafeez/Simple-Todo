import React from "react";
import "./TodoStyle.css";
const TodoList = ({ todos, onEdit, onDelete, onToggleCompletion }) => {
  return (
    <div>
      <table className="table">
        <tr className="th">
          <th>Names</th>
          <th>Actions</th>
        </tr>

        {todos.map((data, i) => {
          return (
            <tr
              className="tr"
              style={{
                textDecoration: data.isCompleted ? "line-through" : null,
              }}
              key={data.id}
            >
              <td>
                <input
                  type="checkbox"
                  onClick={() => onToggleCompletion(data.id)}
                  defaultChecked={false}
                ></input>
                {data.title}{" "}
              </td>
              <td>
                {
                  <button
                    data-testid={`delete-button-${data.id}`}
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </button>
                }
                {<button onClick={() => onEdit(data)}>Edit</button>}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TodoList;
