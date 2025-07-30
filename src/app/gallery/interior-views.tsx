import { InteriorViewsCarousel } from "@/app/gallery/(interior-views)/carousel";

export const InteriorViews = () => {
  return (
    <section className="p-20 bg-[#2f3344] text-white">
      <header className="text-center mb-24">
        <h2 className="mb-5">Interior Views</h2>
        <h3 className="text-small md:text-medium xl:text-large">
          Uncover the guesthouse&apos;s charm and character.
        </h3>
      </header>
      <InteriorViewsCarousel />
    </section>
  );
};
