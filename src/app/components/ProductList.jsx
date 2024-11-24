"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ initialProducts, categories, addToCart }) => {
  //useState hook som pr. default viser alle produkter
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter !== "all") {
      fetchFilteredProducts(filter);
    } else {
      setProducts(initialProducts);
    }
  }, [filter, initialProducts]);

  async function fetchFilteredProducts(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    setProducts(data.products);
  }

  return (
    <section>
      <div>
        <label htmlFor="categorySelect"></label>
        <select id="categorySelect" onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">Alle kategorier</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default ProductList;
