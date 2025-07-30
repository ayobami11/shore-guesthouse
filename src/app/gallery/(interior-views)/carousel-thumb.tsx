import Image from "next/image";

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
