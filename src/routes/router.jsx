import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layouts/layout";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import Notice from "../pages/Notice/Notice";
import GalleryPage from "../pages/GalleryPage/GalleryPage";  
import Videos from "../pages/Videos/Videos";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/notice',
        element: <Notice />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
    ]
  }
]);
