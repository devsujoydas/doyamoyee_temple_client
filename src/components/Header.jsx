import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

        {/* 🔹 Logo / Temple Name */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-yellow-600"
        >
          {t("site_name")}
        </Link>

        {/* 🔹 Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">


          <Link to="/" className="hover:text-yellow-600 transition" > {t("nav_home")} </Link>
          <a href="#history" className="hover:text-yellow-600 transition"> {t("nav_history")} </a>
          <a href="#puja" className="hover:text-yellow-600 transition"> {t("nav_events")} </a>
          <NavLink to="/gallery" className="hover:text-yellow-600 transition"> {t("nav_gallery")} </NavLink>
          <NavLink to="/videos" className="hover:text-yellow-600 transition"> {t("nav_video")} </NavLink>
          <a href="#volunteer" className="hover:text-yellow-600 transition"> {t("nav_volunteer")} </a>
          <NavLink to="/notices" className="hover:text-yellow-600 transition"> {t("nav_notice")} </NavLink>
          <NavLink to="/notices/timeline" className="hover:text-yellow-600 transition"> {t("nav_timeline")} </NavLink>
          <a href="#contact" className="hover:text-yellow-600 transition"> {t("nav_contact")} </a>
          <a href="#blogs" className="hover:text-yellow-600 transition"> {t("nav_blogs")} </a>

          {/* 🔹 Language Select */}
          <select
            onChange={handleLanguageChange}
            value={i18n.language}
            className="border px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="bn">বাংলা</option>
            <option value="en">English</option>
          </select>
        </nav>

        {/* 🔹 Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {
        menuOpen && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className=" md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
            <Link to="/" className="block" > {t("nav_home")} </Link>
            <a href="#history" className="block"> {t("nav_history")} </a>
            <a href="#puja" className="block"> {t("nav_events")} </a>
            <NavLink to="/gallery" className="block"> {t("nav_gallery")} </NavLink>
            <NavLink to="/videos" className="block"> {t("nav_video")} </NavLink>
            <a href="#volunteer" className="block"> {t("nav_volunteer")} </a>
            <NavLink to="/notices" className="block"> {t("nav_notice")} </NavLink>
            <NavLink to="/notices/timeline" className="block"> {t("nav_timeline")} </NavLink>
            <a href="#contact" className="block"> {t("nav_contact")} </a>
            <a href="#blogs" className="block"> {t("nav_blogs")} </a>



            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className="border px-3 py-2 rounded-md w-full"
            >
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
            </select>
          </div>
        )
      }
    </header >
  );
};

export default Header;