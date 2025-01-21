"use client";
import React, { useEffect, useState, useRef } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { client } from "@/sanity/lib/client";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

// Updated query to fetch image URLs, product name, description, and price
const query = `*[_type == 'collection']{
  productName,
  "imageUrl": image.asset->url,
  description,
  price
}`;

export function LatestCollections() {
  const [products, setProducts] = useState<any[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await client.fetch(query);
      setProducts(data);
    }
    fetchData();
  }, []);

  const handleLeftArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
    }
  };

  const handleRightArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300; // Adjust scroll distance as needed
    }
  };

  const cards = products.map((product, index) => (
    <Card
      key={index}
      card={{
        src: product.imageUrl,
        title: product.productName,
        category: product.description,
        content: (
          <div>
            <p>{product.description}</p>
            <h3 className="font-bold">Price: ${product.price}</h3>
          </div>
        ),
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-36">
      <h2 className="max-w-7xl text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mx-auto text-center mt-2 mb-16">
        Our Latest Collections
      </h2>
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={handleLeftArrowClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          <IconArrowNarrowLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-hidden py-4" // Ensures no bottom slider
        >
          <div className="flex space-x-4 mx-auto">
            {cards.map((item, index) => (
              <div
                key={index}
                className="transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleRightArrowClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
        >
          <IconArrowNarrowRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
