import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css/effect-fade'
import 'swiper/css'
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();

  const heroBanner = [
    { url: "/banner/banner1.webp" },  
    { url: "/banner/banner2.webp" },
    { url: "/banner/banner3.webp" },
    { url: "/banner/banner4.webp" },
    { url: "/banner/banner5.webp" },
    { url: "/banner/banner6.webp" },
    { url: "/banner/banner7.webp" },
    { url: "/about/tample-about.webp" },
  ]
  const heroBannerforsm = [
    { url: "https://res.cloudinary.com/dpdsgroa7/image/upload/v1773583586/image38_p0mylr.webp" },
    { url: "/banner/bannerforsm2.webp" },
    { url: "/banner/bannerforsm3.webp" },
    { url: "/banner/bannerforsm4.webp" },
  ]

  return (
    <div>

      <div className="md:block hidden">
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
                <div className='md:h-212.5 min-h-[95vh] w-full flex justify-center items-center'>

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
                      <Link
                        to="/events"
                        className="bg-yellow-500 px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition"
                      >
                        {t("hero_cta_events")}
                      </Link>

                      <Link
                        to="/history"
                        className="bg-[#9A031E] px-6 py-3 rounded font-semibold  transition"
                      >
                        {t("hero_cta_volunteer")}
                      </Link>

                    </motion.div>

                  </motion.div>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* for sm */}
      <div className="md:hidden block">
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
          {heroBannerforsm.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className='text-color-primary bg-no-repeat bg-center bg-cover relative'
                style={{ backgroundImage: `url(${banner.url})` }}
              >
                <div className='md:h-212.5 min-h-[95vh] w-full flex justify-center items-center'>

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
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
                    >
                      {t("hero_title")}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 1 }}
                      className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                    >
                      {t("hero_subtitle")}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="mt-4 sm:mt-6 flex  flex-row gap-3 sm:gap-4"
                    >
                      <Link
                        to="/events"
                        className="bg-yellow-500 px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-yellow-600 transition"
                      >
                        {t("hero_cta_events")}
                      </Link>

                      <Link
                        to="/history"
                        className="bg-[#9A031E] px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold text-sm sm:text-base md:text-lg lg:text-xl  transition"
                      >
                        {t("hero_cta_volunteer")}
                      </Link>
                    </motion.div>

                  </motion.div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
