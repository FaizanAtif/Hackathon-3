'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

type Product = {
  productName: string;
  imageUrl: string;
  price: number;
  slug: string;
};

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (query) {
      const fetchProducts = async () => {
        const result = await client.fetch<Product[]>(
          `*[_type == "product" && lower(productName) match lower($searchQuery)]{
            productName,
            "imageUrl": image.asset->url,
            price,
            "slug": slug.current
          }`,
          { searchQuery: `*${query}*` }
        );
        setProducts(result);
      };

      fetchProducts();
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for {query}</h1>
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