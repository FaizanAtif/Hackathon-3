import Banner from "@/components/Home/Banner";
import Hero from "../components/Home/hero";
import { LatestCollections } from "../components/Home/latestCollections";
import ProductCarousel from "@/components/Home/productCarousel";
import GridPics from "@/components/Home/gridPics";
import Category from "@/components/Home/category";



export default function Home() {
  return (
   <div>
   <Hero/>
   <Category/>
   <LatestCollections/>
   <Banner/>
   <ProductCarousel/>
<GridPics/>

   </div>
  );
}
