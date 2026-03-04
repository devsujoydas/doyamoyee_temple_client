 
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";


const CommentCard = ({ photo, name, date, text }) => {
    return (
        <div className="flex gap-4 p-4 border-b border-gray-200">
            <img
                src={photo}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{name}</h4>
                    <span className="text-gray-500 text-sm">{date}</span>
                </div>
                <p className="text-gray-700">{text}</p>
            </div>
        </div>
    );
};

const BlogDetailsLeft = () => {
    const [comment, setComment] = useState({
        message: "",
        name: "",
        email: "",
        website: "",
    });

    const handleChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Comment submitted:", comment);
        // ekhane apni backend call korte paren
        setComment({ message: "", name: "", email: "", website: "" });
    };

    return (
        <div className="w-full p-4">
            {/* Blog Post */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">I Will Not Reject My Faith in Rama, Shiva, Vishnu, Krishna etc.</h1>
                <div className="flex items-center text-gray-500 text-sm gap-4 mb-4">
                    <span>👁️ 123 Views</span>
                    <span>💬 5 Comments</span>
                    <span>📅 March 4, 2026</span>
                </div>
                <p className="text-gray-800 mb-4">
                    I find this argument as sad as the argument that without a belief in God people would likewise be unethical. Our mission is to share the Good of Hinduism, Loving, Faith and Serving. People ask questions related to Hinduism. to make a type specimen book.
                </p>
                <img
                    src="https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/blog/details/1.jpg"
                    alt="Blog"
                    className="w-full h-auto mb-4 rounded-lg"
                />
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Portfolio
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Creative
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                        Intuitive
                    </span>
                </div>
            </div>

            {/* Comment Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                <CommentCard
                    photo="https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/blog/details/7.jpg"
                    name="Robert John"
                    date="March 3, 2026"
                    text="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
                />
                <CommentCard
                    photo="https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/blog/details/8.jpg"
                    name="Jane Smith"
                    date="March 4, 2026"
                    text="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches"
                />
            </div>

            {/* Leave a Comment */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <textarea
                        name="message"
                        value={comment.message}
                        onChange={handleChange}
                        placeholder="Enter your Message"
                        className="border border-gray-300 p-3 rounded-lg w-full h-32 resize-none"
                        required
                    />
                    
                    <button
                        type="submit"
                        className="bg-[#7E4555] text-white text-sm px-6 py-4 rounded-full hover:bg-red-700 transition flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                        POST COMMENT <IoIosSend  className="text-lg" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogDetailsLeft;