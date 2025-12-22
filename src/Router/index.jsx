import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import TaskForm from "../Components/TaskForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/add-task",
        element: <TaskForm />,
      },
    ],
  },
]);

export default router;
