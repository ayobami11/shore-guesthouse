import { Hero } from "@/app/(home)/hero";
import { Gallery } from "@/app/(home)/gallery";
import { About } from "@/app/(home)/about";
import { Getaway } from "@/app/(home)/getaway";

export default function Home() {
  return (
    <main>
        <Hero />
        <Gallery />
        <About />
        <Getaway />
    </main>
      );
}
