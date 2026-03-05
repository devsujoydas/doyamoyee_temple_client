import React, { useState, useEffect } from "react";
import BlogDetailsLeft from "./BlogDetailsLeft";
import SharedPageHeading from "../../shared/SharedPageHeading";
import BlogDetailsRight from "./BlogDetailsRight";
import { useParams } from "react-router-dom";

const BlogsDetails = () => {
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
      <SharedPageHeading title="পোস্টের বিস্তারিত" path="পোস্ট" path2="পোস্টের বিস্তারিত" />

      <div className="max-w-7xl xl:mx-auto mx-3 md:mx-0 py-10 md:py-20">
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