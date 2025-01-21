import Banner from "@/components/Home/Banner";
import Hero from "../components/Home/hero";
import { LatestCollections } from "../components/Home/latestCollections";
import MovingCards from "../components/Home/movingCards";
import Product from "../components/Home/product";


export default function Home() {
  return (
   <div>
   <Hero/>
   <LatestCollections/>
   <Banner/>
   {/* <MovingCards/> */}
   <Product/>
   </div>
  );
}
