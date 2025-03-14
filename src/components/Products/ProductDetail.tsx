"use client";

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { RecommendedProducts } from "../RecommendedProducts";
import { useUnderDevelopment } from "@/hooks/underDevelopment";

const ProductDetail = ({ id }: { id: string }) => {
  const { ref, overlay } = useUnderDevelopment();
  console.log(id);

  return (
    <div ref={ref} className="container mx-auto mt-5 px-4 md:px-0">
      {overlay}
      <Button
        variant="ghost"
        icon={ArrowLeftIcon}
        iconPlacement="left"
        onClick={() => window.history.back()}
      >
        Буцах
      </Button>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
        <div className="w-full h-96 bg-gray-300 rounded-xl flex items-center justify-center">
          эмний зураг
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h1 className="text-xl font-bold">Гарчиг</h1>
            <h2 className="text-sm font-light text-gray-500">Тайлбар</h2>
            <p className="text-2xl font-black text-primary">5000₮</p>
          </div>
          <Button className="w-full font-bold mt-5" size="lg">
            99887766 захиалах
          </Button>
        </div>
      </motion.div>
      <div className="mt-10">
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default ProductDetail;
