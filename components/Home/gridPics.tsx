import Link from 'next/link';
import React from 'react';

const GridPics = () => {
  return (
    <div>
      
    <div className="mb-10 mt-11 text-center">
        <p className="font-bold text-2xl mb-2">OUR FAVOURITE SHOES</p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          URBAN FAVOURITE
        </h1>
        <p className="italic font-bold text-2xl mt-2">
          They are the foundation of your next great look.
        </p>
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full  mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
      {/* First Grid Item */}
      <Link href={'/product/urban-racer'}>
     
      <div className="relative h-[40rem] sm:h-[40rem] md:h-[40rem] group overflow-hidden rounded-lg">
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat custom-img3 transform transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/40">
          <div className="flex items-center justify-center h-full p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-md text-white">
              <h1 className="mb-3 sm:mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Urban Racer
              </h1>
              <p className="mb-3 sm:mb-5 text-sm sm:text-base lg:text-lg">
              With a modern design and premium materials,
              the Urban Racer is made for city runners who need both style and functionality. 
              Its flexible, lightweight, and built for the hustle.
              </p>
            </div>
          </div>
        </div>
      </div>
      </Link>

      {/* Second Grid Item */}
      <Link href={'/product/track-master'}>
      <div className="relative h-[24rem] sm:h-[40rem] md:h-[40rem] group overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat custom-img4 transform transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/40">
          <div className="flex items-center justify-center h-full p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-md text-white">
              <h1 className="mb-3 sm:mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
               Track Master
              </h1>
              <p className="mb-3 sm:mb-5 text-sm sm:text-base lg:text-lg">
              The TrackMaster provides optimal support and shock absorption,
               ensuring a comfortable experience whether youre on the track or the pavement.
              </p>
            </div>
          </div>
        </div>
      </div>
      </Link>

      {/* third item */}
      <Link href={'/product/swift-stride'}>
      <div className="relative h-[24rem] sm:h-[40rem] md:h-[40rem] group overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat custom-img5 transform transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/40">
          <div className="flex items-center justify-center h-full p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-md text-white">
              <h1 className="mb-3 sm:mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Swift Stride
              </h1>
              <p className="mb-3 sm:mb-5 text-sm sm:text-base lg:text-lg">
              Engineered for high-performance, the SwiftStride combines soft cushioning with a responsive sole,
               perfect for long-distance joggers looking for a smooth ride..
              </p>
            </div>
          </div>
        </div>
      </div>
      </Link>
      {/* fourth item */}
      <Link href={'/product/enduro-jett'}>

      <div className="relative h-[24rem] sm:h-[40rem] md:h-[40rem] group overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat custom-img6 transform transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/40">
          <div className="flex items-center justify-center h-full p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-md text-white">
              <h1 className="mb-3 sm:mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Enduro Jett
              </h1>
              <p className="mb-3 sm:mb-5 text-sm sm:text-base lg:text-lg">
              Built for endurance, the EnduroJets lightweight yet supportive structure is designed for
               marathon runners or anyone seeking an ultra-durable jogger for long training sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
    </div>
  );
};

export default GridPics;