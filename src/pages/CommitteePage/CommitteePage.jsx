import React from "react";
import { motion } from "framer-motion"; 

const CommitteePage = () => {
    const committee = {
        "title": "১৪৩০-১৪৩১ বঙ্গাব্দ কার্যকরী পরিষদ",
        "organization": "শ্রী শ্রী দয়াময়ী মন্দির পরিচালনা পরিষদ",
        "year": "১৪৩০-১৪৩১",
        "committee": [
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
    }


    return (
        <section className="min-h-screen bg-[#fdf8f2] py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-red-900 font-family-hindSiliguri">
                        {committee.title}
                    </h1>
                    <p className="text-lg mt-4 text-gray-700">
                        {committee.organization}
                    </p>
                </motion.div>

                {/* Committee List */}
                <div className="grid md:grid-cols-4 gap-8">
                    {committee.committee.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.01 }}
                            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-red-800 hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 font-family-hindSiliguri">
                                {member.name}
                            </h3>
                            <p className="text-red-800 mt-2 font-medium">
                                {member.designation}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommitteePage;