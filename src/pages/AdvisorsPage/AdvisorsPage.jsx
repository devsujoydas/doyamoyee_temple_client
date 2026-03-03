import React from "react";
import { motion } from "framer-motion";
import PageHeading from "../../components/PageHeading";

const AdvisorsPage = () => {

    const advisors = [
        { "id": 1, "name": "শ্রী গোপাল চন্দ্র সাহা", "address": "বোষপাড়া" },
        { "id": 2, "name": "শ্রী হেমেন্দ্র চন্দ্র সিংহ", "address": "দয়াময়ীপাড়া" },
        { "id": 3, "name": "শ্রী সলিল কুমার কাহালী", "address": "আমলাপাড়া" },
        { "id": 4, "name": "শ্রী উৎপল কান্তি ধর", "address": "বসাকপাড়া" },
        { "id": 5, "name": "এড. নির্মল কান্তি ভদ্র", "address": "বসাকপাড়া" },
        { "id": 6, "name": "শ্রী জয়ন্ত কুমার দেব", "address": "সিংহজানী রোড" },
        { "id": 7, "name": "শ্রী সুকুমার চন্দ্র দেব", "address": "মুকুন্দ বাড়ি" },
        { "id": 8, "name": "শ্রী সত্যেন্দ্র চন্দ্র পাল", "address": "বোষপাড়া" },
        { "id": 9, "name": "শ্রী সুরঞ্জন রায়", "address": "বোষপাড়া" },
        { "id": 10, "name": "শ্রী সুভাষ চন্দ্র সাহা", "address": "বসাকপাড়া" },
        { "id": 11, "name": "শ্রী নারায়ণ পাল রানা", "address": "দক্ষিণ কাচারীপাড়া" },
        { "id": 12, "name": "শ্রী জীতেন্দ্র চন্দ্র ধর", "address": "নন্দিনা" },
        { "id": 13, "name": "বীর মুক্তিযোদ্ধা সঞ্জিত দাস", "address": "আমলাপাড়া" },
        { "id": 14, "name": "শ্রী কালীপদ হালদার", "address": "বোষপাড়া" },
        { "id": 15, "name": "শ্রী নারায়ণ চন্দ্র দেব", "address": "বোষপাড়া" }
    ]


    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 ">

            <div className="max-w-7xl mx-auto">

                <PageHeading
                    title={"১৪৩০-১৪৩১ সালের সম্মানিত উপদেষ্টাবৃন্দ"}
                    desc={"শ্রী শ্রী দয়াময়ী মন্দির পরিচালনা পরিষদ"}
                    shortdesc={`জামালপুর`}
                />

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {advisors.map((advisor, index) => (
                        <motion.div
                            key={advisor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.01 }}
                            className="group bg-white border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >

                            {/* Left Accent Line */}
                            <div className="absolute"></div>

                            <div className="border-l-4 border-amber-600 pl-4 space-y-2">

                                <h3 className="text-lg font-semibold text-gray-900 font-family-hindSiliguri leading-snug">
                                    {advisor.name}
                                </h3>

                                <p className="text-sm text-gray-600">
                                    {advisor.address}
                                </p>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default AdvisorsPage;