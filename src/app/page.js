import Image from "next/image";
// import Header from "./components/Header";
import HeroImage from "./img/hero-image.png";
import Link from "next/link";

// export default function Home() {
//   return (
//     <section>
//       <Header />
//       <div className="grid gap-8 mb-9 md:grid-cols-2 max-w-screen-xl md:mx-auto">
//         <div className="grid gap-4 md:gap-0">
//           <div className="">
//             <h1 className="leading-none">
//               Velkommen til Bloom. <br /> <strong>Start din shopping!</strong>
//             </h1>
//             <Link href="/products">
//               <button className="btn mt-4">Se produkter</button>
//             </Link>
//           </div>
//         </div>
//         <Image src={HeroImage} alt="billede af en pige der shopper" />
//       </div>
//     </section>
//   );
// }

//Forside
export default function Home() {
  return (
    <main className="">
      <section className="max-w-screen-xl mx-auto text-center h-[70vh] grid place-content-center gap-4">
        <h1>Are you ready to shop?</h1>
        <h2>Explore all of our products and go crazy with your shopping!</h2>

        <Link className="bg-[#3C35FF] hover:bg-[#150DFF] text-white px-8 py-4 rounded-full w-fit justify-self-center" href="/products">
          Explore products
        </Link>
      </section>
      {/* <Image className="opacity-40 place-self-end mb-[5rem]" width={500} height={500} src={HeroImage} alt="billede af en pige der shopper" /> */}
    </main>
  );
}
