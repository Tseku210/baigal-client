import { HeroCarousal } from "@/components/Carousal";
import { FAQ } from "@/components/FAQ/FAQ";
import { Products } from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="flex-1 w-full space-y-10 md:space-y-20 mx-auto">
      <HeroCarousal />
      <Products />
      {/* <CallUs /> */}
      <FAQ />
    </div>
  );
}
