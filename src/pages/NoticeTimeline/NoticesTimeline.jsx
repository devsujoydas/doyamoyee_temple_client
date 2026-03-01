import React, { useState, useEffect, useMemo } from "react";
import NoticsTimelineCard from "./NoticsTimelineCard";

const NoticesTimeline = () => {
  // ---------------- STATE ----------------
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all | upcoming | past

  // ---------------- FETCH ----------------
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("/notice.json");
        const data = await res.json();
        setNotices(data);
        console.log(data)
      } catch (err) {
        console.error("Failed to load notices:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  // ---------------- FILTER ----------------
  const filteredNotices = useMemo(() => {
    if (!notices.length) return [];

    const now = new Date();

    let filtered = [...notices];

    if (filter === "upcoming") {
      filtered = filtered.filter(
        (n) => n.eventDate && new Date(n.eventDate) >= now
      );
    }

    if (filter === "past") {
      filtered = filtered.filter(
        (n) => n.eventDate && new Date(n.eventDate) < now
      );
    }

    return filtered;
  }, [notices, filter]);

  // ---------------- SORT ----------------
  const sortedNotices = useMemo(() => {
    if (!filteredNotices.length) return [];

    return [...filteredNotices].sort((a, b) => {
      // pinned first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;

      // then by eventDate or publishDate
      const dateA = new Date(a.eventDate || a.publishDate);
      const dateB = new Date(b.eventDate || b.publishDate);

      return dateB - dateA; // latest first
    });
  }, [filteredNotices]);

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading notices...
      </div>
    );
  }

  // ---------------- EMPTY ----------------
  if (!sortedNotices.length) {
    return (
      <div className="text-center min-h-100 flex justify-center items-center text-gray-500">
        কোন নোটিশ পাওয়া যায়নি।
      </div>
    );
  }

  // ---------------- UI ----------------
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Filter Buttons */}
      <div className="flex gap-3 mb-10 justify-center">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full ${
            filter === "all"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          }`}
        >
          সব
        </button>

        <button
          onClick={() => setFilter("upcoming")}
          className={`px-4 py-2 rounded-full ${
            filter === "upcoming"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          }`}
        >
          আসন্ন
        </button>

        <button
          onClick={() => setFilter("past")}
          className={`px-4 py-2 rounded-full ${
            filter === "past"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          }`}
        >
          পূর্ববর্তী
        </button>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-200 ml-3">
        {sortedNotices.map((notice) => (
          <NoticsTimelineCard key={notice.id} notice={notice} />
        ))}
      </div>
    </div>
  );
};

export default NoticesTimeline;