import React from "react";
import Counter from "../views/ReduxCounter/Counter"
import Todos from "../views/Todo-Components/Todos"
import RtkData from "../views/RTK-Query/RtkData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Todos />
    },
    {
        path:'/counter',
        element:<Counter />
    },
    {
      path: "/rtk-data",
      element:<RtkData />
    }
  ]);

const Contents = () => {
  return (
  
    <RouterProvider router={router} />

  );
};

export default Contents;
