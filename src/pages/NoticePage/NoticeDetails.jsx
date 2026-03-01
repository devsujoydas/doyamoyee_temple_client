import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaInfoCircle, FaUserCheck } from "react-icons/fa";
import placeholder from "/placeholder.png";
import LightGallery from "lightgallery/react";

// CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const typeColors = {
  event: "bg-red-600",
  registration: "bg-indigo-600",
  announcement: "bg-green-500",
};

// Icon components
const typeIcons = {
  event: FaCalendarAlt,
  registration: FaUserCheck,
  announcement: FaInfoCircle,
};

const NoticeDetails = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/notice.json")
      .then((res) => res.json())
      .then((data) => {
        const n = data.find((item) => item.id === parseInt(id));
        setNotice(n);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading)
    return <p className="text-center py-20 text-gray-500">Loading...</p>;

  if (!notice)
    return (
      <p className="text-center py-20 text-gray-500">Notice not found.</p>
    );

  const Icon = typeIcons[notice.type];
  const imageSrc = notice.image || placeholder;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-12 relative"
    >
      <Link
        to="/notices"
        className="inline-block mb-8 text-indigo-600 hover:underline"
      >
        ← Back to Notices
      </Link>

      <div className="relative flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-10 hover:shadow-2xl transition-shadow duration-300">
        {/* Dot Icon */}
        <motion.div
          className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
            typeColors[notice.type] || "bg-gray-400"
          }`}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Icon className="text-white text-lg" />
        </motion.div>

        {/* Left: Image + LightGallery */}
        <div className="md:w-1/3 flex-shrink-0 rounded-2xl overflow-hidden shadow-inner cursor-pointer">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid"
          >
            <a href={imageSrc}>
              <img
                src={imageSrc}
                alt={notice.title}
                className="w-full h-72 md:h-full object-cover hover:scale-105 transition-transform rounded-2xl"
              />
            </a>
          </LightGallery>
        </div>

        {/* Right: Info */}
        <div className="md:w-2/3 flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold"
          >
            {notice.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-500"
          >
            {new Date(notice.date).toDateString()}
          </motion.p>

          {notice.shortDescription && (
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-gray-700"
            >
              {notice.shortDescription}
            </motion.p>
          )}

          {/* Details */}
          {notice.details && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mt-4">
              {/* Map each detail row */}
              {notice.type === "event" &&
                [
                  { label: "Bangla Date", value: notice.details.dateBangla },
                  { label: "Time", value: notice.details.time },
                  { label: "Registration Fee", value: notice.details.registrationFee },
                  { label: "Venue", value: notice.details.venue },
                  { label: "Organized By", value: notice.details.organizedBy, full: true },
                  ...(notice.details.contact || []).map((c) => ({
                    label: c.type,
                    value: c.number,
                  })),
                ].map(
                  ({ label, value, full }, idx) =>
                    value && (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                        className={full ? "md:col-span-2" : ""}
                      >
                        <span className="font-semibold">{label}:</span> {value}
                      </motion.div>
                    )
                )}

              {notice.type === "registration" &&
                [
                  { label: "Deadline", value: notice.details.deadline },
                  ...(notice.details.contact || []).map((c) => ({
                    label: c.type,
                    value: c.number,
                  })),
                  notice.details.attachment && {
                    label: "Attachment",
                    value: (
                      <a
                        href={notice.details.attachment}
                        target="_blank"
                        className="text-indigo-600 hover:underline"
                      >
                        Download
                      </a>
                    ),
                    full: true,
                  },
                ].map(
                  (item, idx) =>
                    item?.value && (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                        className={item.full ? "md:col-span-2" : ""}
                      >
                        <span className="font-semibold">{item.label}:</span>{" "}
                        {item.value}
                      </motion.div>
                    )
                )}

              {notice.type === "announcement" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="md:col-span-2"
                >
                  <p>{notice.shortDescription || "No additional details."}</p>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NoticeDetails;