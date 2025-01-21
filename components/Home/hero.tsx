import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 custom-img bg-fixed h-[600px] mt-4 bg-cover bg-center">
        <div className="hero-overlay bg-opacity-20"></div>

        {/* Text Content */}
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            COMBINING PERFORMANCE, COMFORT AND LUXURY
            </h1>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
            Experience the perfect balance of performance, comfort, and luxury with every pair, making you feel unstoppable
            </p>
            <div className="flex justify-center gap-6">
              <button className="btn btn-ghost text-white border-2 border-white  text-lg transition-all duration-300 transform hover:bg-white hover:text-black">
                Shop Women's
              </button>
              <button className="btn btn-ghost text-white border-2 border-white  text-lg transition-all duration-300 transform hover:bg-white hover:text-black">
                Shop Men's
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
