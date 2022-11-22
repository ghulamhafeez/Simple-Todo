import React from "react";
import './TodoStyle.css';
const TodoList = (props) => {
  console.log("props", props);
  return (
    <div>
      <table className="table">
        <tr className="th">
          <th>
            Names
          </th>
          <th>
            Buttons
          </th>
        </tr>
        <tr className="th">
          
          <ul>
        {props.todo.map((data, index) => {
          return (
            <li key={index}>
             <td > {data.name} {<button onClick={() => props.handleDelete(index)}>Delete</button>}
              {<button onClick={() => props.handleEdit(data,index)}>Edit</button>}</td>
             {/* <td > </td>  */}
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
