import React from "react";
import { useTranslation } from "react-i18next";
import banner from "/banner.jpg"

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative bg-cover bg-center h-[90vh]" style={{backgroundImage: `url(${banner})`}}>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">{t("hero_title")}</h1>
        <p className="mt-4 text-lg md:text-2xl">{t("hero_subtitle")}</p>
        <div className="mt-6 flex gap-4">
          <a href="#events" className="bg-yellow-500 px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition">
            {t("hero_cta_events")}
          </a>
          <a href="#volunteer" className="bg-green-500 px-6 py-3 rounded font-semibold hover:bg-green-600 transition">
            {t("hero_cta_volunteer")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;