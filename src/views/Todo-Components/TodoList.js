import React from "react";
import "./TodoStyle.css";
const TodoList = ({ todo, onEdit, onDelete }) => {
  return (
    <div>
      <table className="table">
        <tr className="th">
          <th>Names</th>
          <th>Buttons</th>
        </tr>
        <tr className="th">
          <ul>
            {todo.map((data, i) => {
              return (
                <li key={data.id}>
                  <td>
                    {" "}
                    {data.name}{" "}
                    {<button onClick={() => onDelete(data.id)}>Delete</button>}
                    {<button onClick={() => onEdit(data, i)}>Edit</button>}
                  </td>
                </li>
              );
            })}
          </ul>
        </tr>
      </table>
    </div>
  );
};

export default TodoList;
