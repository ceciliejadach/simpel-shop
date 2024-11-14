"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Header from "./Header";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductList = ({ initialProducts, categories }) => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState([]);

  let basketCounter;

  function addItem(product) {
    const newItem = {
      id: product.id,
      text: product.title,
      completed: false,
      price: product.price,
      tag: product.tags,
      image: product.thumbnail,
    };
    basketCounter = 1 + newItem.length;
    console.log("counter", basketCounter);
    setItems((prevItems) => [...prevItems, newItem]);
    console.log("Added item:", newItem);
  }

  useEffect(() => {
    console.log("Updated items:", items);
  }, [items]);

  useEffect(() => {
    if (filter !== "all") {
      fetchFilteredProducts(filter);
    } else {
      setProducts(initialProducts);
    }
  }, [filter, initialProducts]);

  async function fetchFilteredProducts(category) {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await res.json();
    setProducts(data.products);
  }
  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header basketCounter={basketCounter} items={items} setItems={setItems} deleteItem={deleteItem} />
      <div className="">
        <div className="max-w-5xl mx-auto">
          <label htmlFor="categorySelect"></label>
          <select className="border-solid border-[1px] border-[--blue] px-1 py-2 rounded-md text-[--blue]" id="categorySelect" onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option className="" value="all">
              Alle kategorier
            </option>
            {categories.map((category, index) => (
              <option key={category.id || index} value={category.name || category}>
                {category.name || category}
              </option>
            ))}
          </select>
        </div>
        <div className="pt-10 grid grid-cols-[repeat(2,minmax(0,325px))] justify-center gap-2 col-span-full mx-2  md:grid-cols-[repeat(3,minmax(0,325px))] md:col-span-full lg:col-start-1 lg:col-end-7 lg:row-start-2 md:gap-8">
          {products.map((product) => (
            <div className="p-4 drop-shadow-md bg-white rounded-md " key={product.id}>
              <Link href={`/products/${product.id}`}>
                <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, index) => {
                    if (index < Math.floor(product.rating)) {
                      return <FaStar key={index} color="#3c35ff" size={15} />;
                    } else if (index < Math.floor(product.rating) + 1 && product.rating % 1 >= 0.5) {
                      return <FaStarHalfAlt key={index} color="#3c35ff" size={15} />;
                    } else {
                      return <FaRegStar key={index} color="#3c35ff" size={15} />;
                    }
                  })}
                </div>

                <div className="flex justify-between items-start">
                  <h3>{product.title}</h3>
                  <p>{product.price} $</p>
                </div>

                <ul className="flex gap-2 text-[0.85rem]">
                  {product.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Link>
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
