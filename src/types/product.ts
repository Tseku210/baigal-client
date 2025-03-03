export interface Product {
  slug: string;
  name: string;
  englishName: string;
  description: string;
  type: "тан" | "талх" | "үрэл";
  tag: string[];
  price: number;
  discount?: number;
  discountPrice?: number;
}

export interface ProductsByCategory {
  category: string;
  products: Product[];
}
