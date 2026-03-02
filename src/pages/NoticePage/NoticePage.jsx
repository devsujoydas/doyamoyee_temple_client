import { useState, useEffect, useMemo } from "react";
import NoticeCard from "./NoticeCard";
import PageHeading from "../../components/PageHeading";

const NoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/notice.json")
      .then((res) => res.json())
      .then(setNotices)
      .catch(console.error);
  }, []);

  const today = new Date();


  const activeNotices = useMemo(() => {
    return notices.filter((n) => {
      if (n.status !== "active") return false;

      if (n.expiryDate) {
        return new Date(n.expiryDate) >= today;
      }

      if (n.eventDate) {
        return new Date(n.eventDate) >= today;
      }

      return true;
    });
  }, [notices]);

  const importantNotices = useMemo(
    () => activeNotices.filter((n) => n.isImportant),
    [activeNotices]
  );

  const regularNotices = useMemo(
    () => activeNotices.filter((n) => !n.isImportant),
    [activeNotices]
  );


  const filteredRegular = useMemo(() => {
    if (filter === "all") return regularNotices;
    return regularNotices.filter((n) => n.category === filter);
  }, [filter, regularNotices]);

  const noticeTypes = ["all", "event", "religious", "meeting", "announcement"];

  return (

    <div className="bg-linear-to-b from-[#fffaf3] via-[#f7e6d3] to-[#f1dcc6]">
      <div className="max-w-7xl mx-auto px-4 py-16 ">

        {/* Heading */}
        <PageHeading
          title={"শ্রী শ্রী দয়াময়ী মন্দিরের নোটিশ"}
          desc={"মন্দিরের সকল গুরুত্বপূর্ণ ঘোষণা ও অনুষ্ঠান"}
        />


        {importantNotices.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-red-600">
              গুরুত্বপূর্ণ নোটিশ
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {importantNotices.map((notice) => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
            </div>
          </div>
        )}


        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {noticeTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full shadow-lg capitalize transition-all duration-300 cursor-pointer
              ${filter === type
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-indigo-100"
                }`}
            >
              {type}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-96">
          {filteredRegular.length > 0 ? (
            filteredRegular.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10 col-span-full">
              বর্তমানে কোনো নোটিশ নেই।
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticePage;