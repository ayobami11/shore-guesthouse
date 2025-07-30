"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

const images = [
  "/images/gallery-image-1.png",
  "/images/gallery-image-2.png",
  "/images/gallery-image-3.png",
  "/images/gallery-image-4.png",
];

const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {index + 1}
      </button>
    </div>
  );
};

export const InteriorViewsCarouselThumb = ({
  imageSrc,
  selected,
  index,
  onClick,
}: {
  imageSrc: string;
  selected: boolean;
  index: number;
  onClick: () => void;
}) => {
  return (
    <button
      key={index}
      onClick={onClick}
      className={`overflow-hidden transition-all relative duration-200 w-[66px] h-[66px] hover:-translate-y-2 hover:rotate-6 ${
        selected ? "border-8 border-[#e5cbad]" : "border-transparent opacity-50 cursor-pointer"
      }`}
    >
      <Image
        src={imageSrc}
        alt={`Thumbnail ${index + 1}`}
        fill
        className="object-cover"
      />
    </button>
  );
};
