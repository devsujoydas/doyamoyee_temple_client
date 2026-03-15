import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Music from "../components/MusicPlayer";
const MainLayout = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.lang = currentLang;
    document.body.classList.remove("lang-bn-BD", "lang-en-US");
    document.body.classList.add(`lang-${currentLang}`);
  }, [i18n.language]);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Music open={open} setOpen={setOpen} />
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Header />
          <Toaster position="top-right" reverseOrder={false} />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
