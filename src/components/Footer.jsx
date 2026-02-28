import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-yellow-100 py-6 mt-20 text-center">
      <p>{t("footer_text")}</p>
    </footer>
  );
};

export default Footer;