import React from 'react'
import { FaCalendarAlt, FaInfoCircle, FaUserCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";




const NoticsTimelineCard = ({ notice }) => {
    const typeIcons = {
        event: FaCalendarAlt,
        registration: FaUserCheck,
        announcement: FaInfoCircle,
    };
    const typeColors = {
        event: "bg-red-600",
        registration: "bg-indigo-600",
        announcement: "bg-green-500",
    };

    const Icon = typeIcons[notice.type];
    return (
        <motion.div
            key={notice.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 relative" // <-- important!
        >
            {/* Dot + Icon */}
            <div
                className={`absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center ${typeColors[notice.type] || "bg-gray-400"
                    } shadow-lg`}
            >
                <Icon className="text-white" />
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <Link
                    to={`/notices/${notice.id}`}
                    className="block hover:underline"
                >
                    <h3 className="text-2xl font-bold mb-2">{notice.title}</h3>
                </Link>
                <p className="text-gray-500 mb-4">
                    {new Date(notice.date).toDateString()}
                </p>

                {notice.shortDescription && (
                    <p className="text-gray-700 mb-4">{notice.shortDescription}</p>
                )}

                {notice.details && (
                    <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                        {notice.type === "event" && (
                            <>
                                {notice.details.dateBangla && (
                                    <div>
                                        <span className="font-semibold">Bangla Date:</span>{" "}
                                        {notice.details.dateBangla}
                                    </div>
                                )}
                                {notice.details.time && (
                                    <div>
                                        <span className="font-semibold">Time:</span>{" "}
                                        {notice.details.time}
                                    </div>
                                )}
                                {notice.details.registrationFee && (
                                    <div>
                                        <span className="font-semibold">Registration Fee:</span>{" "}
                                        {notice.details.registrationFee}
                                    </div>
                                )}
                                {notice.details.venue && (
                                    <div>
                                        <span className="font-semibold">Venue:</span>{" "}
                                        {notice.details.venue}
                                    </div>
                                )}
                                {notice.details.organizedBy && (
                                    <div className="md:col-span-2">
                                        <span className="font-semibold">Organized By:</span>{" "}
                                        {notice.details.organizedBy}
                                    </div>
                                )}
                                {notice.details.contact &&
                                    notice.details.contact.map((c, idx) => (
                                        <div key={idx}>
                                            <span className="font-semibold">{c.type}:</span>{" "}
                                            {c.number}
                                        </div>
                                    ))}
                            </>
                        )}

                        {notice.type === "registration" && (
                            <>
                                {notice.details.deadline && (
                                    <div>
                                        <span className="font-semibold">Deadline:</span>{" "}
                                        {notice.details.deadline}
                                    </div>
                                )}
                                {notice.details.contact &&
                                    notice.details.contact.map((c, idx) => (
                                        <div key={idx}>
                                            <span className="font-semibold">{c.type}:</span>{" "}
                                            {c.number}
                                        </div>
                                    ))}
                                {notice.details.attachment && (
                                    <div className="md:col-span-2">
                                        <span className="font-semibold">Attachment:</span>{" "}
                                        <a
                                            href={notice.details.attachment}
                                            target="_blank"
                                            className="text-indigo-600 hover:underline"
                                        >
                                            Download
                                        </a>
                                    </div>
                                )}
                            </>
                        )}

                        {notice.type === "announcement" && (
                            <div className="md:col-span-2">
                                <p>{notice.shortDescription || "No additional details."}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default NoticsTimelineCard