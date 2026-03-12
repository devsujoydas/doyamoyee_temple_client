import React, { useState, useEffect } from "react";
import BlogDetailsLeft from "./BlogDetailsLeft";
import SharedPageHeading from "../../shared/SharedPageHeading";
import BlogDetailsRight from "./BlogDetailsRight";
import { useNavigate, useParams } from "react-router-dom";
import PageHeading from "../../components/PageHeading";

const BlogsDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams(); // get blog slug from URL
  const [blogsData, setBlogsData] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);


  useEffect(() => {
    fetch("/json/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogsData(data))
      .catch(console.error);
  }, []);

  // Update currentBlog when blogsData or slug changes
  useEffect(() => {
    if (blogsData.length && slug) {
      const found = blogsData.find((b) => b.slug === slug);
      setCurrentBlog(found || blogsData[0]); // fallback to first blog
    }
  }, [blogsData, slug]);

  if (!currentBlog) return null; // or loading state

  return (
    <div className="bg-white">
      {/* <SharedPageHeading title="পোস্টের বিস্তারিত" path="পোস্ট" path2="পোস্টের বিস্তারিত" /> */}

      {/* <div className="md:pt-20 pt-10">

      <PageHeading
        title={currentBlog?.title}
      />
</div> */}

      <div className="max-w-7xl xl:mx-auto mx-3 md:mx-0 py-10 ">
        <button
          onClick={() => navigate("/blogs")}
          className="inline-block cursor-pointer md:mb-8 mb-5 md:mt-0 mt-10 text-indigo-600 hover:underline"
        >
          ← ফিরে যান
        </button>
        <div className="flex md:flex-row flex-col gap-5">
          <BlogDetailsLeft blog={currentBlog} />
          <BlogDetailsRight
            blog={currentBlog}
            recentPosts={blogsData}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;