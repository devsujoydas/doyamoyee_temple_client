import React from "react";
import { motion } from "framer-motion";
import PageHeading from "../../components/PageHeading";

const AdvisorsPage = () => {

    const advisors =  [
            { "id": 1, "name": "শ্রী গোপাল চন্দ্র সাহা", "address": "বোষপাড়া" },
            { "id": 2, "name": "শ্রী হেমেন্দ্র চন্দ্র সিংহ", "address": "দয়াময়ীপাড়া" },
            { "id": 3, "name": "শ্রী সলিল কুমার কাহালী", "address": "আমলাপাড়া" },
            { "id": 4, "name": "শ্রী উৎপল কান্তি ধর", "address": "বসাকপাড়া" },
            { "id": 5, "name": "এড. নির্মল কান্তি ভদ্র", "address": "বসাকপাড়া" },
            { "id": 6, "name": "শ্রী জয়ন্ত কুমার দেব", "address": "সিংহজানী রোড" },
            { "id": 7, "name": "শ্রী সুকুমার চন্দ্র দেব", "address": "মুকুন্দ বাড়ি" },
            { "id": 8, "name": "শ্রী সত্যেন্দ্র চন্দ্র পাল", "address": "বোষপাড়া" },
            { "id": 9, "name": "শ্রী সুরঞ্জন রায়", "address": "বোষপাড়া" },
            { "id": 10, "name": "শ্রী সুব্রত চন্দ্র সাহা", "address": "বসাকপাড়া" },
            { "id": 11, "name": "শ্রী নারায়ণ পাল রানা", "address": "দক্ষিণ কাচারীপাড়া" },
            { "id": 12, "name": "শ্রী জীতেন্দ্র চন্দ্র ধর", "address": "নাসিমা" },
            { "id": 13, "name": "বীর মুক্তিযোদ্ধা সঞ্জিত দাস", "address": "আমলাপাড়া" },
            { "id": 14, "name": "শ্রী কনিপদ হালদার", "address": "বোষপাড়া" },
            { "id": 15, "name": "শ্রী নারায়ণ চন্দ্র দেব", "address": "বোষপাড়া" }
        ]
 

    return (
        <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">

            {/* Glow Background */}
            <div className="absolute top-10 left-5 w-28 sm:w-40 h-28 sm:h-40 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-5 w-32 sm:w-52 h-32 sm:h-52 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}
                <PageHeading
                    title={"১৪৩০-১৪৩১ সালের সম্মানিত উপদেষ্টাবৃন্দ"}
                    desc={"শ্রী শ্রী দয়াময়ী মন্দির পরিচালনা পরিষদ"}
                    shortdesc={`জামালপুর`}
                />
              
                {/* Advisors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">

                    {advisors.map((advisor, index) => (
                        <motion.div
                            key={advisor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.04 }}
                            className="bg-white/80 backdrop-blur border border-yellow-500/20 rounded-xl p-5 sm:p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 font-family-hindSiliguri leading-snug">
                                {advisor.name}
                            </h3>

                            <p className="mt-2 text-xs sm:text-sm text-red-700 font-medium">
                                📍 {advisor.address}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default AdvisorsPage;