 
import { useTranslation } from "react-i18next";

const Notice = () => {
  const { t } = useTranslation();

  const notices = [
    { title: "বার্ষিক অষ্টমী মেলা", date: "2026-03-10" },
    { title: "দুর্গা পূজা সূচি", date: "2026-10-15" }
  ];

  return (
    <section id="notice" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("notice_title")}</h2>
        <ul className="space-y-4">
          {notices.map((n, i) => (
            <li key={i} className="p-4 border rounded hover:bg-gray-50 transition">
              <h3 className="font-semibold">{n.title}</h3>
              <p>{n.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Notice;