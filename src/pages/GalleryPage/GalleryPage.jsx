import React from "react";
import { useTranslation } from "react-i18next";

import LightGallery from "lightgallery/react";
// CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Auto-import all images from gallery folder
const images = Object.values(
  import.meta.glob("../../assets/gallery/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

function Gallery() {
  const { t } = useTranslation();


  return (
    <div className="max-w-7xl mx-auto p-4 my-5 min-h-screen">

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">{t("gallery_title")}</h2>
        <p className="mb-10">{t("gallery_text")}</p>
      </div>

      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <a key={index} href={img} className="block">
            <div className="w-full h-60 rounded-lg cursor-pointer overflow-hidden shadow-md">
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform "
              />
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default Gallery;