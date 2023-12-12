import { createBrowserRouter } from "react-router-dom";
import NavLayout from "../layout/NormalLayout";
import Blog from "../page/Blog";
import Detail from "../page/Detail";

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
]);

export default router;
