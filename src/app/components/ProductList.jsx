"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ProductList = ({ initialProducts, categories }) => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState([]);

  function addItem(product) {
    const newItem = {
      id: product.id,
      text: product.title,
      completed: false,
      price: product.price,
    };

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

  return (
    <div>
      <label htmlFor="categorySelect">Vælg kategori:</label>
      <select id="categorySelect" onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">Alle kategorier</option>
        {categories.map((category, index) => (
          <option key={category.id || index} value={category.name || category}>
            {category.name || category}
          </option>
        ))}
      </select>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} />
            </Link>
            <button onClick={() => addItem(product)} className="px-8 py-2 bg-[--purple] text-black rounded-md">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
