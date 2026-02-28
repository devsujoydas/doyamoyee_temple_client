import React from "react";
import { useTranslation } from "react-i18next";

const Volunteer = () => {
  const { t } = useTranslation();

  return (
    <section id="volunteer" className="py-20 bg-yellow-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("volunteer_title")}</h2>
        <p className="mb-6">{t("volunteer_text")}</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="নাম / Name" className="p-3 rounded border" />
          <input type="email" placeholder="ইমেইল / Email" className="p-3 rounded border" />
          <textarea placeholder="মন্তব্য / Message" className="p-3 rounded border"></textarea>
          <button className="bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Volunteer;