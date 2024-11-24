import PrimaryButton from "./PrimaryButton";
const BasketProductCard = ({ id, thumbnail, title, price, stock, quantity, updateCartQuantity, discountPercentage }) => {
  //funktion for at tilføje produkt til kurven
  const addProduct = () => {
    if (quantity < stock) {
      updateCartQuantity(id, quantity + 1);
    } else {
      alert("Der er ikke flere produkter på lager.");
    }
  };

  //funktion for at fjerne produkt fra kurven
  const removeProduct = () => {
    if (quantity > 1) {
      updateCartQuantity(id, quantity - 1);
    } else {
      updateCartQuantity(id, 0);
    }
  };

  // Beregn den samlede pris for produktet
  const totalPrice = price * quantity;

  return (
    <li key={id} className="flex items-center space-x-4">
      <img src={thumbnail} alt={title} width={100} height={100} />
      <div className="flex-1">
        <h3>{title}</h3>
        <p>
          {discountPercentage ? (
            <>
              <span className="line-through">{price}$</span> <span className="text-red-500">{(price - (price * discountPercentage) / 100).toFixed(2)}$</span>
            </>
          ) : (
            <>{price}$</>
          )}
        </p>
        <p className="font-bold">Total: {totalPrice.toFixed(2)}$</p>
        <div className="quantity__counter__container flex items-center space-x-4">
          <PrimaryButton onClick={removeProduct} theme="default" btntext="-" />
          <span className="text-normal font-semibold">{quantity}</span>
          <PrimaryButton onClick={addProduct} theme="default" btntext="+" />
        </div>
      </div>
    </li>
  );
};

export default BasketProductCard;
