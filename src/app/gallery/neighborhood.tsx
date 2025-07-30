import { NeighborhoodCarousel } from "@/app/gallery/(neighborhood)/carousel";

export const Neighborhood = () => {
  return (
    <section className="my-20">
      <header className="text-center mb-24">
        <h2 className="mb-5">The Neighborhood</h2>
        <h3 className="text-small md:text-medium xl:text-large">
          Wander its winding streets and soak in the magic.
        </h3>
      </header>

      <NeighborhoodCarousel />
    </section>
  );
};
