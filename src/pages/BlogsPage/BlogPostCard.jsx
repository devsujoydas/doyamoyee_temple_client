import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useTranslation } from "react-i18next";

const BlogPostCard = ({ blog }) => {
   const { t } = useTranslation();


  useEffect(() => {
    Fancybox.bind("[data-fancybox='blog-image']", {});
    return () => Fancybox.unbind("[data-fancybox='blog-image']");
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3 text-gray-900">
        {blog?.title}
      </h1>

      {/* Meta info */}
      <div className="flex flex-wrap items-center text-gray-500 text-xs sm:text-sm md:text-base gap-3 sm:gap-4 mb-5">
        <span>👁️ {blog?.views || 0} {t("views")}</span>
        <span>💬 {blog?.comments?.length || 0} {t("comments")}</span>
        <span>📅 {blog?.date}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-5">
        {blog?.desc}
      </p>

      {/* Blog Image */}
      <a href={blog?.postImg || blog?.images[0]} data-fancybox="blog-image" data-caption={blog?.title}>
        <img
          src={blog?.postImg || blog?.images[0]}
          alt={blog?.title}
          className="w-full h-auto mb-5 rounded-xl object-cover transition-transform duration-300"
        />
      </a>
    </div>
  );
};

export default BlogPostCard;