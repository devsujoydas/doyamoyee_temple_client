import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../layouts/layout";
import ErrorPage from "../pages/ErrorPage/Errorpage";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoutes><Layout /></PrivateRoutes>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  }
]);
