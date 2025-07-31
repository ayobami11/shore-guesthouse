import Image from "next/image";
import { roboto } from "@/app/layout";

export const Getaway = () => {
  return (
    <div className="relative px-8 py-10 w-full h-[606px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/60 before:z-10">
      <Image src="/images/home-getaway.png" alt="" fill />

      <div className="z-20 absolute">
        <h2 className="mb-4 text-white">Plan Your Dream Getaway:</h2>
        <h3 className="text-small text-white mb-6 md:text-medium xl:text-large">
          Summer 2025 Dates Available
        </h3>
        <button className={`${roboto.className} text-black bg-white rounded-4xl px-8 py-4 cursor-pointer transition ease-in-out hover:bg-[#e5cbad]`}>
          Book now
        </button>
      </div>
    </div>
  );
};
