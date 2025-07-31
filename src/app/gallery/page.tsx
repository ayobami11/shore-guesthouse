import Image from "next/image";

import { Header } from "@/app/header";
import { Hero } from "@/app/gallery/hero";
import { ExteriorViews } from "@/app/gallery/exterior-views";
import { InteriorViews } from "@/app/gallery/interior-views";
import { Neighborhood } from "@/app/gallery/neighborhood";
import { Getaway } from "@/app/gallery/getaway";
import { Footer } from "@/app/footer";
import { AOSInit } from "../aos";

const GalleryPage = () => {
  return (
    <>
    <AOSInit />
      <Header />
      <main className="mt-20">
        <Hero />
        <ExteriorViews />
        <InteriorViews />
        <Neighborhood />
        <div className="relative w-full h-[110vh] my-32">
          <Image src="/images/screen-img.png" alt="" fill />
        </div>
        <Getaway />
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
