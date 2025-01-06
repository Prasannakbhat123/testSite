import React from 'react';
import video1 from "../assets/vid5.mp4";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-7xl text-center">
        Defying Gravity
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ml-2">
          Beyond Mach
        </span>
      </h1>
    </div>
  );
};

export default HeroSection;