import { createBrowserRouter } from "react-router-dom";
import NavLayout from "../layout/NormalLayout";
import Blog from "../page/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        index: true,
        element: <Blog />,
      },
    ],
  },
]);

export default router;
