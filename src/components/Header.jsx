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
          <a href="#home" className="hover:text-yellow-600 transition">
            {t("nav_home")}
          </a>


          <a href="#history" className="hover:text-yellow-600 transition">
            {t("nav_history")}
          </a>
          <a href="#puja" className="hover:text-yellow-600 transition">
            {t("nav_events")}
          </a>
          <NavLink to="/gallery" className="hover:text-yellow-600 transition">

            {t("nav_gallery")}
          </NavLink>
          <NavLink to="/videos" className="hover:text-yellow-600 transition">
            {t("nav_video")}
          </NavLink>
          <a href="#volunteer" className="hover:text-yellow-600 transition">
            {t("nav_volunteer")}
          </a>
          <NavLink to="/notice" className="hover:text-yellow-600 transition">
            {t("nav_notice")}
          </NavLink>
          <a href="#contact" className="hover:text-yellow-600 transition">
            {t("nav_contact")}
          </a>
          <a href="#blogs" className="hover:text-yellow-600 transition">
            {t("nav_blogs")}
          </a>
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
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          <a href="#home" className="block">{t("nav_home")}</a>
          <a href="#history" className="block">{t("nav_history")}</a>
          <a href="#events" className="block">{t("nav_events")}</a>
          <a href="#gallery" className="block">{t("nav_gallery")}</a>
          <a href="#volunteer" className="block">{t("nav_volunteer")}</a>
          <a href="#notice" className="block">{t("nav_notice")}</a>
          <a href="#contact" className="block">{t("nav_contact")}</a>

          <select
            onChange={handleLanguageChange}
            value={i18n.language}
            className="border px-3 py-2 rounded-md w-full"
          >
            <option value="bn">বাংলা</option>
            <option value="en">English</option>
          </select>
        </div>
      )}
    </header>
  );
};

export default Header;