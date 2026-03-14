import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, ChevronDown } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [user, setUser] = useState(null);
  const [hideHeader, setHideHeader] = useState(false);

  // Header hide/show on scroll
  // useEffect(() => {
  //   let lastScrollY = 0;
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY && window.scrollY > 80) setHideHeader(true);
  //     else setHideHeader(false);
  //     lastScrollY = window.scrollY;
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdown(mobileDropdown === index ? null : index);
  };

  const navItems = [
    { label: t("nav_home"), to: "/" },
    { label: t("nav_history"), to: "/history" },
    { label: t("nav_events"), to: "/events" },
    {
      label: t("nav_media"),
      dropdown: [
        { label: t("nav_gallery"), to: "/gallery" },
        { label: t("nav_video"), to: "/videos" },
      ],
    },
    {
      label: t("nav_management"),
      dropdown: [
        { label: t("nav_purohit"), to: "/purohit" },
        { label: t("nav_committee"), to: "/committee" },
        { label: t("nav_members"), to: "/members" },
        { label: t("nav_advisor"), to: "/advisors" },
      ],
    },
    { label: t("nav_posts"), to: "/blogs" },
    { label: t("nav_notice"), to: "/notices" },
    { label: t("nav_contact"), to: "/contact" },
    { label: t("nav_donation"), to: "/donate" },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 backdrop-blur-md transition-transform duration-300
        ${hideHeader ? "-translate-y-full" : "translate-y-0"}
        bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-sm
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-yellow-600 dark:text-yellow-400"
        >
          {t("site_name")}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 font-medium">

          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="relative group">
                <button className="flex items-center gap-1 transition-colors hover:text-yellow-600 dark:hover:text-yellow-400">
                  {item.label}
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-active::visible group-active:opacity-100 group-hover:visible  transition-all">
                  {item.dropdown.map((sub, i) =>
                    sub.anchor ? (
                      <a
                        key={i}
                        href={sub.to}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors"
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <NavLink
                        key={i}
                        to={sub.to}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors"
                      >
                        {sub.label}
                      </NavLink>
                    )
                  )}
                </div>
              </div>
            ) : (
              <NavLink
                key={idx}
                to={item.to}
                className={({ isActive }) =>
                  `transition hover:text-yellow-600 dark:hover:text-yellow-400 ${isActive ? "text-yellow-700 dark:text-yellow-300 font-semibold" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="border px-3 py-1 rounded-md bg-yellow-100 dark:bg-yellow-800 text-gray-800 dark:text-gray-100 text-sm flex items-center gap-1"
            >
              {i18n.language === "bn" ? "বাংলা" : "EN"}
              <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden"
                >
                  <div
                    onClick={() => changeLang("bn-BD")}
                    className={`px-4 py-2 text-sm cursor-pointer ${i18n.language === "bn-BD"
                      ? "bg-yellow-200 dark:bg-yellow-700 font-bold"
                      : "text-gray-800 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900"
                      }`}
                  >
                    বাংলা
                  </div>
                  <div
                    onClick={() => changeLang("en-BD")}
                    className={`px-4 py-2 text-sm cursor-pointer ${i18n.language === "en-BD"
                      ? "bg-yellow-200 dark:bg-yellow-700 font-bold"
                      : "text-gray-800 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900"
                      }`}
                  >
                    English
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="ml-2 w-10 h-10 bg-yellow-600 dark:bg-yellow-400 text-white rounded-full flex items-center justify-center"
            >
              <User size={18} />
            </button>
            <AnimatePresence>
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden"
                >
                  {!user ? (
                    <>
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors"
                      >
                        {t("auth_dashboard")}
                      </Link>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors"
                      >
                        {t("auth_profile")}
                      </Link>
                      <button
                        onClick={() => setUser(null)}
                        className="w-full text-left px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors"
                      >
                        {t("auth_logout")}
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/auth/signin"
                        className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors"
                      >
                        {t("auth_signin")}
                      </Link>
                      <Link
                        to="/auth/signup"
                        className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors"
                      >
                        {t("auth_signup")}
                      </Link>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          {menuOpen ? <X size={28} className="text-gray-800 dark:text-gray-100" /> : <Menu size={28} className="text-gray-800 dark:text-gray-100" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col px-4 py-4 space-y-3">

              {navItems.map((item, idx) =>
                item.dropdown ? (
                  <div key={idx}>
                    <button
                      onClick={() => toggleMobileDropdown(idx)}
                      className="flex justify-between items-center w-full font-semibold text-gray-800 dark:text-gray-100"
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition ${mobileDropdown === idx ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === idx && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="ml-3 mt-2 flex flex-col space-y-1">
                          {item.dropdown.map((sub, i) =>
                            sub.anchor ? (
                              <a key={i} href={sub.to} onClick={() => setMenuOpen(false)} className="py-1 text-sm text-gray-800 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                                {sub.label}
                              </a>
                            ) : (
                              <NavLink key={i} to={sub.to} onClick={() => setMenuOpen(false)} className="py-1 text-sm text-gray-800 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                                {sub.label}
                              </NavLink>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink key={idx} to={item.to} onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-100 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                    {item.label}
                  </NavLink>
                )
              )}

              {/* Mobile Language Switch */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="w-full px-3 py-2 bg-yellow-100 dark:bg-yellow-800 text-gray-800 dark:text-gray-100 rounded-md flex justify-between items-center"
                >
                  {i18n.language === "bn" ? "বাংলা" : "EN"}
                  <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col mt-2 bg-white dark:bg-gray-800 rounded-md overflow-hidden"
                    >
                      <div
                        onClick={() => changeLang("bn-BD")}
                        className="px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900 cursor-pointer"
                      >
                        বাংলা
                      </div>
                      <div
                        onClick={() => changeLang("en-BD")}
                        className="px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-yellow-100 dark:hover:bg-yellow-900 cursor-pointer"
                      >
                        English
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Auth */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-2">
                {user ? (
                  <>
                    <Link to="/admin" className="px-3 py-2 bg-yellow-600 text-white rounded-md text-center">
                      {t("auth_dashboard")}
                    </Link>
                    <Link to="/profile" className="px-3 py-2 border rounded-md border-gray-300 dark:border-gray-600 text-center">
                      {t("auth_profile")}
                    </Link>
                    <button onClick={() => setUser(null)} className="px-3 py-2 border rounded-md border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center">

                      {t("auth_logout")}
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/auth/signin" className="px-3 py-2 bg-yellow-600 text-white rounded-md text-center">
                      {t("auth_signin")}
                    </Link>
                    <Link to="/auth/signup" className="px-3 py-2 border rounded-md border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center">
                      {t("auth_signup")}
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