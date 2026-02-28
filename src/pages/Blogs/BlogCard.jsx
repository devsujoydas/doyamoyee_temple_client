
import { FaRegCalendarAlt } from "react-icons/fa";
import omSymbolsvg from "/Om_symbol.svg"

const BlogCard = ({ blog }) => {



    return (
        <div className="p-1">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* 🔹 Blog Image */}
                <div className="h-64 w-full overflow-hidden">
                    <img
                        src={blog?.images[0]}
                        alt={blog?.title}
                        className="w-full h-full object-cover transform hover:scale-125 transition duration-500 cursor-pointer"
                    />
                </div>


                {/* 🔹 Blog Content */}
                <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-5 mb-3">
                        {/* Tags */}
                        <div className="flex gap-1  items-center">
                            <img className="w-3 h-3" src={omSymbolsvg} alt="" />
                            <span className="  text-[13px] font-semibold text-[#44233B] ">
                                {blog?.tag}
                            </span>
                        </div>
                        {/* Tags */}
                        <div className="flex gap-2  items-center">
                            <FaRegCalendarAlt className="text-[#DB4242]" size={14} />
                            <span className="  text-[13px] font-semibold text-[#44233B]">
                                {blog?.date}
                            </span>
                        </div>



                    </div>
                    {/* Title */}
                    <h3 className="text-2xl hover:text-[#DB4242] cursor-pointer font-bold  font-family-lora mb-2">
                        {blog?.title}
                    </h3>

                    {/* Short Description */}
                    <div>

                        <p className="text-[#777777] line-clamp-3 text-[16px ] mb-4">
                            {blog.disc.length > 60
                                ? blog.disc.slice(0, 120) + "..."
                                : blog.disc}
                        </p>

                    </div>

                    {/* Author  */}
                    <div className="flex items-center mt-auto gap-3">
                        <img
                            src={blog?.author?.image}
                            alt={blog?.author?.name}
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="text-[16px] text-gray-600">
                            <p>by <span className="text-[#DB4242] hover:text-[#44233B] transition-all cursor-pointer font-medium">{blog?.author?.name}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard