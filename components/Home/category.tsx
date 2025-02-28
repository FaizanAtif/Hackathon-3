import Image from 'next/image'
import React from 'react'
import boots from '@/public/boots.jpg'
import football from '@/public/football.jpg'
import running from '@/public/running.jpg'
import training from '@/public/training.jpg'
import Link from 'next/link'

const categories = [
  { image: boots, title: "BOOTS", href: "/shop", alt: "High-quality boots for sports and outdoor activities" },
  { image: running, title: "RUNNING SHOES", href: "/shop", alt: "Lightweight and comfortable running shoes for athletes" },
  { image: training, title: "TRAINING SHOES", href: "/shop", alt: "Durable training shoes for gym workouts and sports training" },
  { image: football, title: "FOOTBALL SHOES", href: "/shop", alt: "Top-performance football shoes designed for agility and control" },
]

export default function Category() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Heading */}
      <header className="mb-12 text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight">
          CATEGORIES
        </h2>
      </header>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((category, index) => (
          <div key={index} className="relative h-[400px] sm:h-[400px] group overflow-hidden rounded-lg">
            <Link href={category.href} aria-label={`Shop ${category.title}`} className="block h-full">
              {/* Image Container */}
              <div className="relative h-full w-full">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover rounded-lg duration-500 group-hover:scale-110"
                  priority={index === 0} // Prioritize first image for performance
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Category Title */}
              <div className="absolute inset-x-0 -bottom-20 group-hover:bottom-8 duration-300 transition-all ease-in-out">
                <div className="bg-black/50 backdrop-blur-sm py-3 px-4 mx-4 rounded-lg">
                  <h3 className="text-center text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
