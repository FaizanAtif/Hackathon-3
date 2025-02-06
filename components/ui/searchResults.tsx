'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

// Define the Product type
type Product = {
  productName: string;
  imageUrl: string;
  price: number;
  slug: string;
};

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query'); // Get the search query from URL parameters
  const [products, setProducts] = useState<Product[]>([]); // State to hold the fetched products

  useEffect(() => {
    if (query) {
      const fetchProducts = async () => {
        // Fetch products from Sanity using the query
        const result = await client.fetch<Product[]>(
          `*[_type == 'product' && productName match $query]{
            productName,
            "imageUrl": image.asset->url,
            price,
            "slug": slug.current
          }`,
          { query: `*${query}*` } // Use wildcard search for partial matches
        );
        setProducts(result); // Update the state with the fetched products
      };
      fetchProducts();
    }
  }, [query]); // Re-run effect when query changes

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.slug} href={`/product/${product.slug}`}>
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <Image
                  width={450}
                  height={280}
                  src={product.imageUrl}
                  alt={product.productName}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <h1 className="text-xl font-bold tracking-tight">
                  Price: ${product.price}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {products.length === 0 && (
        <p className="mt-4">No products found for your search.</p>
      )}
    </div>
  );
};

export default SearchPage;