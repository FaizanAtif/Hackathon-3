'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import product1 from '@/public/product1.png'
import product2 from '@/public/product2.jpg'
import product3 from '@/public/product3.png'
import product4 from '@/public/product4.jpg'
import product5 from '@/public/product5.jpg'
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

const images = [
  { src: product3, alt: "Trendy sneakers in stock" },
  { src: product4, alt: "Classic leather boots for men" },
  { src: product1, alt: "Stylish running shoes" },
  { src: product5, alt: "Casual wear sneakers on sale" },
  { src: product2, alt: "Limited edition streetwear shoes" }
]

export default function ProductCarousel() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8">
      <header className="mt-14 sm:mt-24 mb-10 text-center">
        <h2 className="font-bold text-lg sm:text-2xl text-black">BEST SELLING THIS WEEK</h2>
        <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          BEST SELLING
        </h3>
        <p className="italic font-bold text-xl sm:text-2xl text-black">
          Dont wait for opportunities, create them.
        </p>
      </header>

      <Carousel
        plugins={[
          Autoplay({ delay: 2000, stopOnInteraction: true }), // Pauses on hover or user interaction
        ]}
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
              <div className="p-2 mb-10">
                <Card className="overflow-hidden shadow-lg">
                  {/* Image Container */}
                  <div className="relative w-full h-[250px] sm:h-[350px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      priority={index === 0} // Prioritize first image for performance
                      loading={index === 0 ? "eager" : "lazy"} // Lazy load other images
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <CarouselPrevious className="left-4 sm:left-8" aria-label="Previous slide" />
        <CarouselNext className="right-4 sm:right-8" aria-label="Next slide" />
      </Carousel>
    </section>
  )
}
