import Image from "next/image";
import Link from "next/link";

export const Gallery = () => {
  return (
    <section className="my-16 mx-4 max-w-[1160px] md:mx-10">
      <header className="bg-[#f7f7f7] mb-13 py-10 px-[1.875rem]">
        <h2 className="mb-7">Gallery</h2>
        <h3 className="text-[1.75rem] mb-4 md:text-[2.4375rem] xl:text-5xl">
          Experience Shore Guesthouse.
        </h3>
        <p>
          <Link
            href="/gallery"
            className="text-[#0075ff] text-[1.75rem] hover:text-[3.5rem] hover:decoration-1 hover:underline-offset-5 md:text-[2.4375rem] xl:text-5xl xl:underline xl:decoration-2 xl:underline-offset-5 xl:hover:text-5xl xl:hover:underline-offset-8"
          >
            View full gallery
          </Link>
        </p>
      </header>

      <div className="max-w-screen overflow-hidden">
        <div className="flex items-center gap-x-18 max-w-screen animate-marquee-effect-home">
          <figure>
            <div className="relative w-[151px] h-[145px]">
              <Image src="/images/gallery-image-1.png" alt="" fill />
            </div>
            <figcaption className="mt-2">Unwind in our lounge room.</figcaption>
          </figure>
          <figure>
            <div className="relative w-[211px] h-[203px]">
              <Image src="/images/gallery-image-2.png" alt="" fill />
            </div>
            <figcaption className="mt-2">Explore the open sea.</figcaption>
          </figure>
          <figure>
            <div className="relative w-[342px] h-[329px]">
              <Image src="/images/gallery-image-3.png" alt="" fill />
            </div>
            <figcaption className="mt-2">A haven lies behind the blue door.</figcaption>
          </figure>
          <figure>
            <div className="relative w-[242px] h-[221px]">
              <Image src="/images/gallery-image-4.png" alt="" fill />
            </div>
            <figcaption className="mt-2">Enjoy a drink by the pool.</figcaption>
          </figure>
          <figure>
            <div className="relative w-[200px] h-[169px] bg-[#4a362d] p-10">
              <Image src="/images/gallery-image-5.png" alt="" fill />
            </div>
            <figcaption className="mt-2">
              Sink into the plush comfort of the canopy bed.
            </figcaption>
          </figure>
          <figure>
            <div className="relative w-[151px] h-[145px]">
              <Image src="/images/gallery-image-1.png" alt="" fill />
            </div>
            <figcaption className="mt-2">Unwind in our lounge room.</figcaption>
          </figure>
          <figure>
            <div className="relative w-[211px] h-[203px]">
              <Image src="/images/gallery-image-2.png" alt="" fill />
            </div>
            <figcaption className="mt-2">Explore the open sea.</figcaption>
          </figure>
          <figure>
            <div className="relative w-[342px] h-[329px]">
              <Image src="/images/gallery-image-3.png" alt="" fill />
            </div>
            <figcaption className="mt-2">A haven lies behind the blue door.</figcaption>
          </figure>
          <figure>
            <div className="relative w-[242px] h-[221px]">
              <Image src="/images/gallery-image-4.png" alt="" fill />
            </div>
            <figcaption className="mt-2">Enjoy a drink by the pool.</figcaption>
          </figure>
          <figure>
            <div className="relative w-[200px] h-[169px]">
              <Image src="/images/gallery-image-5.png" alt="" fill />
            </div>
            <figcaption className="mt-2">
              Sink into the plush comfort of the canopy bed.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
