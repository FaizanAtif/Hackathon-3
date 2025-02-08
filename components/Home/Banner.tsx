import Link from "next/link";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section aria-label="Promotional Banner" className="mt-20">
      <div 
        className="relative h-[50vh] min-h-[300px] flex items-center justify-center"
        role="banner"
      >
        {/* Background Image - Better performance with Next.js Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src='/image3.jpg'
            alt="Sports shoes background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
        </div>

        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/20" 
          aria-hidden="true"
        ></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
            TTHE ULTIMATE SPORTS SHOES FOR PERFORMANCE
          </h1>
          
          <Link 
            href="/shop"
            className="inline-block bg-white text-black border-2 border-white px-8 py-2 rounded-sm font-extrabold text-lg transition duration-300 hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Shop now for sports shoes"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;