import React from "react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg"
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("gallery_title")}</h2>
        <p className="mb-10">{t("gallery_text")}</p>

        <div className="grid md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <img key={i} src={img} alt={`Gallery ${i}`} className="w-full h-48 object-cover rounded shadow" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;