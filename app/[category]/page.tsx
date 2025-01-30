import Image from 'next/image'
import React from 'react'

const Category = () => {
  return (
    <div>
<div className="mb-10 mt-11 text-center">
        <p className="font-bold text-2xl mb-2">OUR FAVOURITE SHOES</p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          URBAN FAVOURITE
        </h1>
        <p className="italic font-bold text-2xl mt-2">
          "They are the foundation of your next great look."
        </p>
      </div>
      {/* category here */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div>
          <Image src="/images/1.jpg" alt="" width={500} height={500} />
        </div>


      </div>

    </div>
  )
}

export default Category