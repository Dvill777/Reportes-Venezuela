import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./Layout/MainLayout";
import CreatePost from "./pages/CreatePost/CreatePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/crear-publicacion",
        element: <CreatePost />,
      },
    ],
  },
]);
