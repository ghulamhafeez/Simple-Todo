import React from "react";
import Counter from "../views/ReduxCounter/Counter"
import Todos from "../views/Todo-Components/Todos"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Todos />
    },
    {
        path:'/counter',
        element:<Counter />
    }
  ]);

const Contents = () => {
  return (
  
    <RouterProvider router={router} />

  );
};

export default Contents;
