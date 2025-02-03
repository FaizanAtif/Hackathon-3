
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const querry = `*[_type == 'product']{
  productName,
  "imageUrl": image.asset->url,
  inventory,
  price,
  "slug": slug.current,
  category
}
`

const data = await client.fetch(querry)

const Product = () => {
  return (
    <div>
      
    <div className='grid grid-cols-1 mt-20 md:grid-cols-3 gap-12 mb-11'>
      
    { 
       data.map((val:any,i:any)=>(
        <div className="h-[67ch]"key={i}>
          <Link href={`/product/${val.slug}`}>

      <div className="card bg-base-100 shadow-sm h-[65ch]">
  <figure>
    <Image width={450} height={280}
      src= {val.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">

    <h2 className="card-title text-start">
      {val.productName}

      <div className="badge badge-sm bg-slate-200 text-black">NEW</div>
    </h2>
      
     <p className=''>In Stock {val.inventory}</p>
    <h1 className="scroll-m-20 text-xl font-bold tracking-tight"> Price: ${val.price}</h1>
    <div className="card-actions justify-end">
     
      <Button className="bg-gray-300 text-black hover:bg-gray-700 hover:text-white font-semibold w-[195px]">Add to Cart</Button>
      <Button className="bg-red-600 w-[165px]">Buy Now</Button>
    </div>
  </div>
</div>

  </Link>
  </div>
))} </div>
</div>
)
}
  


export default Product