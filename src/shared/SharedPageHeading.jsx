import React from 'react';
import omSymbolsvg from "/om-symbol-black.jpg";
import { useNavigate } from 'react-router-dom';

const SharedPageHeading = ({ title, path, path2 }) => {
    const navigate = useNavigate();

    return (
        <div className="relative h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96 flex justify-center items-center">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: `url(https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/subheader.jpg)`
                }}
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/20"></div> {/* opacity adjust here */}

            {/* Title */}
            <h1 className="relative text-white font-bold
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                text-center px-4">
                {title}
            </h1>

            {/* Breadcrumb */}
            <div className="absolute -bottom-8 bg-white p-3 sm:p-4 md:p-5 rounded-full font-bold
                flex items-center gap-2 text-[#130d01] shadow-md
                text-sm sm:text-base md:text-lg lg:text-xl">
                {/* Home Button */}
                <button
                    className="cursor-pointer hover:text-blue-600 transition"
                    onClick={() => navigate(-1)}
                >
                    Home
                </button>

                {/* Om Symbol */}
                <div className="-mt-1">
                    <img
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                        src={omSymbolsvg}
                        alt="Om"
                    />
                </div>

                {/* Current Page */}
                <h1 className="truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[300px]">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default SharedPageHeading;