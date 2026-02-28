import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "/temple_imgs/main-gate.png"
import img2 from "/temple_imgs/ma-kali.png"
import img3 from "/temple_imgs/annapurna.png"
import img4 from "/temple_imgs/siva-liggo.png"


const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    `${img1}`,
    `${img2}`,
    `${img3}`,
    `${img4}`,
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