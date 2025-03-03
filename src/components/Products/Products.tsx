import { ProductsByCategory } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { Button } from "../ui/button";
import { ChevronRight, SearchIcon } from "lucide-react";

const productsList: ProductsByCategory[] = [
  {
    category: "Бэстселлер",
    products: [
      {
        slug: "uzem-7",
        name: "Үзэм-7",
        englishName: "Uzem-7",
        type: "үрэл",
        tag: ["зүрх", "ходоод"],
        description: "нэг юманд уунаа",
        price: 5000,
      },
    ],
  },
];
export const Products = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="flex flex-col mb-10 justify-center items-center gap-3">
        <h2 className="text-4xl text-muted-foreground text-center">
          Хэрэгтэй тангаа хайгаад үзээрэй
        </h2>
        <Button
          variant="default"
          effect="expandIcon"
          iconPlacement="right"
          icon={SearchIcon}
          size="lg"
          className="w-fit rounded-full"
        >
          Бүх танг үзье
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 10 }).map((item, index) => (
          <ProductCard key={index} />
        ))}
        {productsList.map((item) => (
          <div key={item.category} className="w-full">
            <div className="flex items-center">
              <h2 className="flex-1 font-bold text-2xl">{item.category}</h2>
              <Button variant="link" className="transition-all">
                Дэлгэрэнгүй
              </Button>
            </div>
            <div className="overflow-x-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
