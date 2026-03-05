import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHeading from "../../components/PageHeading";

const AdvisorsPage = () => {
 const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    fetch("/json/advisors.json")
      .then((res) => res.json())
      .then(setAdvisors)
      .catch(console.error);
  }, []);  


    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 ">

            <div className="max-w-7xl mx-auto">

                <PageHeading
                    title={"১৪৩০-১৪৩১ সালের সম্মানিত উপদেষ্টাবৃন্দ"}
                    desc={"শ্রী শ্রী দয়াময়ী মন্দির পরিচালনা পরিষদ"}
                    shortdesc={`জামালপুর`}
                />

                <div className=" mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">

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