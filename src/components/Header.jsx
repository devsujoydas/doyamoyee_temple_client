import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronDown } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Mock user state
  const [user, setUser] = useState(null); // null = guest, else {name: 'xyz'}

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
    setMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: t("nav_home") },
    { to: "#history", label: t("nav_history"), anchor: true },
    { to: "#puja", label: t("nav_events"), anchor: true },
    { to: "/gallery", label: t("nav_gallery") },
    { to: "/videos", label: t("nav_video") },
    { to: "/pandits", label: t("nav_pandits") },
    { to: "/committee", label: t("nav_committee") },
    { to: "/lifetime-members", label: t("nav_members") },
    { to: "/advisor", label: t("nav_advisor") },
    { to: "/notices", label: t("nav_notice") },
    { to: "/contact", label: t("nav_contact"), },
  ];

  return (
    <header className="sticky top-0 z-50 bg-color-secondary shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-color-secondary">
          {t("site_name")}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-color-primary">
          {navItems.map((item, idx) =>
            item.anchor ? (
              <a
                key={idx}
                href={item.to}
                className="hover:text-yellow-600 transition-all duration-200"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={idx}
                to={item.to}
                className="hover:text-yellow-600 transition-all duration-200"
              >
                {item.label}
              </NavLink>
            )
          )}

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 border px-3 py-1 rounded-md bg-yellow-100 text-black transition"
            >
              {i18n.language === "bn" ? "বাংলা" : "English"}
              <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-50"
                >
                  <div
                    onClick={() => handleLanguageChange("bn")}
                    className="px-4 py-2 cursor-pointer hover:bg-yellow-100 text-black transition"
                  >
                    বাংলা
                  </div>
                  <div
                    onClick={() => handleLanguageChange("en")}
                    className="px-4 py-2 cursor-pointer hover:bg-yellow-100 text-black transition"
                  >
                    English
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="ml-4 w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white hover:scale-105 transition"
            >
              <User size={18} />
            </button>
            <AnimatePresence>
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-30 bg-white shadow-lg rounded-md overflow-hidden z-50"
                >
                  {!user ? (
                    <>
                      <Link
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-yellow-100 text-black transition"
                      >
                        Dashboard
                      </Link>
                      <Link
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        to="/my-blogs"
                        className="block px-4 py-2 hover:bg-yellow-100 text-black transition"
                      >
                        My Blogs
                      </Link>
                      <button
                        onClick={() => setUser(null)}
                        className="w-full text-left px-4 py-2 hover:bg-yellow-100 text-black transition"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        to="/auth/signup"
                        className="block px-4 py-2 hover:bg-yellow-100 text-black transition"
                      >
                        Signup
                      </Link>
                      <Link
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        to="/auth/signin"
                        className="block px-4 py-2 hover:bg-yellow-100 text-black transition"
                      >
                        Signin
                      </Link>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-color-primary shadow-md"
          >
            <div className="flex flex-col space-y-3 px-4 py-4">
              {navItems.map((item, idx) =>
                item.anchor ? (
                  <a
                    key={idx}
                    href={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-yellow-600 transition"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={idx}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-yellow-600 transition"
                  >
                    {item.label}
                  </NavLink>
                )
              )}

              {/* Mobile Language */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="border px-3 py-2 rounded-md w-full text-left hover:bg-yellow-100 text-black transition"
                >
                  {i18n.language === "bn" ? "বাংলা" : "English"}
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute w-full bg-white rounded-md shadow-lg overflow-hidden z-50"
                    >
                      <div
                        onClick={() => handleLanguageChange("bn")}
                        className="px-4 py-2 cursor-pointer hover:bg-yellow-100 text-black transition"
                      >
                        বাংলা
                      </div>
                      <div
                        onClick={() => handleLanguageChange("en")}
                        className="px-4 py-2 cursor-pointer hover:bg-yellow-100 text-black transition"
                      >
                        English
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* User Links */}
              <div className="border-t border-gray-300  pt-3 space-y-2">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-yellow-100 text-black transition"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/my-blogs"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-yellow-100 text-black transition"
                    >
                      My Blogs
                    </Link>
                    <button
                      onClick={() => {
                        setUser(null);
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-yellow-100 text-black transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/auth/signup"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-yellow-100 text-black transition"
                    >
                      Signup
                    </Link>
                    <Link
                      to="/auth/signin"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-yellow-100 text-black transition"
                    >
                      Signin
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;