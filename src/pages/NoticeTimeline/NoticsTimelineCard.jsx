import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatBanglaDate } from "../../helpers/date";

const categoryColors = {
  event: "bg-red-600",
  religious: "bg-purple-600",
  meeting: "bg-indigo-600",
  announcement: "bg-green-600",
};

const NoticsTimelineCard = ({ notice }) => {
  const {
    id,
    title,
    shortDescription,
    publishDate,
    eventDate,
    eventTime,
    venue,
    contactPerson,
    contactPhone,
    category,
    isImportant,
    isPinned,
  } = notice;

  const displayDate = eventDate || publishDate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-10 relative"
    >
      {/* Timeline Dot */}
      <div
        className={`absolute -left-3 top-2 w-6 h-6 rounded-full flex items-center justify-center shadow-lg ${
          categoryColors[category] || "bg-gray-400"
        }`}
      >
        <FaCalendarAlt className="text-white text-xs" />
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {isImportant && (
            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
              গুরুত্বপূর্ণ
            </span>
          )}
          {isPinned && (
            <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
              📌 পিন করা
            </span>
          )}
          {category && (
            <span
              className={`${
                categoryColors[category] || "bg-gray-500"
              } text-white text-xs px-3 py-1 rounded-full capitalize`}
            >
              {category}
            </span>
          )}
        </div>

        {/* Title */}
        <Link
          to={`/notices/${id}`}
          className="block hover:underline"
        >
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
        </Link>

        {/* Date */}
        {displayDate && (
          <p className="text-gray-500 mb-4">
            <FaCalendarAlt className="inline mr-2 text-indigo-600" />
            {formatBanglaDate(displayDate)}
            {eventTime && ` | ${eventTime}`}
          </p>
        )}

        {/* Short Description */}
        {shortDescription && (
          <p className="text-gray-700 mb-4">{shortDescription}</p>
        )}

        {/* Extra Info */}
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">

          {venue && (
            <div>
              <FaMapMarkerAlt className="inline mr-2 text-indigo-600" />
              <span className="font-semibold">স্থান:</span> {venue}
            </div>
          )}

          {contactPerson && (
            <div>
              <FaUser className="inline mr-2 text-indigo-600" />
              <span className="font-semibold">যোগাযোগ:</span> {contactPerson}
            </div>
          )}

          {contactPhone && (
            <div>
              <FaPhone className="inline mr-2 text-indigo-600" />
              <span className="font-semibold">ফোন:</span> {contactPhone}
            </div>
          )}

        </div>

      </div>
    </motion.div>
  );
};

export default NoticsTimelineCard;