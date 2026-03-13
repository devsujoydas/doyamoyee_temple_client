import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHeading from "../../shared/PageHeading";

const LifetimeMembersPage = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch("/json/members.json")
            .then((res) => res.json())
            .then(setMembers)
            .catch(console.error);
    }, []);



    return (
        <section className="py-24 px-4 sm:px-6 ">

            <div className="max-w-7xl mx-auto">

                <PageHeading
                    title={"শ্রী শ্রী দয়াময়ী মন্দির পরিচালনা পরিষদ"}
                    desc={"আজীবন সদস্যদের তালিকা"}
                    shortdesc={` মোট সদস্য: ${members.length} জন`}
                />


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {members.map((member, index) => (
                        <motion.div
                            key={member.sl_no}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.001 }}
                            viewport={{ once: true }}
                            className="relative bg-white/80 backdrop-blur border border-yellow-500/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-5 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-500 to-red-700 text-white px-2 sm:px-4 py-1 rounded-full text-xs">
                                আজীবন সদস্য

                            </div>

                            <h3 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800 font-family-hindSiliguri">
                                {member.name}
                            </h3>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default LifetimeMembersPage;