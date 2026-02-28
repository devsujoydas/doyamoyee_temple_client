import React from "react";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();

  // Dummy events
  const upcomingEvents = [
    { name: "অষ্টমী মেলা", date: "2026-03-10" },
    { name: "দুর্গা পূজা", date: "2026-10-15" }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("events_title")}</h2>
        <p className="mb-10">{t("events_text")}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((ev, i) => (
            <div key={i} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{ev.name}</h3>
              <p className="mt-2">{ev.date}</p>
              {/* Countdown logic later */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;