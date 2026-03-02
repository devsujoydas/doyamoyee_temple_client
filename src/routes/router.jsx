import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layouts/layout";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import Videos from "../pages/Videos/Videos";
import NoticePage from "../pages/NoticePage/NoticePage";
import NoticeDetails from "../pages/NoticePage/NoticeDetails";
import Pandits from "../pages/Pandits/Pandits";
import PanditDetails from "../pages/Pandits/PanditDetails";
import CommitteePage from "../pages/CommitteePage/CommitteePage";
import AdvisorsPage from "../pages/AdvisorsPage/AdvisorsPage";
import LifetimeMembersPage from "../pages/LifetimeMembersPage/LifetimeMembersPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import Signup from "../pages/Authentication/Signup/Signup";
import Signin from "../pages/Authentication/Signin/Signin";
import ResetPassword from "../pages/Authentication/ResetPassword/ResetPassword";
import Auth from "../pages/Authentication/Auth";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home />, },
      { path: '/notices', element: <NoticePage />, },
      { path: '/notices/:id', element: <NoticeDetails />, },

      { path: '/gallery', element: <GalleryPage />, },
      { path: '/videos', element: <Videos />, },
      { path: '/pandits', element: <Pandits />, },
      { path: '/pandits/:id', element: <PanditDetails />, },
      { path: '/committee', element: <CommitteePage />, },
      { path: '/advisor', element: <AdvisorsPage />, },
      { path: '/lifetime-members', element: <LifetimeMembersPage />, },
      { path: '/contact', element: <ContactPage />, },
      {
        path: 'auth',
        element: <Auth />,
        children: [
          { path: 'signup', element: <Signup /> },
          { path: 'signin', element: <Signin /> },
          { path: 'reset-password', element: <ResetPassword /> },
        ]
      }
    ]
  }
]);
