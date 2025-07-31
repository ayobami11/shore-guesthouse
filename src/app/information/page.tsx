import Image from "next/image";

import { Header } from "@/app/header";
import { Hero } from "@/app/information/hero";
import { Story } from "@/app/information/story";
import { History } from "@/app/information/history";
import { Visit } from "@/app/information/visit";
import { Getaway } from "@/app/information/getaway";
import { Footer } from "@/app/footer";
import { AOSInit } from "../aos";

const InformationPage = () => {
  return (
    <>
    <AOSInit />
    <Header />
      <main className="mt-20">
        <Hero />
        <div className="mx-[10%]">
          <Story />
          <hr className="border-black" />
          <History />
        </div>
        <Visit />
        <div data-aos="fade" className="relative h-[150vh] mx-[10%] my-32">
          <Image src="/images/information-screen-img.png" alt="" fill />
        </div>
        <Getaway />
      </main>
      <Footer />
    </>
  );
};

export default InformationPage;
