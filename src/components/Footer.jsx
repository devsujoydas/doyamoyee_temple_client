import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLocationSharp, IoCall } from "react-icons/io5";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-20">

        {/* About */}
        <div className="col-span-2">
          <h3 className="text-xl md:text-2xl font-bold text-yellow-600 mb-4">
            {t("site_name")}
          </h3>

          <p className="text-sm leading-relaxed mb-4">
            {t("footer_about_text")}
          </p>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <IoCall /> 01303436299
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineAlternateEmail /> devsujoydas@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <IoLocationSharp /> Medical Rd, Jamalpur
            </p>
          </div>
        </div>

        {/* Temple Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            {t("footer_temple_title")}
          </h3>

          <ul className="space-y-2">
            <li><Link to="/history" className="hover:text-yellow-400">{t("footer_history")}</Link></li>
            <li><Link to="/puja" className="hover:text-yellow-400">{t("footer_puja")}</Link></li>
            <li><Link to="/events" className="hover:text-yellow-400">{t("footer_events")}</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-400">{t("footer_gallery")}</Link></li>
            <li><Link to="/notice" className="hover:text-yellow-400">{t("footer_notice")}</Link></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            {t("footer_get_involved_title")}
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link to="/volunteer" className="hover:text-yellow-400">{t("footer_volunteer")}</Link></li>
            <li><Link to="/donation" className="hover:text-yellow-400">{t("footer_donation")}</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400">{t("footer_blog")}</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">{t("footer_contact")}</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div className="col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">
            {t("footer_location_title")}
          </h3>

          <div className="rounded-lg overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.1118780753955!2d89.94966128738012!3d24.92327856258347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd7f6c3dfab4c3%3A0xb69912834310fba9!2sDoyamoyee%20Temple!5e1!3m2!1sbn!2sbd!4v1772283605228!5m2!1sbn!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              title="Doyamoyee Temple Location"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">

          <p>
            © {new Date().getFullYear()} {t("site_name")}. {t("footer_rights")}
          </p>

          <p className="flex items-center gap-1">
            {t("footer_developed")}
            <span className="text-red-500 animate-pulse">❤️</span>
            {t("footer_by")}{" "}
            <a
              href="https://devsujoydas.vercel.app"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-yellow-400 font-semibold hover:underline"
            >
              Sujoy Das
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;