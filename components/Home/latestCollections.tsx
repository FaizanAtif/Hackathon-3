"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Card } from "@/components/ui/apple-cards-carousel";
import { client } from "@/sanity/lib/client";

// Define the interface for a product
interface Product {
  productName: string;
  imageUrl: string;
  description: string;
  price: number;
}

const query = `*[_type == 'collection']{
  productName,
  "imageUrl": image.asset->url,
  description,
  price
}`;

export function LatestCollections() {
  const [products, setProducts] = useState<Product[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Memoize the fetchData function to avoid unnecessary re-renders
  const fetchData = useCallback(async () => {
    try {
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Memoize the Card component to prevent unnecessary re-renders
  const MemoizedCard = React.memo(Card);

  const cards = products.map((product, index) => (
    <MemoizedCard
      key={index}
      card={{
        src: product.imageUrl,
        title: product.productName,
        category: product.description,
        content: (
          <div className="space-y-2">
            <p className="text-sm text-gray-600">{product.description}</p>
            <h3 className="font-bold text-lg">Price: ${product.price}</h3>
          </div>
        ),
      }}
      index={index}
    />
  ));

  return (
    <section
      aria-label="Latest Collections"
      className="w-full max-w-[1440px] mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mt-11 mb-6 text-center">
        <p className="font-bold text-lg sm:text-2xl text-black">NEW THIS MONTH</p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          NEW ARRIVALS
        </h1>
        <p className="italic font-bold text-xl sm:text-2xl text-black">
          They are the foundation of your next great look.
        </p>
      </div>

      <div className="relative w-full">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-snap-x-mandatory scrollbar-hide py-8"
          role="region"
          aria-label="Product Carousel"
        >
          <div className="flex gap-6 md:gap-8 lg:gap-10 mx-auto px-4 sm:px-0">
            {cards.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] 
                         transition-all duration-500 ease-in-out transform 
                         hover:scale-105 hover:shadow-xl rounded-lg"
                role="group"
                aria-label={`Product ${index + 1}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}