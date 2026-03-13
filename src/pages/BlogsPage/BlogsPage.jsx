import { useEffect, useState } from "react";
import PageHeading from "../../shared/PageHeading";
import BlogCard from '../../components/BlogCard'; 
 

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
 
      <div className="container xl:mx-auto px-3 md:px-0 py-10 md:py-20">

       <PageHeading section="blogs" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {blogsData.map((blog, idx) => <BlogCard key={idx} blog={blog} />)}
        </div>

      </div>
    </section >
  );
};

export default BlogsPage;



