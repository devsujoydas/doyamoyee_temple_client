import React from 'react'
import { motion } from "framer-motion";


const PageHeading = ({ title, desc, shortdesc }) => {
    return (
        <div>
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 sm:mb-16 md:mb-20"
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#7a0c0c] font-family-hindSiligurileading-snug">
                    {title}
                </h1>

                <p className="text-sm sm:text-base md:text-lg mt-3 text-gray-700">
                    {desc}
                </p>

                {shortdesc &&
                    <p className="text-sm sm:text-base text-gray-600 mt-1">
                        {shortdesc}
                    </p>
                }
                <div className="flex items-center justify-center mt-3 sm:mt-6">
                    <div className="h-0.5 w-12 sm:w-20 bg-linear-to-r from-transparent via-yellow-600 to-transparent"></div>
                    <div className="mx-3 text-yellow-700 text-base sm:text-xl">🔱</div>
                    <div className="h-0.5 w-12 sm:w-20 bg-linear-to-r from-transparent via-yellow-600 to-transparent"></div>
                </div>
            </motion.div>

        </div>
    )
}

export default PageHeading