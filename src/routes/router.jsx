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
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import DashboardNoticesPage from "../pages/Dashboard/DashboardNoticesPage";
import DashboardMembersPage from "../pages/Dashboard/DashboardMembersPage";
import DashboardAdvisorsPage from "../pages/Dashboard/DashboardAdvisorsPage";
import DashboardEventsPage from "../pages/Dashboard/DashboardEventsPage";
import DashboardGalleryPage from "../pages/Dashboard/DashboardGalleryPage";
import Blogs from "../pages/Blogs/Blogs";
import BlogsDetails from "../pages/Blogs/BlogsDetails";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home />, },
      { path: '/notices', element: <NoticePage />, },
      { path: '/notices/:id', element: <NoticeDetails />, },

      { path: '/blogs', element: <Blogs />, },
      {
        path: '/blogs/:slug',
        element: <BlogsDetails />,
        loader: async ({ params }) => {
          const slug = params.slug;

          try {
            const res = await fetch('/json/blogs.json');
            if (!res.ok) throw new Error('Failed to fetch blogs');

            const blogs = await res.json();
            
            const blog = blogs.find(b => b.slug === slug);
            if (!blog) throw new Response("Not Found", { status: 404 });

            return blog;
          } catch (err) {
            console.error(err);
            throw new Response("Failed to load blog", { status: 500 });
          }
        },
      },

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
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          { path: '', element: <DashboardHome /> },
          { path: 'notices', element: <DashboardNoticesPage /> },
          { path: 'members', element: <DashboardMembersPage /> },
          { path: 'advisors', element: <DashboardAdvisorsPage /> },
          { path: 'events', element: <DashboardEventsPage /> },
          { path: 'gallery', element: <DashboardGalleryPage /> },
        ]
      }
    ]
  }
]);
