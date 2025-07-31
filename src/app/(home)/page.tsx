import { Hero } from "@/app/(home)/hero";
import { Gallery } from "@/app/(home)/gallery";
import { About } from "@/app/(home)/about";
import { Getaway } from "@/app/(home)/getaway";

export default function HomePage() {
  return (
      <div className="mt-12">
        <Hero />
        <Gallery />
        <About />
        <Getaway />
      </div>
  );
}
