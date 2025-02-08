"use client";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMemo } from 'react';

type Product = {
  productName: string;
  imageUrl: string;
  inventory: number;
  price: number;
  slug: string;
  category: string;
  color?: string;
  size?: string;
};

type FilterState = {
  category: string;
  color: string;
  size: string;
  minPrice: number;
  maxPrice: number;
};

const query = `*[_type == 'product']{
  productName,
  "imageUrl": image.asset->url,
  inventory,
  price,
  "slug": slug.current,
  category
}`;

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to store products
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    color: 'all',
    size: 'all',
    minPrice: 20,
    maxPrice: 396,
  });

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Fetch products from Sanity inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(query);
      setProducts(data); // Set the fetched data to products state
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array to fetch once when component mounts

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];
  
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
  
    if (filters.color !== 'all') {
      result = result.filter(product => product.color === filters.color);
    }
  
    if (filters.size !== 'all') {
      result = result.filter(product => product.size === filters.size);
    }
  
    result = result.filter(product =>
      product.price >= filters.minPrice && product.price <= filters.maxPrice
    );
  
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.productName.localeCompare(b.productName));
        break;
    }
  
    return result;
  }, [products, filters, sortBy]);  // Yeh sirf jab filters ya sorting change hogi tab run hoga


  // Generate array of page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          {/* Categories */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              {['all', 'Mens', 'Sports', 'Leather', 'Fabric'].map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left px-3 py-2 rounded ${filters.category === category ? 'bg-gray-100' : ''}`}
                  onClick={() => setFilters({ ...filters, category })}
                  aria-label={`Filter by ${category}`}
                >
                  {category === 'all' ? 'All Products' : `${category}`}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Colors</h2>
            <div className="space-y-2">
              {['all', 'pink', 'red', 'white', 'black', 'green'].map((color) => (
                <button
                  key={color}
                  className={`block w-full text-left px-3 py-2 rounded ${filters.color === color ? 'bg-gray-100' : ''}`}
                  onClick={() => setFilters({ ...filters, color })}
                  aria-label={`Filter by ${color}`}
                >
                  <div className="flex items-center gap-2">
                    {color !== 'all' && (
                      <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }} />
                    )}
                    <span className="capitalize">{color === 'all' ? 'All Colors' : color}</span>
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
                aria-label="Price range slider"
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
            <div>Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} Results</div>
            <Select value={sortBy} onValueChange={(value: string) => setSortBy(value)}>
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


          {/* Main products */}

          <div className="grid grid-cols-1 mt-20 md:grid-cols-3 gap-12 mb-11">
            {currentProducts.map((val: Product, i: number) => (
              <div className="h-[67ch]" key={i}>
                <Link href={`/product/${val.slug}`}>
                  <div className="card bg-base-100 shadow-sm h-[65ch]">
                    <figure>
                      <Image width={450} height={280} src={val.imageUrl} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-start">
                        {val.productName}
                        <div className="badge badge-sm bg-slate-200 text-black">NEW</div>
                      </h2>
                      <p>In Stock {val.inventory}</p>
                      <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
                        Price: ${val.price}
                      </h1>
                      <div className="card-actions justify-end">
                        <Button className="bg-gray-300 text-black hover:bg-gray-700 hover:text-white font-semibold w-[195px]">
                          Add to Cart
                        </Button>
                        <Button className="bg-red-600 w-[165px]">Buy Now</Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-11 mb-11 md:mr-80">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>

                {getPageNumbers().map((pageNum) => (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      onClick={() => setCurrentPage(pageNum)}
                      isActive={currentPage === pageNum}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;