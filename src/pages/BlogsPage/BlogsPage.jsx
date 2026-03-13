import { useEffect, useState } from "react";
import PageHeading from "../../shared/PageHeading";
import BlogCard from '../../components/BlogCard';
import SharedPageHeading from "../../shared/SharedPageHeading";


const BlogsPage = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch("/json/blogs.json")
      .then((res) => res.json())
      .then(setBlogsData)
      .catch(console.error);
  }, []);


  return (
    <section id="blogs" className="relative  bg-no-repeat bg-center w-full "  >

      {/* <SharedPageHeading title="দয়াময়ী মন্দিরের পোস্টসমূহ" path="পোস্ট" path2="" /> */}
      <div className="container xl:mx-auto px-3 md:px-0 py-10 md:py-20">

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

export default BlogsPage;



