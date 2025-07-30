"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/interior-view-carousel";
import { InteriorViewsCarouselThumb } from "./carousel-thumb";


const images = [
  {
    src: "/images/interior-view-1.png",
    caption: "Explore the twisting and charming streets.",
  },
  {
    src: "/images/interior-view-2.png",
    caption: "Enter through a private entrance.",
  },
  {
    src: "/images/interior-view-3.png",
    caption: "Enjoy the stunning views.",
  },
  {
    src: "/images/interior-view-4.png",
    caption: "Sink into the plush comfort of the canopy bed.",
  },
];

export function InteriorViewsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index, true);
  };

  return (
    <div className="max-w-[1050px] mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center w-full"
            >
              <figure className="w-full max-w-[832px]">
                <div className="relative min-h-[411px] mb-4">
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption>{image.caption}</figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      <div className="flex justify-center gap-x-6 mt-16">
        {images.map((image, index) => (
          <InteriorViewsCarouselThumb
            imageSrc={image.src}
            key={index}
            onClick={() => goToSlide(index)}
            selected={index === current}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
