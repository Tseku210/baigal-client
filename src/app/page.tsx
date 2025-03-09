import { HeroCarousal } from "@/components/Carousal";
import { Products } from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="flex-1 w-full space-y-10 mx-auto">
      <HeroCarousal />
      <Products />
    </div>
  );
}
