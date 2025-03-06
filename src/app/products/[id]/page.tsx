import ProductDetail from "@/components/Products/ProductDetail";

// TODO: should use generateMetadata https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProductDetail id={slug} />;
}
