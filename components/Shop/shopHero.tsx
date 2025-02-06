import React from 'react';
import Image from 'next/image';
import shopBanner from '@/public/shoeBanner.png';
import Link from 'next/link';

const ShopHero: React.FC = () => {
  return (
    <Link href={'/product/nike-dri-fit-uv-hyverse'}>
      <section className="bg-gray-100 mb-11 antialiased dark:bg-gray-900 md:py-4">
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
          {/* Hero Content */}
          <div className="px-10 mt-16 md:col-span-7 md:text-start md:ml-28 text-center md:mt-36">
            <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Limited Time Offer!
            </h1>
            <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-red-600 md:text-5xl xl:text-6xl">
              Up to 50% OFF!
            </h1>
            <p className="max-w-2xl text-black dark:text-gray-400 md:text-lg lg:text-xl">
              Dont Wait - Limited Stock at Unbeatable Prices!
            </p>
          </div>

          {/* Hero Image */}
          <div className="md:col-span-5 flex justify-center md:justify-end md:ml-20 mt-8 md:mt-0">
            <Image
              className="dark:hidden"
              src={shopBanner} // Replace with your image path
              alt="Limited Time Offer"
              width={500} // Set appropriate width
              height={300} // Set appropriate height
              priority // Optional: Prioritize loading for above-the-fold images
            />
            <Image
              className="hidden dark:block"
              src={shopBanner} // Replace with your image path
              alt="Limited Time Offer"
              width={500} // Set appropriate width
              height={300} // Set appropriate height
              priority // Optional: Prioritize loading for above-the-fold images
            />
          </div>
        </div>
      </section>
    </Link>
  );
};

export default ShopHero;