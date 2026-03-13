import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import PageHeading from "../../shared/PageHeading";
import { FiZoomIn } from "react-icons/fi";
import GalleryCard from "./GalleryCard";

// Auto-import all images
const images = Object.values(
  import.meta.glob("../../assets/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

function Gallery() {
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
    <section className="relative">
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-red-600 blur-3xl opacity-20 rounded-full"></div>
      <div className="custom-container">
        <PageHeading section="gallery" />


        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.slice(0, visibleCount).map((img, index) => <GalleryCard img={img} index={index} itemVariants={itemVariants} />)}
        </div>

        {/* View More Button */}
        {visibleCount < images.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleViewMore}
              className="bg-linear-to-r from-yellow-500 to-red-600 
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