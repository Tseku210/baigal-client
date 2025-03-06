import ProductDetail from "@/components/Products/ProductDetail";

// TODO: should use generateMetadata https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return <ProductDetail id={id} />;
}
