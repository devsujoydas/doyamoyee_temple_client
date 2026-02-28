import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomSelect = ({ options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-48">
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center px-5 py-3 rounded-full border border-gray-300 bg-white shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
      >
        <span className="text-gray-700 font-medium">{selected}</span>
        <span className="text-gray-400">{open ? "▲" : "▼"}</span>
      </div>

      {/* Options */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-20 max-h-60 overflow-auto"
          >
            {options.map((opt, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className={`px-5 py-3 cursor-pointer hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 ${
                  opt === selected ? "bg-indigo-100 text-indigo-700 font-semibold" : ""
                }`}
              >
                {opt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;