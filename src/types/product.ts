export interface Product {
  image: string;
  slug: string;
  name: string;
  englishName: string;
  description: string;
  type: "тан" | "талх" | "үрэл";
  tags: string[];
  price: number;
  discount?: number;
  discountPrice?: number;
}

export interface ProductsByCategory {
  category: string;
  products: Product[];
}
