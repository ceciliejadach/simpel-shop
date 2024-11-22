"use client";

import Basket from "./Basket";
import useCartStore from "../store/cartStore";
import ProductList from "./ProductList";

const App = ({ initialProducts, categories }) => {
  //addToCart og updateCartQuantity er funktioner som er defineret i store/cartStore
  const { cart, addToCart, updateCartQuantity } = useCartStore();

  return (
    <div>
      <Basket cart={cart} updateCartQuantity={updateCartQuantity} />
      <ProductList initialProducts={initialProducts} categories={categories} addToCart={addToCart} />
    </div>
  );
};

export default App;
