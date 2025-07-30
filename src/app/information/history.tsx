import Image from "next/image";

export const History = () => {
  return (
    <section className="mt-34 mb-28 flex flex-col gap-8 md:flex-row">
      <header className="shrink-0 max-w-[570px] md:basis-1/2">
        <h2 className="text-small md:text-medium xl:text-large">
          History of the Neighbourhood
        </h2>
      </header>
      <div className="max-w-[570px]">
        <figure>
          <div className="relative min-h-[338px] mb-3 border-100 border-[#e5cbad] md:basis-1/2 md:min-h-[470px]">
            <Image
              src="/images/information-hero.png"
              alt=""
              fill
            />
          </div>
          <figcaption>Original neighbourhood</figcaption>
        </figure>
        <p className="text-2xl leading-[1.3] my-18">
          Oia is a living, breathing village. Wander the streets and you&apos;ll find
          hidden courtyards and locals chatting over coffee. Skip the fancy
          restaurants and enjoy today&apos;s catch at a family-run taverna. Catch the
          sunset for a moment of peace. And, if you can, strike up a
          conversation with a local - they&apos;ll tell you stories of Oia that no
          guidebook can.
        </p>
      </div>
    </section>
  );
};
