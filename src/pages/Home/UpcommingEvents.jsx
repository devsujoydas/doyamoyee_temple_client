import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";

const UpcommingEvents = () => {
  const [upcommingEvents, setUpcommingEvents] = useState([]);

  useEffect(() => {
    const today = new Date();

    fetch("/json/events.json")
      .then((res) => res.json())
      .then((data) => {
        const upcoming = data
          .filter((item) => new Date(item.date) >= today)
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .slice(0, 3);

        setUpcommingEvents(upcoming);
      })
      .catch(console.error);
  }, []);

  return (
    <div id="puja" className="py-10 md:py-20 container mx-auto px-4">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-display font-bold text-foreground">
          Upcoming Events
        </h2>

        <Link
          to="/puja"
          className="text-primary font-medium flex items-center gap-1 hover:underline"
        >
          View All <HiArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
        <AnimatePresence className={""}>
          {upcommingEvents.map((item) => (
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
                className="w-full xl:h-96 object-cover transition-transform duration-300 group-hover:scale-105 group-active::scale-105 "
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0  group-active:translate-y-0 transition-transform duration-300 z-10">
                <div className="flex items-center gap-2 text-white text-sm mb-2">
                  <HiCalendar /> {item.date}
                </div>

                <h5 className="text-xl md:text-2xl font-semibold text-white">
                  {item.title}
                </h5>

                <p className="text-sm text-white line-clamp-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UpcommingEvents;