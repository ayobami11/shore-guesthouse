import Link from "next/link";

export const HamburgerMenu = ({ open }: { open: boolean }) => {
  return (
    <nav
      className={`fixed w-full border-t border-t-black bg-white z-50 top-[52px] md:hidden ${
        open ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col text-center">
        <li className="flex ">
          <Link href="/gallery" className="py-[1.6875rem] w-full">
            Gallery
          </Link>
        </li>
        <li className="flex">
          <Link href="/information" className="py-[1.6875rem] w-full">
            Information
          </Link>
        </li>
        <li className="flex">
          <Link
            href="#"
            className="py-[1.6875rem] w-full text-white bg-black hover:bg-[#e5cbad] hover:text-black"
          >
            Book now
          </Link>
        </li>
      </ul>
    </nav>
  );
};
