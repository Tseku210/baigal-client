"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "../ui/carousel";
import Image from "next/image";

const coverImages: string[] = [
  "/images/covers/baigal-cover.jpg",
  "/images/covers/baigal-cover.jpg",
];

export const HeroCarousal = () => {
  const plugin = useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {coverImages.map((path, index) => (
          <CarouselItem key={index}>
            <div className="aspect-[16/9]">
              <Image src={path} alt="cover img" fill className="object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
};
