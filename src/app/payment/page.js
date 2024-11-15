"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Header from "../components/Header";
import ShoppingBags from "../img/shopping-bags.svg";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Payment = () => {
  const searchParams = useSearchParams();

  const itemsParam = searchParams.get("items");
  const totalPriceParam = searchParams.get("totalPrice");

  const parseItems = (itemsParam) => {
    try {
      return JSON.parse(decodeURIComponent(itemsParam));
    } catch (error) {
      console.error("Fejl ved parsing af items:", error);
      return [];
    }
  };

  const parsedItems = itemsParam ? parseItems(itemsParam) : [];
  const totalPrice = totalPriceParam ? parseFloat(totalPriceParam) : 0;

  const { data } = useSWR("https://dummyjson.com/products", fetcher);

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (data && parsedItems.length > 0) {
  //     const filteredProducts = parsedItems
  //       .map((item) => {
  //         const product = data.products.find((p) => p.id === item.id);
  //         return product ? { ...product } : null;
  //       })
  //       .filter((product) => product !== null);

  //     setProducts(filteredProducts);
  //   }
  // }, [data, parsedItems]);

  useEffect(() => {
    if (data && parsedItems.length > 0) {
      const filteredProducts = parsedItems
        .map((item) => {
          const product = data.products.find((p) => p.id === item.id);
          return product ? { ...product, quantity: item.quantity } : null;
        })
        .filter((product) => product !== null);

      setTimeout(() => {
        setProducts(filteredProducts);
      }, 0);
    }
  }, [data, parsedItems]);

  return (
    <>
      <Header />
      <section className="max-w-screen-md mx-auto">
        <div className="min-h-[80vh] m-auto">
          <h1 className="text-subtitle py-4 px-1 my-3">Din kurv</h1>
          <ul className="flex flex-col gap-5">
            {products.map((product) => (
              <li key={product.id} className="grid grid-cols-[0.5fr_1fr] gap-2 md:grid-cols-[0.2fr_1fr]">
                <img src={product.thumbnail} alt={product.title} width={150} height={150} />
                <div className="grid h-fit self-center">
                  <div className="text-lg font-bold">{product.title}</div>
                  <div>{product.brand}</div>
                  <div>Pris pr. stk.: {product.price} $</div>
                  {/* <div>Antal:{product.quantity}</div> */}
                </div>
              </li>
            ))}
          </ul>
          <hr className="border-black border-[1px] my-4" />
          <h2 className="font-bold text-2xl">Du skal i alt betale: {totalPrice} $</h2>
          <div className="grid mt-5 mb-5">
            <button className="btn-2 justify-self-center">Betal nu</button>
          </div>
          <div className="grid">
            <Image src={ShoppingBags} alt="billede af shopings bags" className="justify-self-end w-[12rem] h-[12rem] self-end mt-6" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;

// export default Payment;

// const Payment = () => {
//   const searchParams = useSearchParams();
//   const items = searchParams.get("items");

//   const parseItems = (items) => {
//     return JSON.parse(decodeURIComponent(items));
//   };

//   const parsedItems = items ? parseItems(items) : [];

//   const { data } = useSWR("https://dummyjson.com/products", fetcher);

//   const [products, setProducts] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     if (data && parsedItems.length > 0) {
//       const filteredProducts = parsedItems
//         .map((item) => {
//           const product = data.products.find((p) => p.id === item.id);
//           return product ? { ...product, quantity: item.quantity } : null;
//         })
//         .filter((product) => product !== null);

//       console.log("Filtered Products:", filteredProducts);

//       setProducts(filteredProducts);
//     }
//   }, [items, data]);

//   useEffect(() => {
//     if (products.length > 0) {
//       const totalPrice = products.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
//       setTotalPrice(totalPrice);
//     }
//   }, [products]);

//   return (
//     <>
//       <Header />
//       <section className="max-w-screen-md mx-auto">
//         <div className=" min-h-[80vh] m-auto">
//           <div className="">
//             <h1 className="text-subtitle py-4 px-1 my-3">Din kurv</h1>
//           </div>
//           <ul className="flex flex-col gap-5 ">
//             {products.map((product) => (
//               <li key={product.id} className="grid grid-cols-[0.5fr_1fr] gap-2 md:grid-cols-[0.2fr_1fr]">
//                 <img src={product.thumbnail} alt={product.title} width={150} height={150} />
//                 <div className="grid h-fit self-center">
//                   <div className="text-lg font-bold">{product.title}</div>
//                   <div>{product.brand}</div>
//                   <div>Pris pr. stk.: {product.price} $</div>
//                   <div>Antal:</div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <hr className="border-black border-[1px] my-4" />
//           <h2 className="font-bold text-2xl">Du skal i alt betale:{totalPrice} $</h2>
//           <div className="grid mt-5 mb-5">
//             <button className="btn-2 justify-self-center">Betal nu</button>
//           </div>
//           <div className="grid">
//             <Image src={ShoppingBags} alt="billede af shopings bags" className="justify-self-end w-[12rem] h-[12rem] self-end mt-6" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Payment;

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
