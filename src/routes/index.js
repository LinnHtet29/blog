import { createBrowserRouter } from "react-router-dom";
import NavLayout from "../layout/DefaultLayout";
import Blog from "../page/public/Blog";
import Detail from "../page/public/Detail";
import Login from "../page/public/Login";
import Dashboard from "../page/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import BlogList from "../page/admin/BlogList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        index: true,
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/auth",
    element: <AdminLayout />,
    children: [
      {
        path: "/auth/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth/blog",
        element: <BlogList />,
      },
    ],
  },
]);

export default router;
