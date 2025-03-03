import { HeroCarousal } from "@/components/Carousal";
import { Products } from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="space-y-10 container mx-auto">
      <HeroCarousal />
      <Products />
    </div>
  );
}
