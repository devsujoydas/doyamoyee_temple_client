import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { HiCalendar, HiArrowRight, HiStar } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { motion } from "framer-motion";
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import NoticeCard from '../NoticePage/NoticeCard';



const LatestNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("/json/notice.json")
      .then((res) => res.json())
      .then(setNotices)
      .catch(console.error);
  }, []);

  const today = new Date();

  const activeNotices = useMemo(() => {
    return notices.filter((n) => {
      if (n.status !== "active") return false;

      if (n.expiryDate) return new Date(n.expiryDate) >= today;
      if (n.eventDate) return new Date(n.eventDate) >= today;

      return true;
    });
  }, [notices]);

  const importantNotices = useMemo(
    () => activeNotices.filter((n) => n.isImportant),
    [activeNotices]
  );


  return (
    <div>
      <div className='container xl:mx-auto md:px-0 px-3 md:mx-10 py-10 md:py-20'>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold text-foreground">Latest Notices</h2>
          <Link to="/notices" className="text-primary font-medium flex items-center gap-1 hover:underline">View All <HiArrowRight /></Link>
        </div>


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
          {importantNotices.map((notice, idx) => (
            <SwiperSlide key={idx}>
              <NoticeCard key={notice.id} notice={notice} />
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </div>
  )
}

export default LatestNotice