import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import placeholder from "/placeholder.png";


const NoticeCard = ({ notice }) => {
    const formatBanglaDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("bn-BD", options);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            layout
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
        >
            {/* Image */}
            <div className="relative overflow-hidden">
                <Link to={`/notices/${notice.id}`}>
                    <img
                        src={notice.image || placeholder}
                        alt={notice.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    {notice.important && (
                        <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                            Important
                        </span>
                    )}
                </Link>
            </div>

            {/* Content */}
            <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">
                    {formatBanglaDate(notice.date)}
                </p>

                <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>

                <p className="text-gray-600 text-sm line-clamp-3">
                    {notice.shortDescription}
                </p>

                <Link
                    to={`/notices/${notice.id}`}
                    className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
                >
                    Read More →
                </Link>
            </div>
        </motion.div>
    );
};

export default NoticeCard;