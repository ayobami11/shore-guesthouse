import Image from "next/image";
import { roboto } from "@/app/fonts";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <p>Shore Guesthouse</p>

      <div className="w-[50px] h-px relative my-6">
        <Image src="images/imgi_21_default.svg" alt="" fill />
      </div>

      <div className={`${roboto.className} mb-20`}>
        <p>&copy; 2025 All Rights Reserved</p>
        <address className="not-italic">
          <a
            href="mailto:hello@figma.com"
            className="underline decoration-1 block my-1.5"
          >
            hello@figma.com
          </a>
          <a href="#" className="block">
            (646) 555-4567
          </a>
        </address>
      </div>

      <div className="w-full h-px relative">
        <Image src="images/imgi_21_default.svg" alt="" fill />
      </div>

      <div className="flex gap-x-4 my-4">
        <Image src="/images/facebook.svg" alt="" width={18} height={18} />
        <Image src="/images/instagram.svg" alt="" width={18} height={18} />
        <Image src="/images/tiktok.svg" alt="" width={18} height={18} />
        <Image src="/images/youtube.svg" alt="" width={18} height={18} />
      </div>
    </footer>
  );
};
