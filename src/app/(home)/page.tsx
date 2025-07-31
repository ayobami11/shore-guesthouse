import { Header } from "@/app/header";
import { Hero } from "@/app/(home)/hero";
import { Gallery } from "@/app/(home)/gallery";
import { About } from "@/app/(home)/about";
import { Getaway } from "@/app/(home)/getaway";
import { Footer } from "@/app/footer";
import { AOSInit } from "../aos";

export default function Home() {
  return (
    <>
      <AOSInit />
      <Header />
      <main className="mt-12">
        <Hero />
        <Gallery />
        <About />
        <Getaway />
      </main>
      <Footer />
    </>
  );
}
