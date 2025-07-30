import Image from "next/image";

export const Hero = () => {

  return (
    <header>
      <div className="relative w-full h-[606px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/75 before:z-10">
        <Image src="/images/home-hero.png" alt="" fill />

        <div data-aos="fade" className="text-white w-full p-20 text-center z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-small md:text-medium xl:text-large">
            Where Comfort and Charm Meet the Aegean
          </h1>
        </div>
      </div>
    </header>
  );
};
