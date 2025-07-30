import Image from "next/image";

import { Hero } from "@/app/gallery/hero";
import { ExteriorViews } from "@/app/gallery/exterior-views";
import { InteriorViews } from "@/app/gallery/interior-views";
import { Neighborhood } from "@/app/gallery/neighborhood";
import { Getaway } from "@/app/gallery/getaway";

const GalleryPage = () => {
  return (
    <main className="font-garamond mt-20">
      <Hero />
      <ExteriorViews />
      <InteriorViews />
      <Neighborhood />
      <div className="relative w-full h-[110vh] my-32">
        <Image src="/images/screen-img.png" alt="" fill />
      </div>
      <Getaway />
    </main>
  );
};

export default GalleryPage;
