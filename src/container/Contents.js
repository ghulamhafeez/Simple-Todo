import React from "react";
import ReduxCounter from "../views/ReduxCounter/Counter";
import ContextCounter from "../views/ContextCounter/CounterValue";
import Todos from "../views/Todo-Components/Todos";
import RtkData from "../views/RTK-Query/RtkData";
import {AdmissionForm} from "../views/FormikAdmissionForm/AdmissionForm"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
  },
  {
    path: "/redux-counter",
    element: <ReduxCounter />,
  },
  {
    path: "/rtk-data",
    element: <RtkData />,
  },
  {
    path: "/context-counter",
    element: <ContextCounter />,
  },
  
  {
    path: "/admission-form",
    element: <AdmissionForm />,
  },
]);

const Contents = () => {
  return <RouterProvider router={router} />;
};

export default Contents;
