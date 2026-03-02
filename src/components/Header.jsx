import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setMenuOpen(!menuOpen)
  };

  return (
    <header className="sticky top-0 bg-color-secondary shadow-md z-30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

        {/* 🔹 Logo / Temple Name */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-color-secondary"
        >
          {t("site_name")}
        </Link>

        {/* 🔹 Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-color-primary font-medium">


          <Link to="/" className="hover:text-yellow-600 transition" > {t("nav_home")} </Link>
          <a href="#history" className="hover:text-yellow-600 transition"> {t("nav_history")} </a>
          <a href="#puja" className="hover:text-yellow-600 transition"> {t("nav_events")} </a>
          <NavLink to="/gallery" className="hover:text-yellow-600 transition"> {t("nav_gallery")} </NavLink>
          <NavLink to="/videos" className="hover:text-yellow-600 transition"> {t("nav_video")} </NavLink>
          <NavLink to="/pandits" className="hover:text-yellow-600 transition"> {t("nav_pandits")} </NavLink> 
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
            <option className="text-black" value="bn">বাংলা</option>
            <option className="text-black" value="en">English</option>
          </select>
        </nav>

        {/* 🔹 Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {
        menuOpen && (
          <div

            className=" md:hidden bg-color-primary shadow-md px-4 pb-4 space-y-3">
            <Link to="/" className="block pt-4" onClick={() => setMenuOpen(!menuOpen)} > {t("nav_home")} </Link>
            <a href="#history" className="block" onClick={() => setMenuOpen(!menuOpen)}> {t("nav_history")} </a>
            <a href="#puja" className="block" onClick={() => setMenuOpen(!menuOpen)}> {t("nav_events")} </a>
            <NavLink to="/gallery" className="block" onClick={() => setMenuOpen(!menuOpen)}> {t("nav_gallery")} </NavLink>
            <NavLink to="/videos" className="block" onClick={() => setMenuOpen(!menuOpen)}> {t("nav_video")} </NavLink>
            <a href="#volunteer" className="block" onClick={() => setMenuOpen(!menuOpen)}> {t("nav_pandits")} </a>
            <NavLink to="/notices" className="block" onClick={() => setMenuOpen(!menuOpen)}> {t("nav_notice")} </NavLink>
            <NavLink to="/notices/timeline" className="block" onClick={() => setMenuOpen(!menuOpen)}> {t("nav_timeline")} </NavLink>
            <a href="#contact" className="block" onClick={() => setMenuOpen(!menuOpen)}> {t("nav_contact")} </a>
            <a href="#blogs" className="block" onClick={() => setMenuOpen(!menuOpen)}> {t("nav_blogs")} </a>



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