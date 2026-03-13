import React, { useEffect, useState } from "react";
import omSymbolsvg from "/Om_symbol.svg";
import VideoCard from "./VideoCard";
import axios from "axios";
import PageHeading from "../../shared/PageHeading";

const Videos = () => {
    const [videoUrls, setVideoUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTemple, setSelectedTemple] = useState("all");
    const [selectedTopic, setSelectedTopic] = useState("all");

    useEffect(() => {
        const getVideos = async () => {
            try {
                const res = await axios.get("/json/videos.json");
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

       

            <PageHeading
                title={"শ্রী শ্রীঁ রী দয়াময়ী মন্দিরের ভিডিওসমূহ"}
                desc={"মন্দিরের পূজা-পার্বণ, উৎসব, সাংস্কৃতিক অনুষ্ঠান ও বিশেষ মুহূর্তের ভিডিও সংগ্রহ"}
            />
      

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