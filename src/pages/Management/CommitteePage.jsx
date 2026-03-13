import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHeading from "../../shared/PageHeading";

const CommitteePage = () => {
    const [committee, setCommittee] = useState([]);

    useEffect(() => {
        fetch("/json/committee.json")
            .then((res) => res.json())
            .then(setCommittee)
            .catch(console.error);
    }, []);

    const president = committee.find(m => m.designation === "সভাপতি");

    const vicePresidents = committee.filter(
        m => m.designation === "সহ-সভাপতি"
    );

    const generalSecretary = committee.find(
        m => m.designation === "সাধারণ সম্পাদক"
    );

    const secretaries = committee.filter(
        m =>
            m.designation.includes("সম্পাদক") &&
            m.designation !== "সাধারণ সম্পাদক"
    );

    const members = committee.filter(
        m => m.designation === "সদস্য"
    );

    return (
        <section className="relative">
            <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-52 h-52 bg-red-600 blur-3xl opacity-20 rounded-full"></div>
            <div className="custom-container">
                <PageHeading section="committee" />


                <div className="grid md:grid-cols-2 gap-10 my-10">

                    {/* LEFT SIDE */}
                    <div className="space-y-8 shadow-md h-fit p-3 rounded-xl">

                        {/* President */}
                        {president && (
                            <motion.div
                                initial={{ opacity: 0, scale: .9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: .5 }}
                                viewport={{ once: true }}
                                className="relative bg-linear-to-r from-yellow-500 to-red-700 text-white p-6 rounded-2xl text-center shadow-2xl"
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-500 to-red-700 px-4 py-1 rounded-full text-xs shadow">
                                    সভাপতি
                                </div>

                                <h3 className="mt-3 text-xl md:text-2xl font-bold ">
                                    {president.name}
                                </h3>
                            </motion.div>
                        )}

                        {/* Vice Presidents */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {vicePresidents.map((m, i) => (
                                <motion.div
                                    key={m.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * .05 }}
                                    viewport={{ once: true }}
                                    className="relative bg-white/80 backdrop-blur border border-yellow-500/30 p-6 rounded-xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
                                >

                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-500 to-red-700 text-white px-3 py-1 rounded-full text-xs">
                                        {m.designation}
                                    </div>

                                    <h3 className="mt-2 text-lg font-semibold text-gray-800 ">
                                        {m.name}
                                    </h3>

                                </motion.div>
                            ))}
                        </div>
                    </div>



                    {/* RIGHT SIDE */}
                    <div className="space-y-8 shadow-md h-fit p-3 rounded-xl">

                        {/* General Secretary */}
                        {generalSecretary && (
                            <motion.div
                                initial={{ opacity: 0, scale: .9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: .5 }}
                                viewport={{ once: true }}
                                className="relative bg-linear-to-r from-yellow-500 to-red-700 text-white p-6 rounded-2xl text-center shadow-2xl"
                            >

                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-500 to-red-700 px-4 py-1 rounded-full text-xs shadow">
                                    সাধারণ সম্পাদক
                                </div>

                                <h3 className="mt-3 text-xl md:text-2xl font-bold ">
                                    {generalSecretary.name}
                                </h3>

                            </motion.div>
                        )}

                        {/* Other Secretaries */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {secretaries.map((m, i) => (
                                <motion.div
                                    key={m.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * .05 }}
                                    viewport={{ once: true }}
                                    className="relative bg-white/80 backdrop-blur border border-yellow-500/30 p-6 rounded-xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
                                >

                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-500 to-red-700 text-white px-3 py-1 rounded-full text-xs">
                                        {m.designation}
                                    </div>

                                    <h3 className="mt-2 text-lg font-semibold text-gray-800 ">
                                        {m.name}
                                    </h3>

                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>


                {/* ================= MEMBERS ================= */}

                <div className="mb-10">

                    <h2 className="text-center text-xl md:text-2xl font-bold mb-10 text-gray-800">
                        সদস্যবৃন্দ
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {members.map((m, i) => (
                            <motion.div
                                key={m.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * .02 }}
                                viewport={{ once: true }}
                                className="relative bg-white/80 backdrop-blur border border-yellow-500/30 p-5 rounded-xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
                            >

                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-yellow-500 to-red-700 text-white px-3 py-1 rounded-full text-xs">
                                    {m.designation}
                                </div>

                                <h3 className="mt-2 text-base font-semibold text-gray-800 ">
                                    {m.name}
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