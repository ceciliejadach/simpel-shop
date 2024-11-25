"use client";

import useCartStore from "../store/cartStore";
import Image from "next/image";

const PaymentPage = () => {
  //clearCart er en funktion som ligger inde i store/cartStore
  const { cart, clearCart } = useCartStore();

  // Beregn totalpris af produkter
  // const totalCartPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  // Beregn totalpris af produkter
  const totalCartPrice = cart.reduce((total, product) => total + (product.discountedPrice || product.price) * product.quantity, 0);

  //Vis alert ved gennemført betaling
  const handlePayment = () => {
    alert("Betaling gennemført!");
    clearCart(); // Tøm kurven efter betaling
  };

  return (
    <section className="max-w-screen-xl mx-auto h-[70vh] p-4">
      <h1 className="mb-10">Betalingsside</h1>
      <div className="max-w-screen-sm mx-auto grid gap-4">
        {/* Betingelse for at hvis cart er længere end 0, så skal produkter blive vist eller skal teksten: "din kurv er tom" blive vist */}
        {cart.length > 0 ? (
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="grid grid-cols-[1fr_2fr]">
                <Image className="place-self-center" src={product.thumbnail} width={100} height={100} alt={product.title} />
                <div>
                  <h3>
                    <strong>{product.title}</strong>
                  </h3>
                  <p className="text-gray-500 text-sm">{product.brand}</p>
                  <p>{product.quantity} stk.</p>
                  <p>
                    {product.discountedPrice ? (
                      <>
                        <span className="line-through">{product.price * product.quantity}$</span> <span className="text-red-500">{(product.discountedPrice * product.quantity).toFixed(2)}$</span>
                      </>
                    ) : (
                      `${product.price * product.quantity}$`
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Din kurv er tom.</p>
        )}
        {/* toFixed gør, at decimalerne af den totalle pris bliver reduceret til to decimaler */}
        <hr />
        <p className="text-2xl">
          <strong>Total:</strong> {totalCartPrice.toFixed(2)}$
        </p>
        {/* Ved klik på "Gennemfør betaling" bliver funktionen handlePayment kaldt */}
        <button className="bg-[#3C35FF] hover:bg-[#150DFF] text-white px-8 py-4 rounded-full w-fit justify-self-center" onClick={handlePayment}>
          Gennemfør betaling
        </button>
      </div>
    </section>
  );
};

export default PaymentPage;
