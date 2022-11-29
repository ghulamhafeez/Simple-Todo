import React from "react";
import { filterOptions } from "./TodosConstant";
const TodoFilter = ({ onFilter, filterValue, searchValue, onSearch }) => {
  return (
    <div>
      <div className="input">
        <b>Search: </b>
        <input
         data-testid={"search-input"}
          type="text"
          value={searchValue}
          onChange={(e) => onSearch(e)}
        ></input>
      </div>
      {/* <div className="input">
        <b>Select: </b>
        <select name="select" value={filterValue} onChange={(e) => onFilter(e)}>
          {filterOptions.map((x) => {
            <option> Select</option>;
            return <option value={x.value}>{x.name} </option>;
          })}
        </select>
      </div> */}
    </div>
  );
};

export default TodoFilter;
