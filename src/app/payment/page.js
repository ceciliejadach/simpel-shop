// Aktiverer client rendering for denne komponent
"use client";

// Importerer nødvendige hooks og komponenter fra Next.js og React
import { useSearchParams } from "next/navigation"; // Henter query-parametre fra URL'en
import { useState, useEffect } from "react"; // State- og effect-hooks fra React
import useSWR from "swr"; // SWR-hook til data-fetching og caching
import Header from "../components/Header"; // Header-komponent

// Definerer en fetcher-funktion til SWR, som henter og konverterer API-responsen til JSON
const fetcher = (url) => fetch(url).then((res) => res.json());

const Payment = () => {
  // Henter query-parametrene fra URL’en (til at finde "items" fra URL'en)
  const searchParams = useSearchParams();
  const items = searchParams.get("items"); // Henter "items"-parameterværdien fra URL'en

  // Dekoder og parser "items"-dataen fra URL-parametrene
  const parseItems = (items) => {
    return JSON.parse(decodeURIComponent(items)); // Dekoder og parser JSON-stringen fra URL'en
  };

  const parsedItems = items ? parseItems(items) : []; // Initialiserer parsedItems hvis "items" eksisterer

  // Henter produkter fra API’et med SWR og fetcher-funktionen
  const { data } = useSWR("https://dummyjson.com/products", fetcher);

  // States til at gemme de valgte produkter og den totale pris
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect-hook til at filtrere produkter baseret på parsedItems, når data er tilgængelig
  useEffect(() => {
    if (data && parsedItems.length > 0) {
      const filteredProducts = parsedItems
        .map((item) => {
          // Matcher hvert item i parsedItems med dataen fra API'et
          const product = data.products.find((p) => p.id === item.id);
          return product ? { ...product, quantity: item.quantity } : null;
        })
        .filter((product) => product !== null); // Fjerner produkter, der ikke matcher

      console.log("Filtered Products:", filteredProducts); // Logger filtrerede produkter til fejlfinding

      setProducts(filteredProducts); // Opdaterer products-staten med filtrerede produkter
    }
  }, [items, data]); // Kører igen, hvis "items" eller "data" opdateres

  // useEffect-hook til at beregne den totale pris baseret på products
  useEffect(() => {
    if (products.length > 0) {
      // Beregner totalprisen for alle produkter (pris * mængde)
      const totalPrice = products.reduce(
        (accumulator, product) =>
          accumulator + product.price * product.quantity,
        0
      );
      setTotalPrice(totalPrice); // Opdaterer totalPrice-staten
    }
  }, [products]); // Kører igen, hvis products opdateres

  return (
    <section>
      <Header /> {/* Render Header-komponenten */}
      <div className="max-w-[80dvw] min-h-[80vh] m-auto">
        <div className="">
          <h1 className="text-subtitle py-4 px-1 my-3">Din kurv</h1>
        </div>

        {/* Viser en liste over produkter i kurven */}
        <ul className="flex flex-col gap-5 ">
          {products.map((product) => (
            <li key={product.id} className="grid grid-cols-[0.2fr_1fr]">
              <img
                src={product.thumbnail}
                alt={product.title}
                width={150}
                height={150}
              />
              <div className="grid h-fit self-center">
                <div className="text-2xl">{product.title}</div>
                <div>{product.brand}</div>
                <div>{product.price} $</div>
              </div>
            </li>
          ))}
        </ul>

        {/* Viser totalprisen og en betalingsknap */}
        <div>Du skal i alt betale: {totalPrice}</div>
        <button className="btn">Betal nu</button>
      </div>
    </section>
  );
};

export default Payment;
