"use client";
import BasketIcon from "../img/basket.svg";
import Basket from "./Basket";
import Link from "next/link";
import Image from "next/image";
import Logo from "../img/logo.svg";
import { useState } from "react";

// Header-komponenten indeholder navigation, brand-logo og en kurv-knap med tæller
const Header = ({ items, setItems, deleteItem, basketCounter }) => {
  // State til at holde styr på, om kurven (Basket-komponenten) er åben eller lukket
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="col-start-3 col-end-6 grid grid-rows-1 mt-4">
      {/* Navigationselementet (nav) indeholder links til forskellige sider og kurv-ikonet */}
      <nav className="flex bg-primary-black text-secondary-gray py-6 text-xl justify-between px-10 rounded-md">
        {/* Link til forsiden med brandets logo */}
        <Link href="/">
          <Image src={Logo} alt="logo af brandet" />
        </Link>

        {/* Navigation med links til forskellige sider samt kurv-knappen */}
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/">Home</Link> {/* Link til forsiden */}
          </li>
          <li>
            <Link href="/products">Products</Link> {/* Link til produktsiden */}
          </li>

          {/* Kurv-ikonet som åbner kurven, når man klikker på det */}
          <button
            onClick={() => {
              // Ændrer isOpen state, som styrer om kurven skal vises eller ej
              setIsOpen(!isOpen);
              console.log("basket", isOpen); // Debug-log for at tjekke isOpen-tilstanden
            }}
          >
            {/* Viser kurv-ikonet */}
            <Image src={BasketIcon} alt="illustration af kurv" />

            {/* Tæller der viser antallet af varer i kurven, hvis der er varer */}
            {items?.length > 0 && (
              <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full text-xs px-1">
                {items.length}
              </span>
            )}
          </button>
        </ul>
      </nav>

      {/* Basket-komponenten vises her og styres af isOpen-state */}
      <Basket
        basketCounter={basketCounter} // Antallet af varer i kurven
        deleteItem={deleteItem} // Funktion til at slette en vare fra kurven
        items={items} // Varerne i kurven
        setItems={setItems} // Funktion til at opdatere varerne i kurven
        isOpen={isOpen} // Styrer om kurven skal vises eller ej
        setIsOpen={setIsOpen} // Funktion til at opdatere isOpen state
      />
    </header>
  );
};

export default Header;
