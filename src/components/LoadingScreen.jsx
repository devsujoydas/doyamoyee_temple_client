import React from "react";
import loadingImg from "/loading.webp";

const LoadingScreen = () => {
  return (
    <div className="h-screen fixed inset-0 flex justify-center items-center z-50 bg-gradient-to-b from-indigo-900 via-black to-indigo-900">
      <div className="flex flex-col items-center gap-4">
        {/* Image with soft shadow and scale animation */}
        <div className="animate-pulse transform hover:scale-105 transition-transform duration-500">
          <img loading="lazy"
            src={loadingImg}
            alt="Loading"
            className="w-32 h-32 object-contain drop-shadow-xl"
          />
        </div>

        {/* Optional Loading Text */}
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading...
        </p>

        {/* Optional subtle dots animation */}
        <div className="flex space-x-2 mt-2">
          <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;