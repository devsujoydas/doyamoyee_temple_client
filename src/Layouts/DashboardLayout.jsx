
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";



const DashboardLayout = () => {
    const links = [
        { label: "Overview", path: "" },
        { label: "Notices", path: "notices" },
        { label: "Members", path: "members" },
        { label: "Advisors", path: "advisors" },
        { label: "Events", path: "events" },
        { label: "Gallery", path: "gallery" },
    ];

    return (
        <div className="flex min-h-screen bg-amber-50">

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-amber-200 shadow-sm hidden md:block">
                <div className="p-6 text-2xl font-bold text-amber-800">
                    Temple Admin
                </div>

                <nav className="mt-6 space-y-2 px-4">
                    {links.map((link, idx) => (
                        <NavLink
                            key={idx}
                            to={link.path}
                            end={link.path === ""}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg hover:bg-amber-100 transition ${isActive ? "bg-amber-100 font-semibold" : ""
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <header className="bg-white border-b border-amber-200 px-6 py-4 flex justify-between items-center">
                    <h1 className="text-lg font-semibold text-gray-800">
                        Dashboard
                    </h1>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                        Logout
                    </button>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;