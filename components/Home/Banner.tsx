
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 custom-img2 h-[50vh] min-h-[300px] bg-cover bg-center mt-20">
        <div className="hero-overlay bg-opacity-20"></div>

        {/* Text Content */}
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              THE ULTIMATE SPORTS SHOE FOR PERFORMANCE
            </h1>
            <div className="flex justify-center">
              <Link href={"/shop"}>
              <button className="btn bg-white text-black border-2 border-white text-lg font-extrabold px-8  hover:bg-transparent hover:text-white transition duration-300">
                SHOP NOW
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;