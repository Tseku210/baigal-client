import { ProductCard } from "../Products/ProductCard";

export function RecommendedProducts() {
  return (
    <div className="w-full space-y-5">
      <h3 className="font-bold text-lg">Санал болгож буй тангууд</h3>
      <div className="flex h-full flex-nowrap py-5 px-4 md:px-0 overflow-y-hidden overflow-x-auto gap-3 snap-x scroll-ps-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCard key={index} empty />
        ))}
      </div>
    </div>
  );
}
