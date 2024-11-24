"use client";

import useCartStore from "../store/cartStore";
import Image from "next/image";

const PaymentPage = () => {
  //clearCart er en funktion som ligger inde i store/cartStore
  const { cart, clearCart } = useCartStore();

  // Beregn totalpris af produkter
  const totalCartPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  //Vis alert ved gennemført betaling
  const handlePayment = () => {
    alert("Betaling gennemført!");
    clearCart(); // Tøm kurven efter betaling
  };

  return (
    <div>
      <h1>Betalingsside</h1>
      {/* Betingelse for at hvis cart er længere end 0, så skal produkter blive vist eller skal teksten: "din kurv er tom" blive vist */}
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <Image src={product.thumbnail} width={100} height={100} alt={product.title} />
              {product.title} - {product.quantity} stk. - {product.price * product.quantity}$
            </li>
          ))}
        </ul>
      ) : (
        <p>Din kurv er tom.</p>
      )}
      {/* toFixed gør, at decimalerne af den totalle pris bliver reduceret til to decimaler */}
      <p>Total: {totalCartPrice.toFixed(2)}$</p>
      {/* Ved klik på "Gennemfør betaling" bliver funktionen handlePayment kaldt */}
      <button onClick={handlePayment}>Gennemfør betaling</button>
    </div>
  );
};

export default PaymentPage;
