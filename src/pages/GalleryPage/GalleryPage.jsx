import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Fancybox imports
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Auto-import all images from gallery folder
const images = Object.values(
  import.meta.glob("../../assets/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

function Gallery() {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(12); // প্রথমে 12 টা দেখাবে

  // Motion variants for gallery items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.02, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Show more images on click
  const handleViewMore = () => {
    setVisibleCount(images.length); // সব ছবি দেখাবে
  };

  // Initialize Fancybox with thumbnails + toolbar
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: { autoStart: true },                 // Modern thumbnails
      Toolbar: { display: ["zoom", "prev", "next", "close"] },
      dragToClose: true,
      animated: true,
      animationEffect: "fade",                     // fade effect
      animationDuration: 150,                      // hide/show duration কমিয়ে দেওয়া
      clickSlide: "close",                         // slide click এ close
      clickOutside: "close",                       // background click এ close
    });

    return () => {
      Fancybox.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 my-5 min-h-screen">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">{t("gallery_title")}</h2>
        <p className="mb-10">{t("gallery_text")}</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.slice(0, visibleCount).map((img, index) => (
          <motion.a
            key={index}
            href={img}
            data-fancybox="gallery"
            data-caption={`Gallery Image ${index + 1}`}
            className="block"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-32 object-cover md:h-60 rounded-lg cursor-pointer overflow-hidden shadow-md">
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.a>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < images.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 cursor-pointer transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;