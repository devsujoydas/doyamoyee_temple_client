import React, { useEffect, useState } from "react";
import omSymbolsvg from "/Om_symbol.svg";
import VideoCard from "./VideoCard";
import axios from "axios";
import PageHeading from "../../components/PageHeading";

const Videos = () => {
    const [videoUrls, setVideoUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTemple, setSelectedTemple] = useState("all");
    const [selectedTopic, setSelectedTopic] = useState("all");

    useEffect(() => {
        const getVideos = async () => {
            try {
                const res = await axios.get("/json/videos.json");
                console.log(res)
                // ensure it's always an array
                if (Array.isArray(res.data)) {
                    setVideoUrls(res.data);

                } else {
                    setVideoUrls([]);
                }
            } catch (error) {
                console.error("Failed to load videos:", error);
                setVideoUrls([]);
            } finally {
                setLoading(false);
            }
        };

        getVideos();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">

            {/* Heading */}
            {/* <div className="mb-10 text-center">
                <span className="flex justify-center items-center gap-2 text-xl font-semibold section-title">
                    <img className="w-5 h-5" src={omSymbolsvg} alt="" />
                    VIDEOS
                    <img className="w-5 h-5" src={omSymbolsvg} alt="" />
                </span>

                <p className="text-3xl md:text-5xl font-family-lora font-bold section-text mt-2 md:mt-3">
                    Doyamoyee Temple
                </p>
            </div> */}

            <PageHeading
                title={"শ্রী শ্রী রীঁ দয়াময়ী মন্দিরের ভিডিওসমূহ"}
                desc={"মন্দিরের পূজা-পার্বণ, উৎসব, সাংস্কৃতিক অনুষ্ঠান ও বিশেষ মুহূর্তের ভিডিও সংগ্রহ"}
            />
            {/* Filters
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                <select
                    value={selectedTemple}
                    onChange={(e) => setSelectedTemple(e.target.value)}
                    className="px-5 py-3 rounded-full border border-gray-300 bg-white shadow-md text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                    <option value="all">All Temples</option>
                    <option value="doyamoye">Doyamoye</option>
                    <option value="natmondir">Natmondir</option>
                    <option value="others">Others</option>
                </select>

                <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="px-5 py-3 rounded-full border border-gray-300 bg-white shadow-md text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                    <option value="all">All Topics</option>
                    <option value="mondir">Mondir</option>
                    <option value="durgapuja">Durga Puja</option>
                    <option value="kalipuja">Kali Puja</option>
                    <option value="lokkhipuja">Lokkhi Puja</option>
                    <option value="soshankalipuja">Soshan Kali Puja</option>
                </select>
            </div> */}

            {/* Loading */}
            {loading && (
                <div className="text-center text-gray-500">Loading videos...</div>
            )}

            {/* Masonry Grid */}
            {!loading && (
                <div className="columns-1 sm:columns-3 lg:columns-4 gap-6 space-y-6">
                    {videoUrls.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            )}

            {/* Empty State */}
            {!loading && videoUrls.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    No videos found.
                </div>
            )}
        </div>
    );
};

export default Videos;