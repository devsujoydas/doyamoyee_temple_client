import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/Errorpage";


import Home from "../pages/Home/Home";
import TempleHistory from "../pages/TempleHistory/TempleHistory";
import EventsPage from "../pages/EventsPage/EventsPage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import Videos from "../pages/Videos/Videos";
import ContactPage from "../pages/ContactPage/ContactPage";
import Donation from "../pages/Donate/Donation";

import Auth from "../pages/Authentication/Auth";
import Signup from "../pages/Authentication/Signup/Signup";
import Signin from "../pages/Authentication/Signin/Signin";
import ResetPassword from "../pages/Authentication/ResetPassword/ResetPassword";


import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import AdminOverview from "../pages/Admin/AdminOverview";
import AdminBlogs from "../pages/Admin/AdminBlogs";
import AdminNotices from "../pages/Admin/AdminNotices";
import AdminEvents from "../pages/Admin/AdminEvents";
import AdminDonations from "../pages/Admin/AdminDonations";


import NoticeDetails from "../pages/NoticePage/NoticeDetails";
import NoticePage from "../pages/NoticePage/NoticePage";

import BlogsPage from "../pages/BlogsPage/BlogsPage";
import BlogsDetails from "../pages/BlogsPage/BlogsDetails";

import Uploads from "../pages/Uploads/Uploads";

import PurohitPage from "../pages/Management/PurohitPage";
import CommitteePage from "../pages/Management/CommitteePage";
import AdvisorsPage from "../pages/Management/AdvisorsPage";
import MembersPage from "../pages/Management/MembersPage";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home />, },
      { path: '/history', element: <TempleHistory />, },
      { path: '/events', element: <EventsPage />, },
      { path: '/gallery', element: <GalleryPage />, },
      { path: '/videos', element: <Videos />, },
      { path: '/purohit', element: <PurohitPage />, },
      { path: '/committee', element: <CommitteePage />, },
      { path: '/advisors', element: <AdvisorsPage />, },
      { path: '/members', element: <MembersPage />, },
      { path: '/contact', element: <ContactPage />, },
      { path: '/donate', element: <Donation />, },

      { path: '/notices', element: <NoticePage />, },
      { path: '/notices/:id', element: <NoticeDetails />, },

      { path: '/blogs', element: <BlogsPage />, },
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
    ]
  },
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
    path: 'admin',
    element: <DashboardLayout />,
    children: [
      { path: '', element: < AdminOverview /> },
      { path: 'blogs', element: <AdminBlogs /> },
      { path: 'notices', element: <AdminNotices /> },
      { path: 'events', element: <AdminEvents /> },
      { path: 'donations', element: <AdminDonations /> },
    ]
  },
  { path: '/uploads', element: <Uploads />, },
]);
