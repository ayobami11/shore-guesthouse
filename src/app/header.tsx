"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useEffect, useState } from "react";

import { HamburgerMenu } from "@/app/hamburger-menu";

export const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // close hamburger menu when the user navigates to a different page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full bg-white flex justify-between items-center md:border-b md:border-b-black">
      <h1 className="pl-[2.5em]">
        <Link href="/">Shore Guesthouse</Link>
      </h1>

      <nav className="hidden md:block md:w-full md:max-w-[500px]">
        <ul className="flex w-full">
          <li className="grow flex text-center">
            <Link
              href="gallery"
              className="py-3.5 border-l border-l-black w-full"
            >
              Gallery
            </Link>
          </li>
          <li className="grow flex text-center">
            <Link
              href="information"
              className="py-3.5 border-l border-l-black w-full"
            >
              Information
            </Link>
          </li>
          <li className="grow flex text-center text-white bg-black hover:bg-[#e5cbad] hover:text-black">
            <Link
              href="#"
              className="py-3.5 border-l border-l-black w-full  hover:border-l-transparent"
            >
              Book now
            </Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleMenuVisibility}
        className={`p-3.5 border-l border-l-black border-b-black cursor-pointer md:hidden ${
          isMenuOpen ? "border-b-0" : "border-b border-b-black"
        }`}
      >
        Menu
      </button>

      <HamburgerMenu open={isMenuOpen} />
    </header>
  );
};
