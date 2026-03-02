import React from "react";
import { motion } from "framer-motion";
import templeImage from "/about/tample-about.webp";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="history" className="py-24 bg-color-primary min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 px-6">

        {/* Image */}
        <motion.div
          className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-200"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={templeImage}
            alt="Doyamoyee Temple"
            className="w-full md:h-130 object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 space-y-8"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* About Title */}
          <h2 className="text-4xl font-bold text-color-secondary tracking-wide">
            {t("about_title")}
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            {t("about_text")}
          </p>

          {/* Elegant Divider */}
          <div className="w-24 h-1 bg-amber-500 rounded-full"></div>

          {/* History */}
          <h3 className="text-2xl font-semibold text-color-secondary">
            {t("history_title")}
          </h3>

          <p className="text-gray-700 leading-relaxed text-lg">
            {t("history_text")}
          </p>

          {/* Establishment Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-amber-200 space-y-3">
            <h4 className="text-xl font-semibold text-color-secondary mb-3">
              {t("establishment_title")}
            </h4>

            <ul className="space-y-2 text-gray-700">
              <li>• {t("established")}</li>
              <li>• {t("founder")}</li>
              <li>• {t("estate_founder")}</li>
              <li>• {t("development")}</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;