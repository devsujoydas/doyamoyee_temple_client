import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHeading from "../../components/PageHeading";

const CommitteePage = () => {
    const [committee, setCommittee] = useState([]);

    useEffect(() => {
        fetch("/json/committee.json")
            .then((res) => res.json())
            .then(setCommittee)
            .catch(console.error);
    }, []);


    const president = committee.find(
        m => m.designation === "সভাপতি"
    );

    const executive = committee.filter(
        m => m.designation !== "সভাপতি"
    );



    return (
        <section className="relative overflow-hidden py-10 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">

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
                        viewport={{ once: true }}
                        className="mb-10 sm:mb-20 flex justify-center"
                    >
                        <div className="relative bg-linear-to-r from-yellow-500 to-red-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-4 md:p-5 text-center shadow-2xl w-full max-w-full sm:max-w-md md:max-w-xl">

                            <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-500 to-red-700 px-4 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                                সভাপতি
                            </div>

                            <h2 className="md:mt-6 mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-family-hindSiligurileading-snug">
                                {president.name}
                            </h2>
                        </div>
                    </motion.div>
                )}

                {/* Executive */}
                <div className="mb-16 sm:mb-20">


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 sm:gap-8">
                        {executive.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.01 }}
                                viewport={{ once: true }}
                                className={`relative  ${member.designation == "সাধারণ সম্পাদক" ? "bg-linear-to-r from-yellow-500 to-red-700 text-white" :
                                    "bg-white/80"
                                    } backdrop-blur border border-yellow-500/30 rounded-xl sm:rounded-2xl 
                                p-5 sm:p-6 md:p-5 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
                            >
                                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-500 to-red-700  px-2 sm:px-4 py-1 rounded-full text-xs text-white
                               
                                `}>
                                    {member.designation}
                                </div>

                                <h3 className={`mt-3 text-sm sm:text-base md:text-lg font-semibold
                                     ${member.designation == "সাধারণ সম্পাদক" ? "text-white" :
                                        "text-gray-800"
                                    }
                                     font-family-hindSiliguri`}>
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