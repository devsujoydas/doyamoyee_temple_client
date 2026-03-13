import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCalendar } from "react-icons/hi";
import PageHeading from "../../shared/PageHeading";


const filters = ["All", "Upcoming", "Past Events"];

const PujaPage = () => {
  const [events, setEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    fetch("/json/events.json")
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);


  const formatDateBN = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const today = new Date();

  const filteredItems =
    activeFilter === "All"
      ? events
      : activeFilter === "Upcoming"
        ? events.filter((item) => new Date(item.date) >= today)
        : events.filter((item) => new Date(item.date) < today);



  return (
    <div id="puja" className="py-10 md:py-20 container mx-auto px-4">
      {/* Section Header */}


      <PageHeading
        title={"দয়াময়ী মন্দিরের পূজা ও ধর্মীয় উৎসবসমূহ"}
        desc={"শ্রী শ্রী দয়াময়ী মন্দিরে সারা বছর জুড়ে অনুষ্ঠিত বিভিন্ন পূজা, ধর্মীয় অনুষ্ঠান ও উৎসবের তথ্য এখানে প্রদান করা হয়েছে।"}
        shortdesc={"ভক্তরা এখানে আসন্ন পূজা, উৎসবের তারিখ এবং বিস্তারিত তথ্য সহজেই জানতে পারবেন।"}
      />


      <div className="flex flex-col md:flex-row justify-center items-center mb-8 md:mb-12">

        {/* Filter Buttons */}
        <div className="flex gap-2 mt-4 md:mt-0">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`md:px-4 px-2 md:py-2 py-1 border-b-2   transition-all  font-semibold cursor-pointer ${activeFilter === filter
                ? "border-[#DB4242]  text-[#DB4242]"
                : "border-b-transparent hover:text-[#DB4242]"
                }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 md:h-80 object-cover transition-transform duration-300 group-active:scale-105 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40  transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 duration-300 z-10">
                <div className="flex items-center gap-2 text-white text-sm text-primary mb-2">
                  <HiCalendar /> {formatDateBN(item.date)}
                </div>
                <h5 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h5>
                <p className="text-sm text-white line-clamp-3">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PujaPage;