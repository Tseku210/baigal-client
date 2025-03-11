"use client";
import { useUnderDevelopment } from "@/hooks/underDevelopment";

export function ProductsPage() {
  const { ref, overlay } = useUnderDevelopment();
  return <div ref={ref}>{overlay}developing...</div>;
}
