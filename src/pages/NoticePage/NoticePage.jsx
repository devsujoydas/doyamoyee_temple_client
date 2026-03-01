import { useState, useEffect } from "react";
import NoticeCard from "./NoticeCard";
import placeholder from "/placeholder.png";

const NoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/notice.json")
      .then((res) => res.json())
      .then((data) => setNotices(data))
      .catch((err) => console.error(err));
  }, []);

  const today = new Date();
  const activeNotices = notices.filter((n) => new Date(n.date) >= today);
  const importantNotices = activeNotices.filter((n) => n.important);
  const regularNotices = activeNotices.filter((n) => !n.important);

  const filteredRegular =
    filter === "all"
      ? regularNotices
      : regularNotices.filter((n) => n.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">Temple Notices</h2>
        <p className="text-gray-600 mt-2">Stay updated with latest announcements</p>
      </div>

      {/* Important Notices */}
      {importantNotices.length > 0 && (
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-red-600">
            Important Notices
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {importantNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} placeholder={placeholder} />
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["all", "event", "announcement", "registration"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-5 py-2 rounded-full border capitalize transition-all duration-300
              ${
                filter === type
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-indigo-100"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Regular Notices */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-96">
        {filteredRegular.length > 0 ? (
          filteredRegular.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} placeholder={placeholder} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No notices available.</p>
        )}
      </div>
    </div>
  );
};

export default NoticePage;