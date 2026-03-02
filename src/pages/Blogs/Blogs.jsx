import banner from "/blogs/blog-bottom-banner.png"
import omSymbolsvg from "/Om_symbol.svg"
import BlogCard from "./BlogCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { motion } from "framer-motion";
import { Autoplay } from 'swiper/modules';

import { Pagination } from 'swiper/modules';


const Blogs = () => {

  const blogsData = [
    {
      "id": 1,
      "images": [
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/1.jpg",
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/670x400.jpg"
      ],
      "title": "The Immortal Soul",
      "disc": "The Doyamoyee Temple celebrates spiritual devotion and dharma in everyday life. Visitors are inspired by the timeless teachings and cultural heritage preserved within the temple grounds. The temple stands as a symbol of faith, unity, and spiritual guidance for devotees.",
      "tag": "Temple Hinduism",
      "date": "May 30, 2026",
      "author": {
        "name": "Jitendra Ram",
        "image": "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/6-6-100x100.jpg"
      }
    },
    {
      "id": 2,
      "images": [
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/2.jpg",
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/670x400.jpg"
      ],
      "title": "Relief From Samsara",
      "disc": "Doyamoyee Temple guides devotees toward peace and spiritual liberation. Through rituals, pujas, and community engagement, devotees experience a sense of relief from worldly worries and a connection with their inner self.",
      "tag": "Temple Hinduism",
      "date": "june 25, 2026",
      "author": {
        "name": "Ram Prasad",
        "image": "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/1-4-100x100.jpg"
      }
    },
    {
      "id": 3,
      "images": [
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/8-600x389.jpg",
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/670x400.jpg"
      ],
      "title": "Lord Rama’s Regret",
      "disc": "At Doyamoyee Temple, devotees reflect on the teachings of dharma and devotion. The temple provides a spiritual space to contemplate the divine stories, understand morality, and embrace the lessons of Hindu philosophy in everyday life.",
      "tag": "Temple Hinduism",
      "date": "Oct 02, 2026",
      "author": {
        "name": "Ram Prasad",
        "image": "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/1-4-100x100.jpg"
      }
    },
    {
      "id": 1,
      "images": [
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/1.jpg",
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/670x400.jpg"
      ],
      "title": "The Immortal Soul",
      "disc": "The Doyamoyee Temple celebrates spiritual devotion and dharma in everyday life. Visitors are inspired by the timeless teachings and cultural heritage preserved within the temple grounds. The temple stands as a symbol of faith, unity, and spiritual guidance for devotees.",
      "tag": "Temple Hinduism",
      "date": "May 30, 2026",
      "author": {
        "name": "Jitendra Ram",
        "image": "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/6-6-100x100.jpg"
      }
    },
    {
      "id": 2,
      "images": [
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/2.jpg",
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/670x400.jpg"
      ],
      "title": "Relief From Samsara",
      "disc": "Doyamoyee Temple guides devotees toward peace and spiritual liberation. Through rituals, pujas, and community engagement, devotees experience a sense of relief from worldly worries and a connection with their inner self.",
      "tag": "Temple Hinduism",
      "date": "june 25, 2026",
      "author": {
        "name": "Ram Prasad",
        "image": "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/1-4-100x100.jpg"
      }
    },
    {
      "id": 3,
      "images": [
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/8-600x389.jpg",
        "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/670x400.jpg"
      ],
      "title": "Lord Rama’s Regret",
      "disc": "At Doyamoyee Temple, devotees reflect on the teachings of dharma and devotion. The temple provides a spiritual space to contemplate the divine stories, understand morality, and embrace the lessons of Hindu philosophy in everyday life.",
      "tag": "Temple Hinduism",
      "date": "Oct 02, 2026",
      "author": {
        "name": "Ram Prasad",
        "image": "https://metropolitanhost.com/themes/themeforest/wp/maharatri/wp-content/uploads/2021/09/1-4-100x100.jpg"
      }
    }
  ]

  return (
    <section id="blogs" className="relative bg-color-primary bg-no-repeat bg-center w-full md:h-screen " style={{ backgroundImage: `url(${""})` }} >

      <div className="max-w-7xl xl:mx-auto mx-3 md:mx-10 py-10 md:py-20">

        <span className="flex justify-center items-center gap-2 text-xl font-semibold section-title ">
          <img className="w-5 h-5" src={omSymbolsvg} alt="" />
          BLOG
          <img className="w-5 h-5" src={omSymbolsvg} alt="" />
        </span>

        <p className="text-center text-3xl md:text-5xl font-family-lora font-bold section-text mt-2 md:mt-5">News Feed</p>



        <div className="mt-10 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              500: { slidesPerView: 1, spaceBetween: 10 },
              765: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
            }}

            className=" rounded-md "
          >
            {blogsData.map((blog, idx) => (
              <SwiperSlide key={idx}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section >
  );
};

export default Blogs;



