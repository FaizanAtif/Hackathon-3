import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 custom-img2  h-[400px] bg-cover bg-center">
        <div className="hero-overlay bg-opacity-20"></div>

        {/* Text Content */}
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            THE ULTIMATE SPORTS SHOE FOR PERFORMANCE
            </h1>
            <div className="flex justify-center btn text-black border-2 mx-72 border-white w-32 text-lg font-bold">
              <button className="">
                Shop Now
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;