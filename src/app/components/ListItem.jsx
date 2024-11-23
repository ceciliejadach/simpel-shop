"use client";
import Image from "next/image";
import { useState } from "react";

const ListItem = ({
  title,
  price,
  tag,
  image,
  itemId,
  deleteItem,
  setaddSameProduct,
  setArt,
  artNum,
  amount,
}) => {
  const [productCount, setProductCount] = useState(1);
  let numberOfProductExtra = productCount + artNum;
  return (
    <li className="grid grid-cols-[auto_1fr] border-b-[1px] mb-4 p-2">
      <Image width={120} height={120} src={image} alt={title} />
      <div className="">
        <h2 className="text-lg text-wrap max-w-40 font-semibold">{title} </h2>
        <p className="text-sm opacity-50">{tag}</p>

        <div className="flex justify-between items-center col-start-2">
          <p className="pt-2">{`${price * productCount} $`}</p>
          <div
            className="flex justify-center gap-2 bg-white rounded-xl
   w-fit h-fit py-0 px-3 row-start-2"
          >
            <button
              id={itemId}
              onClick={(event) => {
                if (event.target.id == itemId && productCount > 1) {
                  let addSameProduct = 1;
                  addSameProduct - 1;
                  let numberOfProduct = productCount - addSameProduct;
                  setProductCount(productCount - 1);
                  setaddSameProduct(numberOfProduct);
                  console.log("produkt id", itemId);
                  console.log("knap id", event.target.id);
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
                  let addSameProduct = 1;
                  addSameProduct + 1;
                  let numberOfProduct = productCount + addSameProduct;
                  setaddSameProduct(numberOfProduct);
                  setProductCount(productCount + 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
