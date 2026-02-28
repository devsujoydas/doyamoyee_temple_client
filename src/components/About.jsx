import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="history" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("about_title")}</h2>
        <p className="text-lg md:text-xl">{t("about_text")}</p>
      </div>
    </section>
  );
};

export default About;