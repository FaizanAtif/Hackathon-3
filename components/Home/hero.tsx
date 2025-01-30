'use client'
import * as React from "react"
import bann1 from '@/public/bann1.jpg'
import bann2 from '@/public/bann2.jpg'
import bann3 from '@/public/bann3.jpg'
import bann4 from '@/public/bann4.jpg'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function Hero() {
  const images = [bann4, bann2, bann3, bann1]

  return (
    <div className="w-full max-w-[1350px] mx-auto h-[70vh] min-h-[600px] relative mb-16">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[70vh] min-h-[600px]">
                {/* Carousel Image */}
                <Image
                  src={image}
                  alt={`Banner ${index + 1}`}
                  fill // Ensures the image fills the container
                  style={{ objectFit: "cover" }} // Keeps the aspect ratio and covers the container without stretching
                  priority={index === 0} // Prioritize loading the first image
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel Controls */}
       
      </Carousel>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/30">
        <h1 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          STYLE MEETS PERFORMANCE
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 mb-6">
          Where every step blends comfort, style, and unmatched performance.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {/* White outlined button */}
          <button className="bg-transparent text-white border-2 border-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition font-bold">
            SHOP NOW
          </button>
          {/* Black outlined button */}
          <button className="bg-transparent text-white border-2 border-white py-2 px-6 rounded-md hover:bg-white hover:text-black transition font-bold">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}