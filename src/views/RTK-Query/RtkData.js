import React from "react";
import { useGetTodosQuery } from "../../services/TKRservices";
const RtkData = () => {
  const { data: todosData = [], isLoading } = useGetTodosQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Helo
      {todosData.map((x) => {
        return <p>{x.title}</p>;
      })}
    </div>
  );
};

export default RtkData;
