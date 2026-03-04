import omSymbolsvg from "/Om_symbol.svg"
import BlogCard from "./BlogCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { motion } from "framer-motion";
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";



const BlogsSection = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch("/json/blogs.json")
      .then((res) => res.json())
      .then(setBlogsData)
      .catch(console.error);
  }, []);
  
  return (
    <section id="blogs" className="relative bg-color-primary bg-no-repeat bg-center w-full " style={{ backgroundImage: `url(${""})` }} >

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

export default BlogsSection