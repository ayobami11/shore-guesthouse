import Image from "next/image";

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
  );
}
