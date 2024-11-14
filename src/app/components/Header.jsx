"use client";
import BasketIcon from "../img/basket.svg";
import Basket from "./Basket";
import Link from "next/link";
import Image from "next/image";
import Logo from "../img/logo.svg";
import { useState } from "react";
const Header = ({ items, setItems, deleteItem, basketCounter }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="col-start-3 col-end-6 grid grid-rows-1 mt-4 ">
      <nav className="flex bg-primary-black text-secondary-gray py-6 text-xl justify-between px-10 rounded-md">
        <Link href="/">
          <Image src={Logo} alt="logo af brandet" />
        </Link>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              console.log("number check", items.length);
              console.log("basket", isOpen);
            }}
          >
            <Image src={BasketIcon} alt="illustration af kurv" />
            {items?.length > 0 && <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full text-xs px-1">{items?.length}</span>}
          </button>
        </ul>
      </nav>
      <Basket basketCounter={basketCounter} deleteItem={deleteItem} items={items} setItems={setItems} isOpen={isOpen} setIsOpen={setIsOpen}></Basket>
    </header>
  );
};

export default Header;
