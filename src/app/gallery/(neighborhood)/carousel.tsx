"use client";

import Image from "next/image";

import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/images/neighborhood-1.png",
  "/images/neighborhood-2.png",
  "/images/neighborhood-3.png",
  "/images/neighborhood-4.png",
  "/images/neighborhood-5.png",
  "/images/neighborhood-6.png",
  "/images/neighborhood-1.png",
  "/images/neighborhood-2.png",
  "/images/neighborhood-3.png",
  "/images/neighborhood-4.png",
  "/images/neighborhood-5.png",
  "/images/neighborhood-6.png"
]

export function NeighborhoodCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-x-18 w-max animate-marquee-effect">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className="relative w-[488px] h-[346px] mx-2 nth-of-type-6:border-[60px] nth-of-type-6:border-[#e5cbad]"
          >
            <Image
              src={imageSrc}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    // <Carousel
    //   plugins={[plugin.current]}
    //   className="w-full"
    //   onMouseEnter={plugin.current.stop}
    //   onMouseLeave={plugin.current.reset}
    //   opts={{
    //     align: "start",
    //     loop: true,
    //   }}
    // >
    //   <CarouselContent>
    //     {images.map((imageSrc, index) => (
    //       <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
    //         <div className="relative w-[488px] h-[346px]">
    //           <Image src={imageSrc} alt={`Image ${index}`} fill />
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
  );
}
