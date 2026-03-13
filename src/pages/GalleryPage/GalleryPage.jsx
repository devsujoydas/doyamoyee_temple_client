import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import PageHeading from "../../shared/PageHeading";
import { FiZoomIn } from "react-icons/fi";

// Auto-import all images
const images = Object.values(
  import.meta.glob("../../assets/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

function Gallery() {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(12);

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.5 },
    }),
  };

  const handleViewMore = () => {
    setVisibleCount(images.length);
  };

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: { autoStart: true },
      Toolbar: { display: ["zoom", "prev", "next", "close"] },
      animated: true,
      dragToClose: true,
    });

    return () => Fancybox.destroy();
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6">

      {/* Glow background */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-red-600 blur-3xl opacity-20 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        <PageHeading
          title={t("gallery_title")}
          desc={t("gallery_text")}
        />

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {images.slice(0, visibleCount).map((img, index) => (
            <motion.a
              key={index}
              href={img}
              data-fancybox="gallery"
              data-caption={`Gallery Image ${index + 1}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: .2 }}
              variants={itemVariants}
              className="group relative block overflow-hidden rounded-xl shadow-lg"
            >

              {/* Image */}
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-40 md:h-60 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-400 flex items-center justify-center">

                <FiZoomIn className="text-white text-3xl opacity-90" />

              </div>

            </motion.a>
          ))}

        </div>

        {/* View More Button */}
        {visibleCount < images.length && (
          <div className="text-center mt-12">

            <button
              onClick={handleViewMore}
              className="bg-gradient-to-r from-yellow-500 to-red-600 
              text-white px-8 py-3 rounded-full font-semibold 
              shadow-lg hover:shadow-xl hover:scale-105 
              transition duration-300"
            >
              View More
            </button>

          </div>
        )}

      </div>

    </section>
  );
}

export default Gallery;