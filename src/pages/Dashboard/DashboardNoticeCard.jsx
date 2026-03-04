import { motion } from "framer-motion";
import { formatBanglaDate } from "../../helpers/date";
import placeholder from "/placeholder.png";
import LazyImage from "../../components/LazyImage";

const DashboardNoticeCard = ({ notice, onEdit, onDelete }) => {
  const {
    id,
    title,
    shortDescription,
    thumbnail,
    publishDate,
    eventDate,
    isImportant,
    isPinned,
    category,
  } = notice;

  const displayDate = eventDate || publishDate;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-b from-white/90 to-amber-50/80 rounded-2xl shadow-md hover:shadow-2xl border border-transparent hover:border-amber-300 transition-all overflow-hidden group relative"
    >
      {/* IMAGE */}
      <div className="relative w-full h-44 md:h-40">
        <LazyImage
          src={thumbnail || placeholder}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          placeholder={placeholder}
        />

        {/* Important Badge */}
        {isImportant && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow-md">
            গুরুত্বপূর্ণ
          </span>
        )}

        {/* Pinned Badge */}
        {isPinned && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
            📌 পিন করা
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col justify-between h-44">
        <div>
          <p className="text-xs text-gray-400 italic mb-1">
            {displayDate && formatBanglaDate(displayDate)}
          </p>

          <h3 className="text-md font-semibold mb-1 line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3">{shortDescription}</p>

          {category && (
            <span className="inline-block mt-2 text-xs font-medium bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 text-indigo-700 px-2 py-1 rounded-full capitalize shadow-sm">
              {category}
            </span>
          )}
        </div>

        {/* Edit/Delete buttons */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(notice)}
            className="text-blue-600 text-sm hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="text-red-600 text-sm hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardNoticeCard;