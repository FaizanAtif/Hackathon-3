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

const images = [product3, product4, product1, product5, product2]

export default function ProductCarousel() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8">
      <div className="mt-20 sm:mt-30 mb-11 text-center">
        <p className="font-bold text-2xl mb-2">BEST SELLING THIS WEEK</p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          BEST SELLING
        </h1>
        <p className="italic font-bold text-2xl mt-2">
          "Don't wait for opportunities, create them"
        </p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
              <div className="p-1 mb-16">
                <Card className="overflow-hidden">
                  {/* Carousel Image */}
                  <div className="relative w-full h-[300px] sm:h-[400px]">
                    <Image
                      src={image}
                      alt={`Product ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }} // Keeps the aspect ratio and covers the container without stretching
                      priority={index === 0} // Prioritize loading the first image
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel Controls */}
        <CarouselPrevious className="left-4 sm:left-8" />
        <CarouselNext className="right-4 sm:right-8" />
      </Carousel>
    </div>
  )
}