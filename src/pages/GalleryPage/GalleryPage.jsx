import React, { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import GalleryCard from "./GalleryCard";
import PageHeading from "../../shared/PageHeading";
import { galleryCategories, galleryImages, gallerySEO } from "../../data/data";

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: { autoStart: true },
      Toolbar: { display: ["zoom", "prev", "next", "close"] },
      animated: true,
      dragToClose: true,
    });

    return () => Fancybox.destroy();
  }, []);

  const handleViewMore = () => {
    setVisibleCount(galleryImages.length);
  };

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section className="py-20 relative">
      <div className="custom-container">
        <PageHeading section="gallery" />

        {/* Category Filter */}

        {/* <div className="flex flex-wrap gap-3 justify-center mt-10">

          {galleryCategories.map((cat) => (

            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border border-zinc-200 shadow-sm cursor-pointer transition
              ${
                filter === cat
                  ? "bg-yellow-500 text-white"
                  : "bg-white hover:bg-yellow-100"
              }`}
            >
              {cat}
            </button>

          ))}

        </div> */}

        {/* Masonry Grid */}
 
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {galleryImages.slice(0, visibleCount).map((img, index) => (
            <GalleryCard
              key={img.id}
              img={img}
              index={index}
              gallerySEO={gallerySEO}
            />
          ))}
        </div>

        {visibleCount < galleryImages.length && (
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
