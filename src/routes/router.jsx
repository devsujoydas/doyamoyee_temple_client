import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
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
import TempleHistory from "../pages/TempleHistory/TempleHistory";
import MainLayout from "../Layouts/MainLayout";
import AdminOverview from "../pages/Admin/AdminOverview";
import AdminBlogs from "../pages/Admin/AdminBlogs";
import AdminNotices from "../pages/Admin/AdminNotices";
import AdminEvents from "../pages/Admin/AdminEvents";
import AdminDonations from "../pages/Admin/AdminDonations";
import Donation from "../pages/Donate/Donation";
import PujaPage from "../pages/PujaPage/PujaPage";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import BlogsDetails from "../pages/BlogsPage/BlogsDetails";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home />, },
      { path: '/history', element: <TempleHistory />, },
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

      { path: '/gallery', element: <GalleryPage />, },
      { path: '/videos', element: <Videos />, },
      { path: '/pandits', element: <Pandits />, },
      { path: '/pandits/:id', element: <PanditDetails />, },
      { path: '/committee', element: <CommitteePage />, },
      { path: '/advisors', element: <AdvisorsPage />, },
      { path: '/members', element: <LifetimeMembersPage />, },
      { path: '/contact', element: <ContactPage />, },
      { path: '/puja', element: <PujaPage />, },
      { path: '/donate', element: <Donation />, },
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
      { path: '', element: < AdminOverview/> },
      { path: 'blogs', element: <AdminBlogs /> },
      { path: 'notices', element: <AdminNotices /> },
      { path: 'events', element: <AdminEvents /> },
      { path: 'donations', element: <AdminDonations /> },
    ]
  }
]);
