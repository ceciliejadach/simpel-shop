import BasketProductCard from "./BasketProductCard";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";

const Basket = ({ cart, updateCartQuantity }) => {
  const selectedProducts = cart.map((product) => `${product.id}-${product.quantity}`).join(",");
  const itemCounter = cart.reduce((total, item) => total + item.quantity, 0);

  // Beregn den samlede pris for hele kurven
  const totalCartPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <ul className="cart__product__list grid grid-rows-[auto] gap-4 py-2 px-1 border-red border-solid border-[1px]">
      {cart.length > 0 ? (
        <>
          {cart.map((product) => (
            <BasketProductCard key={product.id} id={product.id} thumbnail={product.thumbnail} title={product.title} price={product.price} stock={product.stock} quantity={product.quantity} discountPercentage={product.discountPercentage} updateCartQuantity={updateCartQuantity} />
          ))}
          <li className="text-lg font-bold">Samlet pris: {totalCartPrice.toFixed(2)}$</li>
        </>
      ) : (
        <li>Din kurv er tom.</li>
      )}
      {cart.length > 0 && (
        <Link href={`./payment?items=${selectedProducts}`}>
          <PrimaryButton btntext={"Proceed to checkout"} theme="red" />
        </Link>
      )}
    </ul>
  );
};

export default Basket;
