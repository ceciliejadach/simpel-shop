import Link from "next/link";
// import { PiFlowerDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer grid p-8 ">
      <div className="pt-8 px-4 flex flex-col gap-4 md:flex-row md:self-center md:justify-between md:max-w-screen-md md:pl-4 text-white">
        <Link href={"/"}>
          {/* <PiFlowerDuotone className="w-[3.5rem] h-[3.5rem] text-white" /> */}
          <strong className="text-2xl">Bloom</strong>
        </Link>
        <div className="">
          <h2>Kontakt os</h2>
          <p>Tlf: +45 33113311</p>
          <p>Lokation: København</p>
        </div>
        <div className="">
          <h2>Hjemmeside</h2>
          <Link href="/">
            <p className="hover:underline">Forside</p>
          </Link>
          <Link href="/products">
            <p className=" hover:underline">Produkter</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
