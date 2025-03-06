"use client";

import { ProductCard } from "./ProductCard";
import { Button } from "../ui/button";
import { CrownIcon, ShieldPlus } from "lucide-react";
import { productsList } from "@/constants/productsData";
import { motion } from "motion/react";

export const Products = () => {
  return (
    <div className="container mx-auto ">
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        viewport={{ once: true, amount: 0.8 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        className="flex flex-col mb-10 justify-center items-center gap-5 bg-radial-[at_50%_50%] from-primary/20 via-transparent to-transparent"
      >
        <h2 className="text-3xl text-muted-foreground text-center">
          Хэрэгтэй тангаа хайгаад үзээрэй
        </h2>
        <Button
          variant="default"
          effect="expandIcon"
          iconPlacement="right"
          icon={ShieldPlus}
          size="lg"
          className="w-fit rounded-full"
        >
          Бүх танг үзье
        </Button>
      </motion.div>
      <div>
        {productsList.map((item) => (
          <div key={item.category} className="w-full">
            <div className="flex items-center">
              <h2 className="flex-1 font-bold text-2xl inline-flex items-center gap-2">
                <span className="text-yellow-400">
                  <CrownIcon />
                </span>
                {item.category}
              </h2>
              <Button variant="link" className="transition-all">
                Дэлгэрэнгүй
              </Button>
            </div>
            <motion.div
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.2,
                  },
                },
                hidden: { opacity: 0, transition: { when: "afterChildren" } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex h-full flex-nowrap items-center justify-center py-5 overflow-y-hidden overflow-x-auto gap-3 snap-x"
            >
              {item.products.map((product, i) => (
                <motion.div
                  key={product.slug + i}
                  variants={{
                    visible: {
                      opacity: 1,
                      translateY: 0,
                    },
                    hidden: {
                      opacity: 0,
                      translateY: 10,
                    },
                  }}
                  className="snap-start h-full"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
