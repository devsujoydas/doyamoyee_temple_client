import React, { useState } from 'react'

import omSymbolsvg from "/Om_symbol.svg"
import VideoCard from './VideoCard';

const Videos = () => {

    const videoUrls = [
        {
            "id": 1,
            "temple": "doyamoyee",
            "topic": "mondir",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1376928093604933%2F&show_text=true&width=267&t=0",
        },
        {
            "id": 2,
            "temple": "doyamoyee",
            "topic": "durgapuja",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1082405257162174%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 3,
            "temple": "doyamoyee",
            "topic": "durgapuja",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1313411230439563%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 4,
            "temple": "doyamoyee",
            "topic": "durgapuja",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F789548323947943%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 5,
            "temple": "doyamoyee",
            "topic": "durgapuja",
            "type": "landscape",
            "url": "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F24847583328215036%2F&show_text=false&width=560&t=0",
        },
        {
            "id": 6,
            "temple": "doyamoyee",
            "topic": "durgapuja",
            "type": "landscape",
            "url": "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1439525553777670%2F&show_text=false&width=560&t=0",
        },
        {
            "id": 7,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "landscape",
            "url": "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F658561956912360%2F&show_text=false&width=560&t=0",
        },
        {
            "id": 8,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "landscape",
            "url": "https://www.facebook.com/plugins/video.php?height=432&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F803874975561157%2F&show_text=false&width=560&t=0",
        },
        {
            "id": 9,
            "temple": "doyamoyee",
            "topic": "durgapuja",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2306837403091410%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 10,
            "temple": "doyamoyee",
            "topic": "durgapuja",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2634483543551087%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 11,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1307235243674512%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 12,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1263054892035400%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 13,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "landscape",
            "url": "https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1328363215353460%2F&show_text=false&width=560&t=0",
        },
        {
            "id": 14,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "landscape",
            "url": "https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F579294638538136%2F&show_text=false&width=560&t=0",
        },
        {
            "id": 15,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "landscape",
            "url": "https://www.facebook.com/plugins/video.php?height=312&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1419768339810126%2F&show_text=false&width=560&t=0",
        },
        {
            "id": 16,
            "temple": "natmondir",
            "topic": "kalipuja",
            "type": "landscape",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1917027839147943%2F&show_text=false&width=476&t=0",
        },
        {
            "id": 17,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1474581670342365%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 18,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2847120578822676%2F&show_text=false&width=267&t=0",
        },

        {
            "id": 19,
            "temple": "doyamoyee",
            "topic": "bipodtarini",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1424376268713496%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 20,
            "temple": "doyamoyee",
            "topic": "mahalaya",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F780157784950016%2F&show_text=false&width=267&t=0",
        },



        {
            "id": 21,
            "temple": "natmondir",
            "topic": "kalipuja",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F584113891048576%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 22,
            "temple": "others",
            "topic": "kalipuja",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1257603095881705%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 23,
            "temple": "basakpara",
            "topic": "durgapuja",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F798431509578027%2F&show_text=false&width=267&t=0",
        },
        {
            "id": 24,
            "temple": "basakpara",
            "topic": "durgapuja",
            "type": "reel",
            "url": "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1217381642819196%2F&show_text=false&width=267&t=0",
        },
    ]


    const [selectedTemple, setSelectedTemple] = useState("all");
    const [selectedTopic, setSelectedTopic] = useState("all");

    const filteredVideos = videoUrls.filter((video) => {
        const templeMatch =
            selectedTemple === "all" || video.temple === selectedTemple;
        const topicMatch =
            selectedTopic === "all" || video.topic === selectedTopic;
        return templeMatch && topicMatch;
    });



    return (
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
            {/* Heading */}
            <div className='mb-10'>
                <span className="flex justify-center items-center gap-2 text-xl font-semibold section-title ">
                    <img className="w-5 h-5" src={omSymbolsvg} alt="" />
                    VIDEOS
                    <img className="w-5 h-5" src={omSymbolsvg} alt="" />
                </span>
                <p className="text-center text-3xl md:text-5xl font-family-lora font-bold section-text mt-2 md:mt-3">Doyamoyee Temple</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {/* Temple Filter */}
                <select
                    onChange={(e) => setSelectedTemple(e.target.value)}
                    className="px-5 py-3 rounded-full border border-gray-300 bg-white shadow-md text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                    <option value="all">All Temples</option>
                    <option value="doyamoye">Doyamoye</option>
                    <option value="natmondir">Natmondir</option>
                    <option value="others">Others</option>
                </select>

                {/* Topic Filter */}
                <select
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="px-5 py-3 rounded-full border border-gray-300 bg-white shadow-md text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                    <option value="all">All Topics</option>
                    <option value="mondir">Mondir</option>
                    <option value="durgapuja">Durga Puja</option>
                    <option value="kalipuja">Kali Puja</option>
                    <option value="lokkhi puja">Lokkhi Puja</option>
                    <option value="soshankaliPuja">Soshan Kali Puja</option>
                </select>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-3 lg:columns-4 gap-6 space-y-6">
                {filteredVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>

            {/* Empty State */}
            {filteredVideos.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    No videos found.
                </div>
            )}
        </div>
    )
}

export default Videos