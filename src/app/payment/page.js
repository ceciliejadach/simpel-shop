"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Header from "../components/Header";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Payment = () => {
  const searchParams = useSearchParams();
  const items = searchParams.get("items");

  const parseItems = (items) => {
    return JSON.parse(decodeURIComponent(items));
  };

  const parsedItems = items ? parseItems(items) : [];

  const { data } = useSWR("https://dummyjson.com/products", fetcher);

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (data && parsedItems.length > 0) {
      const filteredProducts = parsedItems
        .map((item) => {
          const product = data.products.find((p) => p.id === item.id);
          return product ? { ...product, quantity: item.quantity } : null;
        })
        .filter((product) => product !== null);

      console.log("Filtered Products:", filteredProducts);

      setProducts(filteredProducts);
    }
  }, [items, data]);

  useEffect(() => {
    if (products.length > 0) {
      const totalPrice = products.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
      setTotalPrice(totalPrice);
    }
  }, [products]);

  //   useEffect(() => {
  //     if (products.length > 0) {
  //       const total = products.reduce((accumulator, product) => {
  //         const price = parseFloat(product.price) || 0;
  //         const quantity = parseInt(product.quantity, 10) || 0;
  //         return accumulator + price * quantity;
  //       }, 0);
  //       setTotalPrice(total);
  //     }
  //   }, [products]);

  return (
    <section>
      <Header />
      <div className="max-w-[80dvw] min-h-[80vh] m-auto">
        <div className="">
          <h1 className="text-subtitle py-4 px-1 my-3">Din kurv</h1>
        </div>
        <ul className="flex flex-col gap-5 ">
          {products.map((product) => (
            <li key={product.id} className="grid grid-cols-[0.2fr_1fr]">
              <img src={product.thumbnail} alt={product.title} width={150} height={150} />
              <div className="grid h-fit self-center">
                <div className="text-2xl">{product.title}</div>
                <div>{product.brand}</div>
                <div>{product.price} $</div>
              </div>
            </li>
          ))}
        </ul>
        <div>Du skal i alt betale: {totalPrice}</div>
        <button className="btn">Betal nu</button>
      </div>
    </section>
  );
};

export default Payment;
