import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import banner from "/banner/banner.webp"
import banner2 from "/banner/banner2.webp"
import banner3 from "/banner/banner3.webp"
import banner4 from "/banner/banner4.webp"
import banner5 from "/banner/banner5.webp"
import banner6 from "/banner/banner6.webp"
import banner7 from "/banner/banner7.webp"
import banner8 from "/banner/banner8.webp"
import banner9 from "/banner/banner9.webp"
import banner10 from "/banner/banner10.webp"
import banner11 from "/about/tample-about.webp"

import bannerforsm1 from "/banner/bannerforsm1.webp"
import bannerforsm2 from "/banner/bannerforsm2.webp"
import bannerforsm3 from "/banner/bannerforsm3.webp"
import bannerforsm4 from "/banner/bannerforsm4.webp"

import herosmvd from "/hero/herosmvd.mp4"


import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css/effect-fade'
import 'swiper/css'

const Hero = () => {
  const { t } = useTranslation();

  const heroBanner = [
    { url: banner3 },
    { url: banner },
    { url: banner2 },
    { url: banner5 },
    { url: banner4 },
    { url: banner6 },
    { url: banner7 },
    { url: banner8 },
    { url: banner9 },
    { url: banner10 },
    { url: banner11 },
  ]
  const heroBannerforsm = [
    { url: bannerforsm1 },
    { url: bannerforsm2 },
    { url: bannerforsm3 },
    { url: bannerforsm4 },
  ]

  return (
    <div>

      {/* <div className="md:block hidden">
        <Swiper

          spaceBetween={30}
          effect={'fade'}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          modules={[EffectFade, Autoplay]}
        >
          {heroBanner.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className='text-color-primary bg-no-repeat bg-cover relative '
                style={{ backgroundImage: `url(${banner.url})` }}
              >
                <div className='md:h-212.5 min-h-[93vh] w-full flex justify-center items-center'>

                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-4xl md:text-7xl font-bold"
                    >
                      {t("hero_title")}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 1 }}
                      className="mt-4 text-lg md:text-2xl"
                    >
                      {t("hero_subtitle")}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="mt-6 flex gap-4"
                    >
                      <a
                        href="#events"
                        className="bg-yellow-500 px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition"
                      >
                        {t("hero_cta_events")}
                      </a>

                      <a
                        href="#volunteer"
                        className="bg-green-500 px-6 py-3 rounded font-semibold hover:bg-green-600 transition"
                      >
                        {t("hero_cta_volunteer")}
                      </a>
                    </motion.div>

                  </motion.div>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}


      {/* for sm */}
      <div className="md: block">

        <div className="relative w-full overflow-hidden">

          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={herosmvd} type="video/mp4" />
          </video>

          {/* Overlay Content */}
          <div className="md:h-212.5 min-h-screen w-full flex justify-center items-center relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-7xl font-bold"
              >
                {t("hero_title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-4 text-sm md:text-2xl"
              >
                {t("hero_subtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-6 flex gap-4"
              >
                <a
                  href="#events"
                  className="bg-yellow-500 md:px-6 px-3 md:py-3 py-1.5 md:text-[16px] text-sm rounded font-semibold hover:bg-yellow-600 transition"
                >
                  {t("hero_cta_events")}
                </a>

                <a
                  href="#volunteer"
                  className="bg-green-500 md:px-6 px-3 md:py-3 py-1.5 md:text-[16px] text-sm rounded font-semibold hover:bg-green-600 transition"
                >
                  {t("hero_cta_volunteer")}
                </a>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;