import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layouts/layout";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import Videos from "../pages/Videos/Videos";
import NoticePage from "../pages/NoticePage/NoticePage";
import NoticeDetails from "../pages/NoticePage/NoticeDetails";
import NoticesTimeline from "../pages/NoticeTimeline/NoticesTimeline";
import Pandits from "../pages/Pandits/Pandits";
import PanditDetails from "../pages/Pandits/PanditDetails";
import CommitteePage from "../pages/CommitteePage/CommitteePage";



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
        path: '/notices',
        element: <NoticePage />,
      },
      {
        path: '/notices/:id',
        element: <NoticeDetails />,
      },
      {
        path: '/notices/Timeline',
        element: <NoticesTimeline />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/pandits',
        element: <Pandits />,
      },
      {
        path: '/pandits/:id',
        element: <PanditDetails />,
      },
      {
        path: '/committee',
        element: <CommitteePage />,
      },
    ]
  }
]);
