// import React from 'react'
// import { useTranslation } from "react-i18next";
// import img1 from "/temple_imgs/main-gate.png"
// import img2 from "/temple_imgs/ma-kali.png"
// import img3 from "/temple_imgs/annapurna.png"
// import img4 from "/temple_imgs/siva-liggo.png"
// import GalleryCard from './GalleryCard';


// const GallaryPage = () => {
//   const { t } = useTranslation();

//   const images = [
//     `${img1}`,
//     `${img2}`,
//     `${img3}`,
//     `${img4}`,
//   ];

//   return (
//     <section id="gallery" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-3">{t("gallery_title")}</h2>
//         <p className="mb-10">{t("gallery_text")}</p>

//         <div className="grid md:grid-cols-3 gap-5">
//           {images.map((img, i) => (
//             <div key={i} className="w-full h-96 object-cover overflow-hidden rounded-xl shadow-xl cursor-pointer group" >
//               <img src={img} alt={`Gallery ${i}`} className='w-full h-full object-cover group-hover:scale-110 transition-all' />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default GallaryPage