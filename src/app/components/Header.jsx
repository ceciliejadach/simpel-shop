"use client";

import Link from "next/link";

import { PiFlowerDuotone } from "react-icons/pi";
const Header = () => {
  return (
    <header className="col-start-3 col-end-6 grid grid-rows-1 ">
      <nav className="flex bg-primary-black text-secondary-gray mb-5 md:py-6 text-xl justify-between md:px-8 rounded-md">
        <Link href="/">
          <PiFlowerDuotone className="w-[3.5rem] h-[3.5rem] text-[--blue]" />
        </Link>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/">Forside</Link>
          </li>
          <li>
            <Link href="/products">Produkter</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
