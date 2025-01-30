import Image from 'next/image'
import React from 'react'
import boots from '@/public/boots.jpg'
import football from '@/public/football.jpg'
import running from '@/public/running.jpg'
import training from '@/public/training.jpg'
import Link from 'next/link'

const Category = () => {
  const categories = [
    { image: boots, title: "BOOTS", href: "/boots" },
    { image: running, title: "RUNNING SHOES", href: "/running-shoes" },
    { image: training, title: "TRAINING SHOES", href: "/training-shoes" },
    { image: football, title: "FOOTBALL SHOES", href: "/football-shoes" },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight">
        CATEGORIES
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="relative h-[400px] sm:h-[400px] group overflow-hidden rounded-lg"
          >
            <Link href={category.href} className="block h-full">
              <div className="relative h-full w-full">
                <Image
                  src={category.image}
                  alt={category.title.toLowerCase()}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover rounded-lg duration-500 group-hover:scale-110"
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-x-0 -bottom-20 group-hover:bottom-8 duration-300 transition-all ease-in-out">
                <div className="bg-black/50 backdrop-blur-sm py-3 px-4 mx-4 rounded-lg">
                  <h2 className="text-center text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                    {category.title}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category