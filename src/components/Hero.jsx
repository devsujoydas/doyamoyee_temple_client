import React from "react";
import { useTranslation } from "react-i18next";
import banner from "/banner/banner.jpg"
import banner2 from "/banner/banner2.png"
import banner3 from "/banner/banner3.png"
import banner4 from "/banner/banner4.png"
import banner5 from "/banner/banner5.png"
import banner6 from "/banner/banner6.png"
import banner7 from "/banner/banner7.png"
import banner8 from "/banner/banner8.png"
import banner9 from "/banner/banner9.png"
import banner10 from "/banner/banner10.png"
import banner11 from "/about/tample-about.png"


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

  const heroBanner = [
    { url: `${banner3}` },
    { url: `${banner}` },
    { url: `${banner2}` },
    { url: `${banner5}` },
    { url: `${banner4}` },
    { url: `${banner6}` },
    { url: `${banner7}` },
    { url: `${banner8}` },
    { url: `${banner9}` },
    { url: `${banner10}` },
    { url: `${banner11}` },
  ]

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

        {heroBanner.map((banner) => (
          <SwiperSlide>
            <div
              className=' text-white bg-no-repeat bg-cover'
              style={{ backgroundImage: `url(${banner.url})` }}
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
        ))}

      </Swiper>
    </div>

  );
};

export default Hero;