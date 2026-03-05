import React from 'react';
import omSymbolsvg from "/om-symbol-black.jpg";
import { useNavigate } from 'react-router-dom';

import { motion } from "framer-motion";



const SharedPageHeading = ({ title, path, path2 }) => {
    const navigate = useNavigate();

    return (
        <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}  
        
        className="relative h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96 flex justify-center items-center">
            
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: `url(https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/subheader.jpg)`
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Title */}
            <h1 className="relative text-white font-bold
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                text-center px-4">
                {title}
            </h1>

            {/* Breadcrumb */}
            <div className="absolute -bottom-8 bg-white p-3 sm:p-4 md:p-5 rounded-full font-bold
                flex items-center gap-2 text-[#130d01] shadow-md
                text-sm sm:text-base md:text-lg lg:text-xl">

                {/* Home */}
                <button
                    className="cursor-pointer hover:text-blue-600 transition"
                    onClick={() => navigate('/')}
                >
                    হোম
                </button>

                {/* Path1 */}
                {path && (
                    <>
                        <img className="w-5 h-5" src={omSymbolsvg} alt="Om" />
                        <span>{path}</span>
                    </>
                )}

                {/* Path2 */}
                {path2 && (
                    <>
                        <img className="w-5 h-5" src={omSymbolsvg} alt="Om" />
                        <span>{path2}</span>
                    </>
                )}

              

            </div>
        </motion.div>
    );
};

export default SharedPageHeading;