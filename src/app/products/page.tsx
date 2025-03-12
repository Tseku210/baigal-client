"use client";
import dynamic from "next/dynamic";

const ProductsPage = dynamic(() => import("@/components/ProductsPage"), {
  ssr: false,
});

export default function Products() {
  return <ProductsPage />;
}
