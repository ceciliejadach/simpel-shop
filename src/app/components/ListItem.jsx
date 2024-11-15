import Image from "next/image";

const ListItem = ({ title, price, tag, image, itemId, deleteItem, productCount, setProductCount, setaddSameProduct }) => {
  let addSameProduct = 1;
  return (
    <li className="flex justify-around">
      <Image width={150} height={150} src={image} alt={title} />
      <div>
        <h2 className="text-2xl">{title} </h2>
        <p>{tag} </p>
        <p className="pt-2">{`${price * productCount} $`}</p>
      </div>
      <div
        className="flex justify-center gap-2 bg-white rounded-xl
   w-fit h-fit py-0 px-3"
      >
        <button
          id={itemId}
          onClick={(event) => {
            if (event.target.id == itemId && productCount > 1) {
              addSameProduct - 1;
              let numberOfProduct = productCount - addSameProduct;
              setProductCount(numberOfProduct);
              setaddSameProduct(numberOfProduct);
            } else {
              deleteItem(itemId);
            }
          }}
        >
          -
        </button>
        <p>{productCount}</p>
        <button
          id={itemId}
          onClick={(event) => {
            if (event.target.id == itemId) {
              addSameProduct + 1;
              let numberOfProduct = productCount + addSameProduct;
              setaddSameProduct(numberOfProduct);
              setProductCount(numberOfProduct);
            }
          }}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default ListItem;
