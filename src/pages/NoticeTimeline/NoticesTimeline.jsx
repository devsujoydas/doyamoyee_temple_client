import { useEffect, useState } from "react";
import placeholder from "/placeholder.png";
import NoticsTimelineCard from "./NoticsTimelineCard";
import { motion } from "framer-motion";

// Categories
const categories = ["all", "mondir", "durgapuja", "kalipuja", "lokkhipuja"];

const NoticesTimeline = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    fetch("/notice.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setNotices(sorted);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading)
    return <p className="text-center py-20 text-gray-500">Loading...</p>;

  // Filter notices
  const filteredNotices = notices.filter((n) => {
    const typeMatch = filterType === "all" ? true : n.type === filterType;
    const categoryMatch =
      filterCategory === "all" ? true : n.category === filterCategory;
    return typeMatch && categoryMatch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Temple Notices Timeline
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {/* Type Filter */}
        <div className="relative w-52">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm appearance-none focus:outline-none  cursor-pointer"
          >
            <option value="all">All Types</option>
            <option value="event">Event</option>
            <option value="registration">Registration</option>
            <option value="announcement">Announcement</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Category Filter */}
        <div className="relative w-52">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm appearance-none focus:outline-none cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="mondir">Mondir</option>
            <option value="durgapuja">Durga Puja</option>
            <option value="kalipuja">Kali Puja</option>
            <option value="lokkhipuja">Lokkhi Puja</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-200 ml-5 pl-6 min-h-96">
        {filteredNotices.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No notices found.
          </p>
        )}

        {filteredNotices.map((notice, idx) => <NoticsTimelineCard notice={notice} key={idx} />)}
      </div>
    </div>
  );
};

export default NoticesTimeline;