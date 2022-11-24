import React from "react";
import "./TodoStyle.css";
const TodoList = ({ todo, onEdit, onDelete ,onCheckBoxClick}) => {
  return (
    <div>
      <table className="table">
        <tr className="th">
       
          <th>Names</th>
          <th>Buttons</th>
        </tr>

        {todo.map((data, i) => {
          return (
            <tr className="tr"  style={{ textDecoration: data.isCompleted ? "line-through" : null }} key={data.id}>
            
              <td>
              <input type="checkbox" onClick={() => onCheckBoxClick(data)} defaultChecked={false}></input>{data.name} </td>
              <td>
                {<button onClick={() => onDelete(data.id)}>Delete</button>}
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
