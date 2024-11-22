import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const ProductCard = ({ product, addToCart }) => {
  const { id, title, thumbnail, price, discountPercentage, stock } = product;

  const discountedPrice = discountPercentage ? price - (price * discountPercentage) / 100 : null;

  const handleAddToCart = () => {
    //addToCart defineres i store/cartStore og bruges i App-komponeneten
    addToCart({ ...product });
  };
  return (
    <>
      <div className="" key={product.id}>
        <Link href={`/products/${id}`}>
          <Image src={thumbnail} alt={title} width={200} height={200} className="" />
          <div className=""></div>
          <div className="">
            <h3 className="font-semibold">{title}</h3>
            <h3>{price}$</h3>
          </div>
          <div className="">
            {discountPercentage ? (
              <div>
                <span className="line-through text-medium">${price}</span>
                <span className="text-red-500 ml-2 font-semibold">
                  {/* toFixed(2) rounds up the price decimal to .00, so it will be written ex. $5.07 and not just $5 or $5.0782497 */}${discountedPrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span>${price}</span>
            )}
          </div>

          <ul className="">
            {product.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div>Antal på lager: {stock} stk.</div>
        </Link>
        <PrimaryButton btntext="Tilføj til kurv" onClick={handleAddToCart} theme={"white"} />
      </div>
    </>
  );
};

export default ProductCard;
