import Image from "next/image";

export const ExteriorViews = () => {
  return (
    <section className="my-24 mx-[5%]">
      <header className="text-center mb-24">
        <h2 className="mb-5">Exterior Views</h2>
        <h3 className="text-small md:text-medium xl:text-large">
          Welcome to Shore Guesthouse.
        </h3>
      </header>
      <div>
        <div data-aos="fade-up" className="flex flex-col justify-center gap-12 mb-24 md:flex-row">
          <figure className="grow max-w-[450px]">
            <div className="relative w-full h-[260px] mb-4.5">
              <Image src="/images/exterior-view-1.png" alt="" fill />
            </div>
            <figcaption>A haven lies behind the blue door.</figcaption>
          </figure>
          <figure className="grow max-w-[450px]">
            <div className="relative w-full h-[540px] mb-4.5">
              <Image src="/images/exterior-view-2.png" alt="" fill />
            </div>
            <figcaption>The Lounge Room.</figcaption>
          </figure>
        </div>
        <figure data-aos="fade-up">
          <div className="relative w-full h-[800px] mb-4.5">
            <Image src="/images/exterior-view-3.png" alt="" fill />
          </div>
          <figcaption>The Outer Deck.</figcaption>
        </figure>
      </div>
    </section>
  );
};
