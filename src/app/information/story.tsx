import Image from "next/image";

export const Story = () => {
  return (
    <section className="mt-34 mb-28 flex flex-col gap-8 md:flex-row">
      <header className="shrink-0 max-w-[570px] md:basis-1/2">
        <h2 className="text-small md:text-medium xl:text-large">My Story</h2>
      </header>
      <div className="max-w-[570px]">
        <p data-aos="fade-up" className="text-2xl leading-[1.3] mb-18">
          Shore Guesthouse is a dream come true, a labor of love inspired by the
          childhood summers I spent here with my grandparents. Their stories of
          Oia, the warmth of the island life, and the magic of this place have
          always stayed with me. Restoring this home has been a way to honor
          their memory and share the spirit of Oia with others.
        </p>
        <div data-aos="fade-up" className="relative min-h-[338px]  md:basis-1/2 md:min-h-[470px]">
          <Image src="/images/family.png" alt="" fill />
        </div>
      </div>
    </section>
  );
};
