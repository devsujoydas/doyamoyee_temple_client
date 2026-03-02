import React from "react";
import { motion } from "framer-motion";
import PageHeading from "../../components/PageHeading";

const CommitteePage = () => {
    const committee = [
            { "id": 1, "name": "শ্রী সিধার্থ শংকর রায়", "designation": "সভাপতি" },
            { "id": 2, "name": "শ্রী অজয় কুমার পাল", "designation": "সহ-সভাপতি" },
            { "id": 3, "name": "শ্রী শুভাশিস তালুকদার", "designation": "সহ-সভাপতি" },
            { "id": 4, "name": "শ্রী বিধান চন্দ্র সাহা", "designation": "সহ-সভাপতি" },
            { "id": 5, "name": "শ্রী নারায়ণ চন্দ্র ভদ্র", "designation": "সহ-সভাপতি" },
            { "id": 6, "name": "শ্রী পরিতোষ কুমার পণ্ডিত", "designation": "সহ-সভাপতি" },
            { "id": 7, "name": "শ্রী রঞ্জন কুমার সিংহ", "designation": "সাধারণ সম্পাদক" },
            { "id": 8, "name": "শ্রী রাজন সাহা রাজু", "designation": "সহ-সাধারণ সম্পাদক" },
            { "id": 9, "name": "শ্রী সুজন কুমার দে", "designation": "সহ-সাধারণ সম্পাদক" },
            { "id": 10, "name": "শ্রী রণজিৎ বিশ্বাস হোয়েল", "designation": "কোষাধ্যক্ষ" },
            { "id": 11, "name": "শ্রী প্রকাশ চন্দ্র সাহা", "designation": "দপ্তর সম্পাদক" },
            { "id": 12, "name": "শ্রী দীপক কুমার সাহা", "designation": "প্রচার সম্পাদক" },

            { "id": 13, "name": "শ্রী লক্ষ্মীকান্ত পণ্ডিত", "designation": "সদস্য" },
            { "id": 14, "name": "শ্রী নারায়ণ চন্দ্র বনিক", "designation": "সদস্য" },
            { "id": 15, "name": "শ্রী প্রদীপ কুমার সোম", "designation": "সদস্য" },
            { "id": 16, "name": "শ্রী বিজন কুমার চন্দ", "designation": "সদস্য" },
            { "id": 17, "name": "শ্রী দেবব্রত নাগ মন্ডল", "designation": "সদস্য" },
            { "id": 18, "name": "শ্রী সুবীর বসাক", "designation": "সদস্য" },
            { "id": 19, "name": "শ্রী অমরেন্দ্র কুমার দাস", "designation": "সদস্য" },
            { "id": 20, "name": "শ্রী সুরেন্দ্র চন্দ্র দাস", "designation": "সদস্য" },
            { "id": 21, "name": "শ্রী অনিল চন্দ্র গৌর", "designation": "সদস্য" },
            { "id": 22, "name": "শ্রী তাপস কুমার বনিক", "designation": "সদস্য" },
            { "id": 23, "name": "শ্রী সুশান্ত তালুকদার রবি", "designation": "সদস্য" },
            { "id": 24, "name": "শ্রী পার্থ প্রতিম দে", "designation": "সদস্য" },
            { "id": 25, "name": "শ্রী বিমল কুমার আচার্য", "designation": "সদস্য" },
            { "id": 26, "name": "শ্রী রণজিত কুমার পোদ্দার", "designation": "সদস্য" },
            { "id": 27, "name": "শ্রী সুবল চন্দ্র দাস", "designation": "সদস্য" },
            { "id": 28, "name": "শ্রী প্রদীপ কুমার বসু কাজল", "designation": "সদস্য" },
            { "id": 29, "name": "শ্রী জীবন কুমার সাহা", "designation": "সদস্য" },
            { "id": 30, "name": "শ্রী দিলীপ কুমার দে", "designation": "সদস্য" },
            { "id": 31, "name": "শ্রী সাগর মুখার্জী", "designation": "সদস্য" }
        ]
    

    const president = committee.find(
        m => m.designation === "সভাপতি"
    );

    const executive = committee.filter(
        m => m.designation !== "সভাপতি" && m.designation !== "সদস্য"
    );

    const members = committee.filter(
        m => m.designation === "সদস্য"
    );

    return (
        <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">

            {/* Soft Glow Background */}
            <div className="absolute top-10 left-5 w-28 sm:w-40 h-28 sm:h-40 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-5 w-32 sm:w-52 h-32 sm:h-52 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}

                <PageHeading
                    title={"১৪৩০-১৪৩১ বঙ্গাব্দ কার্যকরী পরিষদ"}
                    desc={"শ্রী শ্রী দয়াময়ী মন্দির পরিচালনা পরিষদ"}
                />



                {/* President */}
                {president && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="mb-10 sm:mb-20 flex justify-center"
                    >
                        <div className="relative bg-linear-to-r from-yellow-500 to-red-700 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-xl">

                            <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-white text-red-800 px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                                সভাপতি
                            </div>

                            <h2 className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-family-hindSiligurileading-snug">
                                {president.name}
                            </h2>
                        </div>
                    </motion.div>
                )}

                {/* Executive */}
                <div className="mb-16 sm:mb-20">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-[#7a0c0c] mb-8 sm:mb-10 md:mb-12 font-family-hindSiliguri">
                        কার্যকরী পরিষদ
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {executive.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="relative bg-white/80 backdrop-blur border border-yellow-500/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-500 to-red-700 text-white px-3 sm:px-4 py-1 rounded-full text-xs">
                                    {member.designation}
                                </div>

                                <h3 className="mt-5 text-sm sm:text-base md:text-lg font-semibold text-gray-800 font-family-hindSiliguri">
                                    {member.name}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Members */}
                <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-[#7a0c0c] mb-8 sm:mb-10 md:mb-12 font-family-hindSiliguri">
                        সদস্যবৃন্দ
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
                        {members.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.02 }}
                                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center border border-gray-200 shadow-md hover:shadow-xl hover:border-yellow-500 transition-all duration-300"
                            >
                                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 font-family-hindSiligurileading-snug">
                                    {member.name}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CommitteePage;