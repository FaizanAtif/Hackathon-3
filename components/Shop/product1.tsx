'use client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { useCart } from '@/app/store/hooks/useCart';
import Head from 'next/head';

interface Product {
  _id: string;
  productName: string;
  description: string;
  colors: string[];
  inventory: number;
  status: string;
  price: number;
  imageUrl: string;
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      productName,
      description,
      colors,
      inventory,
      status,
      price,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );
}

export const getServerSideProps: GetServerSideProps<{ product: Product | null }> = async (context) => {
  const { slug } = context.params as { slug: string };
  const product = await getProduct(slug);
  return {
    props: {
      product,
    },
  };
};

export function ProductPage({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { addToCart } = useCart();



  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      title: product.productName,
      description: product.description,
      price: product.price,
      image: product.imageUrl,
    });

    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-right",
      showConfirmButton: false,
      timer: 3000,
      background: "#ff2623",
      color: "#000000",
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Added to cart!"
    });
  };

  return (
    <>
      <Head>
        <title>{product.productName} - Sneaker Spot</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content="sneakers, shoes, footwear" />
        <meta property="og:title" content={`${product.productName} - Sneaker Spot`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl} />
        <meta property="og:type" content="product" />
      </Head>
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {/* Product Image */}
              <Image
                alt={product.productName}
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.imageUrl}
                width={500}
                height={500}
                priority
              />
              {/* Product Details */}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">SNEAKER SPOT</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.productName}
                </h1>
                {/* Reviews */}
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-orange-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-orange-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                {/* Product Description */}
                <p className="leading-relaxed">{product.description}</p>
                {/* Color and Size Selection */}
                <div className="flex mt-6 items-center pb-5 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    {product.colors?.map((color, i) => (
                      <button
                        key={i}
                        className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-orange-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Quantity and Price */}
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-600 text-lg">Quantity</span>
                  <span className="ml-auto text-gray-900">{product.inventory}</span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className="flex ml-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductPage;