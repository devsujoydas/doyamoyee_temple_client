import React from "react";
import { motion } from "framer-motion";
import templeImage from "/about/tample-about.webp"; // আপনার image path
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();

  return (
    <section id="history" className="py-20 h-screen flex justify-center bg-white">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center gap-10 px-4">

        {/* Image */}
        <motion.div
          className="md:w-1/2 h-150 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={templeImage}
            alt="Doyamoyee Temple"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about_title")}</h2>
          <p className="text-gray-700 text-lg md:text-xl mb-4">
            {t("about_text")}
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default About;