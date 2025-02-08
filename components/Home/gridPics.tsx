import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// Define TypeScript interfaces
interface Product {
  id: string;
  title: string;
  description: string;
  imagePath: string;
}

interface ProductCardProps {
  product: Product;
}

// Product data with proper typing
const products: Product[] = [
  {
    id: 'urban-racer',
    title: 'Urban Racer',
    description: 'With a modern design and premium materials, the Urban Racer is made for city runners who need both style and functionality. Its flexible, lightweight, and built for the hustle.',
    imagePath: '/grailify-W28WkL5Tr2M-unsplash.jpg',
  },
  {
    id: 'track-master',
    title: 'Track Master',
    description: 'The TrackMaster provides optimal support and shock absorption, ensuring a comfortable experience whether youre on the track or the pavement.',
    imagePath: '/grailify-TqXZfMOKR14-unsplash.jpg',
  },
  {
    id: 'swift-stride',
    title: 'Swift Stride',
    description: 'Engineered for high-performance, the SwiftStride combines soft cushioning with a responsive sole, perfect for long-distance joggers looking for a smooth ride.',
    imagePath: '/grailify-FVU4juuS9GM-unsplash.jpg',
  },
  {
    id: 'enduro-jett',
    title: 'Enduro Jett',
    description: 'Built for endurance, the EnduroJets lightweight yet supportive structure is designed for marathon runners or anyone seeking an ultra-durable jogger for long training sessions.',
    imagePath: '/mike-cox-NrhgewTdfF8-unsplash.jpg',
  },
];

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Link 
    href={`/product/${product.id}`}
    className="block group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg"
    aria-labelledby={`heading-${product.id}`}
  >
    <div className="relative h-[40rem] overflow-hidden rounded-lg transition-transform duration-300 hover:shadow-xl">
      <div className="absolute inset-0">
        <Image
          src={product.imagePath}
          alt={`${product.title} sports shoe`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform transition-transform duration-500 group-hover:scale-105"
          quality={85}
        />
      </div>
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/40"
        aria-hidden="true"
      >
        <div className="flex items-center justify-center h-full p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-md text-white">
            <h2 
              id={`heading-${product.id}`}
              className="mb-3 sm:mb-5 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
            >
              {product.title}
            </h2>
            <p className="mb-3 sm:mb-5 text-sm sm:text-base lg:text-lg">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const GridPics: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="mb-12 text-center">
        <p className="font-bold text-lg sm:text-2xl text-black">BEST FOREVER</p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          URBAN FAVOURITE
        </h1>
        <p className="italic font-bold text-xl sm:text-2xl text-black">
          The most selling shoes of all time.
        </p>
        </header>

        {/* Grid Section */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"
          role="list"
          aria-label="Featured products"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridPics;