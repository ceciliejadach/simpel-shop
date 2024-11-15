// Aktiverer client-side rendering for denne komponent
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Header from "./Header";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

// Definerer ProductList-komponenten med initiale produkter og kategorier som props, dem vi fik fra products page siden
const ProductList = ({ initialProducts, categories }) => {
  // State til at gemme de aktuelle produkter, valgte filter, og varer i kurven
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState("all"); //som default er alle produkter vist, da vi ikke har valgt noget filter endnu, vi kunne foreksempel have skrevet beauty, og så ville alle produkter med beauty som categori blive vist hver gang siden loades
  const [items, setItems] = useState([]); //vores array i vores basket/kurv starter med at være tomt ved sidens load

  let basketCounter;

  // Funktion til at tilføje et produkt til kurven
  function addItem(product) {
    const newItem = {
      id: product.id, // Produkt-ID
      text: product.title, // Produktets titel
      completed: false,
      price: product.price, // Produktets pris
      tag: product.tags, // Produktets tags/kategorier
      image: product.thumbnail, // Produktets billede
    };
    // Opdaterer basketCounter til at reflektere antallet af varer i kurven
    basketCounter = 1 + newItem.length; //Denne linje sætter basketCounter til værdien 1 plus længden af newItem som er vores array, jeg tror man kunne have skrevet items.lenght + 1, da den så ville lægge det til vores array for kurven, men er ik sikker:))
    console.log("counter", basketCounter);
    setItems((prevItems) => [...prevItems, newItem]); // Tilføjer varen til items-state
    console.log("Added item:", newItem); // Logger varen til konsollen for fejlfinding
  }

  // useEffect der kører, når items opdateres, for at logge opdaterede varer
  useEffect(() => {
    console.log("Updated items:", items);
  }, [items]);

  // useEffect der kører, når filter ændres
  useEffect(() => {
    if (filter !== "all") {
      fetchFilteredProducts(filter); // Henter produkter baseret på det valgte filter
    } else {
      setProducts(initialProducts); // Sætter produkter til de initiale, hvis filter er "all"
    }
  }, [filter, initialProducts]);

  // Funktion der henter produkter fra en bestemt kategori
  async function fetchFilteredProducts(category) {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await res.json();
    setProducts(data.products); // Opdaterer products-state med filtrerede produkter
  }

  // Funktion til at fjerne en vare fra kurven baseret på dens id
  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Header-komponent med props for kurvens antal varer og funktion til at slette varer */}
      <Header
        basketCounter={basketCounter}
        items={items}
        setItems={setItems}
        deleteItem={deleteItem}
      />

      <div className="">
        <div className="max-w-5xl mx-auto">
          {/* Dropdown-menu til valg af kategori */}
          <label htmlFor="categorySelect"></label>
          <select
            className="border-solid border-[1px] border-[--blue] px-1 py-2 rounded-md text-[--blue]"
            id="categorySelect"
            onChange={(e) => setFilter(e.target.value)} // Opdaterer filter state ved valg
            value={filter}
          >
            <option value="all">Alle kategorier</option>
            {categories.map((category, index) => (
              <option
                key={category.id || index}
                value={category.name || category}
              >
                {category.name || category}
              </option>
            ))}
          </select>
        </div>

        {/* Grid-layout til at vise alle produkter */}
        <div className="pt-10 grid grid-cols-[repeat(2,minmax(0,325px))] justify-center gap-2 col-span-full mx-2 md:grid-cols-[repeat(3,minmax(0,325px))] md:col-span-full lg:col-start-1 lg:col-end-7 lg:row-start-2 md:gap-8">
          {products.map((product) => (
            <div
              className="p-4 drop-shadow-md bg-white rounded-md"
              key={product.id}
            >
              <Link href={`/products/${product.id}`}>
                {/* Billede og detaljer for hvert produkt */}
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={200}
                  height={200}
                />

                {/* Vurdering med stjerner (hel, halv eller tom afhængig af rating) */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, index) => {
                    if (index < Math.floor(product.rating)) {
                      return <FaStar key={index} color="#3c35ff" size={15} />;
                    } else if (
                      index < Math.floor(product.rating) + 1 &&
                      product.rating % 1 >= 0.5
                    ) {
                      return (
                        <FaStarHalfAlt key={index} color="#3c35ff" size={15} />
                      );
                    } else {
                      return (
                        <FaRegStar key={index} color="#3c35ff" size={15} />
                      );
                    }
                  })}
                </div>

                {/* Produktets titel og pris */}
                <div className="flex justify-between items-start">
                  <h3>{product.title}</h3>
                  <p>{product.price} $</p>
                </div>

                {/* Produktets tags/kategorier */}
                <ul className="flex gap-2 text-[0.85rem]">
                  {product.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Link>

              {/* Knap til at tilføje produktet til kurven */}
              <div className="grid justify-end">
                <button onClick={() => addItem(product)} className="btn">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
