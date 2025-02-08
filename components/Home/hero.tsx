'use client'
import * as React from "react"
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

// Define the banner data
const bannerData = [
  {
    id: 1,
    imagePath: "/bann4.jpg",
    alt: "Athletic footwear showcase"
  },
  {
    id: 2,
    imagePath: "/bann2.jpg",
    alt: "Performance sports shoes collection"
  },
  {
    id: 3,
    imagePath: "/bann3.jpg",
    alt: "Premium running shoes display"
  },
  {
    id: 4,
    imagePath: "/bann1.jpg",
    alt: "Modern sports footwear lineup"
  }
]

const actionButtons = [
  {
    text: "SHOP NOW",
    href: "/shop",
    ariaLabel: "Browse our collection"
  },
  {
    text: "ADD TO CART",
    href: "/product/nike-standard-issue-basketball-jersey",
    ariaLabel: "Add basketball jersey to cart"
  }
]

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section 
      aria-label="Featured Products Carousel"
      className="w-full max-w-[1350px] mx-auto relative mb-16"
    >
      <div className="h-[70vh] min-h-[85vh]">
        <Carousel
          plugins={[plugin.current]}
          setApi={setApi}
          className="h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {bannerData.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className="relative w-full h-[85vh] min-h-[85vh]">
                  <Image
                    src={banner.imagePath}
                    alt={banner.alt}
                    fill
                    priority={banner.id === 1}
                    className="object-cover"
                    sizes="(max-width: 1350px) 100vw, 1350px"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content overlay */}
      <div 
        className=" absolute mt-16 inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/30"
        aria-live="polite"
      >
        <h1 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
          STYLE MEETS PERFORMANCE
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Where every step blends comfort, style, and unmatched performance.
        </p>
        <div 
          className="flex flex-col sm:flex-row gap-4"
          role="group"
          aria-label="Shop actions"
        >
          {actionButtons.map((button, index) => (
            <Link 
              key={index}
              href={button.href}
              className="inline-flex items-center justify-center"
            >
              <button
                className="bg-transparent text-white border-2 border-white py-2 px-6 rounded-md 
                          hover:bg-white hover:text-black transition-colors duration-300 font-bold
                          focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label={button.ariaLabel}
              >
                {button.text}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Screen reader only slide counter */}
      <div className="sr-only" aria-live="polite">
        Showing slide {currentSlide + 1} of {bannerData.length}
      </div>
    </section>
  )
}