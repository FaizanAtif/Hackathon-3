import AnimatedButton from '@/components/ui/animated-button'
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
      <h2 className="max-w-7xl text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mx-auto text-center mt-36">
      ⚡ Flash Sale ⚡
      </h2>
    
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
      <AnimatedButton/>
      <Button className="bg-blue-600 w-[155px]">Buy Now</Button>
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