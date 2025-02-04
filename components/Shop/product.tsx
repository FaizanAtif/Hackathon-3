'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'

// Define types
type Product = {
  productName: string
  imageUrl: string
  inventory: number
  price: number
  slug: string
  category: string
  color?: string
  size?: string
}

type FilterState = {
  category: string
  color: string
  size: string
  minPrice: number
  maxPrice: number
}

const querry = `*[_type == 'product']{
  productName,
  "imageUrl": image.asset->url,
  inventory,
  price,
  "slug": slug.current,
  category
}`

const data = await client.fetch(querry)

const Product = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [sortBy, setSortBy] = useState('relevance')
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    color: 'all',
    size: 'all',
    minPrice: 20,
    maxPrice: 396
  })

  // Filter and sort products
  useEffect(() => {
    let result = [...products]

    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category)
    }

    if (filters.color !== 'all') {
      result = result.filter(product => product.color === filters.color)
    }

    if (filters.size !== 'all') {
      result = result.filter(product => product.size === filters.size)
    }

    result = result.filter(product => 
      product.price >= filters.minPrice && 
      product.price <= filters.maxPrice
    )

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.productName.localeCompare(b.productName))
        break
    }

    setFilteredProducts(result)
  }, [products, filters, sortBy])

  useEffect(() => {
    setProducts(data)
    setFilteredProducts(data)
  }, [])

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          {/* Categories */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              <button
                className={`block w-full text-left px-3 py-2 rounded ${
                  filters.category === 'all' ? 'bg-gray-100' : ''
                }`}
                onClick={() => setFilters({ ...filters, category: 'all' })}
              >
                All Products
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded ${
                  filters.category === 'Mens' ? 'bg-gray-100' : ''
                }`}
                onClick={() => setFilters({ ...filters, category: 'Mens' })}
              >
                Mens (10)
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded ${
                  filters.category === 'Sports' ? 'bg-gray-100' : ''
                }`}
                onClick={() => setFilters({ ...filters, category: 'Sports' })}
              >
                Sports (15)
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded ${
                  filters.category === 'Leather' ? 'bg-gray-100' : ''
                }`}
                onClick={() => setFilters({ ...filters, category: 'Leather' })}
              >
                Leather (6)
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded ${
                  filters.category === 'Fabric' ? 'bg-gray-100' : ''
                }`}
                onClick={() => setFilters({ ...filters, category: 'Fabric' })}
              >
                Fabric (8)
              </button>
            </div>
          </div>

          {/* Colors */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Colors</h2>
            <div className="space-y-2">
              {['all', 'pink', 'red', 'white', 'black', 'green'].map((color) => (
                <button
                  key={color}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    filters.color === color ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => setFilters({ ...filters, color })}
                >
                  <div className="flex items-center gap-2">
                    {color !== 'all' && (
                      <div
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color }}
                      />
                    )}
                    <span className="capitalize">
                      {color === 'all' ? 'All Colors' : color}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Price Range</h2>
            <div className="px-2">
              <Slider
                defaultValue={[filters.minPrice, filters.maxPrice]}
                max={396}
                min={20}
                step={1}
                onValueChange={([min, max]) => 
                  setFilters({ ...filters, minPrice: min, maxPrice: max })
                }
              />
              <div className="mt-2 text-sm">
                ${filters.minPrice} - ${filters.maxPrice}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div>
              Showing 16 of 21 Results
            </div>
            <Select 
              value={sortBy}
              onValueChange={(value:any) => setSortBy(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Top Selling</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

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
          </div>
        </div>
  
  )
}

export default Product