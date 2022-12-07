import React from "react";
import "./TodoStyle.css";
import { useDispatch } from "react-redux";
import { onDelete, onToggleCompletion } from "../../reducers/TodoReducer";
const TodoList = ({ onEdit, searchedTodos }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <table className="table">
        <tr className="th">
          <th>Names</th>
          <th>Actions</th>
        </tr>

        {searchedTodos.map((data, i) => {
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
                  onClick={() => dispatch(onToggleCompletion(data.id))}
                  defaultChecked={false}
                ></input>
                {data.title}{" "}
              </td>
              <td>
                {
                  <button
                    data-testid={`delete-button-${data.id}`}
                    onClick={() => dispatch(onDelete(data.id))}
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
