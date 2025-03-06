import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card
        className={cn(
          "min-w-40 max-w-60 overflow-hidden hover:shadow-lg",
          className,
        )}
      >
        <CardHeader className="relative aspect-square overflow-clip">
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover transition-transform group-hover:scale-110"
            fill
          />
        </CardHeader>
        <CardContent className="p-2 space-y-2">
          <div className="flex flex-nowrap no-scrollbar overflow-x-auto gap-1">
            {product.tags.map((tag, i) => (
              <Badge variant="outline" key={i}>
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-xl font-medium capitalize">{product.name}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
