import Image from "next/image";
import Header from "./components/Header";
import HeroImage from "./img/hero-image.png";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Header />
      <div className="grid gap-8 mb-9 md:grid-cols-2 max-w-screen-xl md:mx-auto">
        <div className="grid gap-4 md:gap-0">
          <div className="">
            <h1 className="">
              Velkommen til Bloom. <strong>Start din shopping!</strong>
            </h1>
            <Link href="/products">
              <button className="btn mt-4">Se produkter</button>
            </Link>
          </div>
        </div>
        <Image src={HeroImage} alt="billede af en pige der shopper" />
      </div>
    </section>
  );
}
