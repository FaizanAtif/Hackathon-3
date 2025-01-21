import Image from "next/image";
import pic1 from "@/public/pic1.jpg";
import pic2 from "@/public/pic2.jpg";
import pic3 from "@/public/pic3.jpg";
import pic4 from "@/public/pic4.jpg";
import pic5 from "@/public/pic5.jpg";

export default function ShopHero() {
  const imageArray = [
    { image: pic1, title: "Men's Shoes", items: "5 items" },
    { image: pic2, title: "Women's Shoes", items: "7 items" },
    { image: pic3, title: "Kids' Shoes", items: "6 items" },
    { image: pic4, title: "Sports Shoes", items: "8 items" },
    { image: pic5, title: "Baby Shoes", items: "4 items" },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-start text-black h-auto w-full pt-10 sm:pt-12 px-4 sm:px-8">
        {/* Main Title */}
        <h1 className="font-bold text-xl sm:text-3xl text-[#252B42] sm:ml-0 ml-0">
          Shop
        </h1>

        {/* Breadcrumbs Section */}
        <div className="flex flex-row justify-center sm:justify-start gap-2 sm:gap-4 mt-4 sm:mt-0">
          <h6 className="text-[#252B42]">Home</h6>
          <h6 className="text-xl text-[#737373]">&#62;</h6>
          <h6 className="text-[#737373]">Shop</h6>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row h-auto w-full mt-10 gap-8 sm:gap-3 justify-center sm:ml-[30px] ml-[130px] md:mb-28">
        {imageArray.map((category, i) => (
          <div
            key={i}
            className="relative w-[313px] sm:w-[200px] sm:h-[190px] h-auto transform transition-transform duration-300 hover:scale-105" // Wrapper for each image
          >
            {/* Image */}
            <Image
              src={category.image}
              alt={`Category Image ${i + 1}`}
              className="rounded-md object-cover w-full h-full"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white rounded-md transition-all duration-300 opacity-0 hover:opacity-100">
              <p className="text-lg font-semibold">{category.title}</p>
              <p className="text-sm">{category.items}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
