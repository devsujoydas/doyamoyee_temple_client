import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiHome, HiDocumentText, HiCalendar, HiBell, HiCurrencyDollar, HiChartBar, HiMenu, HiX } from "react-icons/hi";

const adminLinks = [
  { label: "Overview", path: "/admin", icon: HiChartBar },
  { label: "Blog Management", path: "/admin/blogs", icon: HiDocumentText },
  { label: "Notice Management", path: "/admin/notices", icon: HiBell },
  { label: "Event Management", path: "/admin/events", icon: HiCalendar },
  { label: "Donations", path: "/admin/donations", icon: HiCurrencyDollar },
  { label: "Back to Site", path: "/", icon: HiHome },
];

const SidebarContent = ({setSidebarOpen}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-lg font-display font-bold text-sidebar-foreground">Admin Dashboard</h2>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {adminLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
          >
            <link.icon size={18} />
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);





  return (
    <div className="min-h-screen flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-sidebar border-r border-sidebar-border shrink-0">
        <SidebarContent  setSidebarOpen={setSidebarOpen}/>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setSidebarOpen(false)} />
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            className="relative w-64 h-full bg-sidebar shadow-xl"
          >
            <SidebarContent setSidebarOpen={setSidebarOpen} />
          </motion.aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-border flex items-center px-4 bg-card">
          <button className="lg:hidden mr-3 text-foreground" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
            <HiMenu size={22} />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Maa Doyamoyee Admin</h1>
        </header>
        <motion.main
          className="flex-1 p-4 md:p-6 bg-background overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;
