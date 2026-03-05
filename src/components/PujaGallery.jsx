import React, { useState } from "react";
import omSymbolsvg from "/Om_symbol.svg";
import { motion, AnimatePresence } from "framer-motion";


const pujaItems = [
    { id: 1, category: "Durga Puja", img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/1.jpg", title: "Durga Puja", description: "Puja is the worship of the Lord" },
    { id: 2, category: "Raksha Bandhan", img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/2.jpg", title: "Raksha Bandhan", description: "Puja is the worship of the Lord" },
    { id: 3, category: "Janmashtmi", img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/3.jpg", title: "Janmashtmi", description: "Puja is the worship of the Lord" },
    { id: 4, category: "Mahashivratri", img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/4.jpg", title: "Mahashivratri", description: "Puja is the worship of the Lord" },
    { id: 5, category: "Holi", img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/5.jpg", title: "Holi", description: "Puja is the worship of the Lord" },
    { id: 6, category: "Diwali", img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/6.jpg", title: "Diwali", description: "Puja is the worship of the Lord" },
];

const filters = ["All", "Durga Puja", "Raksha Bandhan", "Holi"];

const PujaGallery = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    // Filter items based on active filter
    const filteredItems =
        activeFilter === "All"
            ? pujaItems
            : pujaItems.filter((item) => item.category === activeFilter);

    return (
        <div id="puja" className="py-10 md:py-20 max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
                <div>
                    <div className="flex flex-row items-center gap-3">
                        <img src={omSymbolsvg} alt="Om" className="w-6 h-6" />
                        <span className="text-xl font-semibold text-[#DB4242]">PUJA</span>
                        <img src={omSymbolsvg} alt="Om" className="w-6 h-6" />
                    </div>
                    <p className="text-3xl md:text-5xl font-bold mt-3 md:mt-0">Our Puja</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-2 mt-4 md:mt-0">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`md:px-4 px-2 md:py-2 py-1 border-b-2   transition-all  font-semibold cursor-pointer ${activeFilter === filter
                                ? "border-[#DB4242]  text-[#DB4242]"
                                : "border-b-transparent hover:text-[#DB4242]"
                                }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                <AnimatePresence>
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 z-10">
                                <h5 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h5>
                                <p className="text-sm text-white">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PujaGallery;