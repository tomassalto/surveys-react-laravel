import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Singup from "./views/Singup";
import Surveys from "./views/Surveys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/surveys",
    element: <Surveys />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/singup",
    element: <Singup />
  },
]);

export default router;
