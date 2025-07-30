import Image from "next/image";

export const Hero = () => {
  return (
    <header>
      <h1 className="text-[3.5rem] mt-16 ml-4 mb-2 md:ml-10 md:mt-48 md:text-[5rem]">
        Information
      </h1>

      <div className="relative w-full h-[606px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/40 before:z-10">
        <Image src="/images/information-hero.png" alt="" fill />

        <div
          data-aos="fade"
          className="text-white p-10 w-full text-center z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[920px]"
        >
          <h2 className="text-small md:text-medium xl:text-large">
            This house, and this village, have been a part of our lives for
            generations.
          </h2>
        </div>
      </div>
    </header>
  );
};
