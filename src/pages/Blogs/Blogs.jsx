


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { motion } from "framer-motion";
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import PageHeading from "../../components/PageHeading";
import BlogCard from '../../components/BlogCard';


const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch("/json/blogs.json")
      .then((res) => res.json())
      .then(setBlogsData)
      .catch(console.error);
  }, []);


  return (
    <section id="blogs" className="relative bg-color-primary bg-no-repeat bg-center w-full " style={{ backgroundImage: `url(${""})` }} >

      <div className="max-w-7xl xl:mx-auto mx-3 md:mx-0 py-10 md:py-20">

        <PageHeading
          title={"দয়াময়ী মন্দিরের ব্লগ ও প্রবন্ধসমূহ"}
          desc={"শ্রী শ্রী দয়াময়ী মন্দিরের ইতিহাস, ঐতিহ্য, পূজা-পার্বণ ও সাম্প্রতিক কার্যক্রম সম্পর্কিত সকল লেখা ও প্রকাশনা"}
        />


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {blogsData.map((blog, idx) => <BlogCard key={idx} blog={blog} />)}
        </div>

      </div>
    </section >
  );
};

export default Blogs;



