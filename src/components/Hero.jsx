import React from "react";
import { useTranslation } from "react-i18next";
import banner from "/banner.jpg"
import banner2 from "/about/tample-about.png"


import { FaArrowRight } from 'react-icons/fa'
import { BsMouse } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

import { EffectFade, Autoplay } from 'swiper/modules'


const Hero = () => {
  const { t } = useTranslation();

  return (


    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        modules={[EffectFade, Autoplay]}
        className='mySwiper'
      >
        
        <SwiperSlide>
          <div
            className=' text-white bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className='md:h-212.5 h-[85vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl md:text-7xl font-bold">{t("hero_title")}</h1>
                <p className="mt-4 text-lg md:text-2xl">{t("hero_subtitle")}</p>
                <div className="mt-6 flex gap-4">
                  <a href="#events" className="bg-yellow-500 px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition">
                    {t("hero_cta_events")}
                  </a>
                  <a href="#volunteer" className="bg-green-500 px-6 py-3 rounded font-semibold hover:bg-green-600 transition">
                    {t("hero_cta_volunteer")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=' text-white bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className='md:h-212.5 h-[85vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl md:text-7xl font-bold">{t("hero_title")}</h1>
                <p className="mt-4 text-lg md:text-2xl">{t("hero_subtitle")}</p>
                <div className="mt-6 flex gap-4">
                  <a href="#events" className="bg-yellow-500 px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition">
                    {t("hero_cta_events")}
                  </a>
                  <a href="#volunteer" className="bg-green-500 px-6 py-3 rounded font-semibold hover:bg-green-600 transition">
                    {t("hero_cta_volunteer")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
    // <section id="home" className="relative bg-cover bg-center h-[90vh]" style={{backgroundImage: `url(${banner})`}}>
    //   <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
    // <h1 className="text-4xl md:text-7xl font-bold">{t("hero_title")}</h1>
    // <p className="mt-4 text-lg md:text-2xl">{t("hero_subtitle")}</p>
    // <div className="mt-6 flex gap-4">
    //   <a href="#events" className="bg-yellow-500 px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition">
    //     {t("hero_cta_events")}
    //   </a>
    //   <a href="#volunteer" className="bg-green-500 px-6 py-3 rounded font-semibold hover:bg-green-600 transition">
    //     {t("hero_cta_volunteer")}
    //   </a>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;