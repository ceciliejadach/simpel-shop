"use client";
import ListItem from "./ListItem";
import Link from "next/link";

import { useState } from "react";

const List = ({ items, setItems, deleteItem, basketCounter }) => {
  const [productCount, setProductCount] = useState(1);
  const [addSameProduct, setaddSameProduct] = useState(1);

  const totalPrice = items.reduce((prePrice, items) => prePrice + items.price * addSameProduct, 0);
  console.log(totalPrice, "prisen er");

  const serializeItems = () => {
    return encodeURIComponent(JSON.stringify(items));
  };

  return (
    <div>
      <ul>
        {items.map((items) => (
          <ListItem
            setProductCount={setProductCount}
            productCount={productCount}
            items={items}
            basketCounter={basketCounter}
            key={items.id}
            title={items.text}
            price={items.price}
            tag={items.tag}
            image={items.image}
            itemId={items.id}
            deleteItem={deleteItem}
            amount={items.amount}
            setItems={setItems}
            setaddSameProduct={setaddSameProduct}
          ></ListItem>
        ))}
      </ul>
      <div>{items?.length > 0 && <p>{`Total Pris ${totalPrice}`}</p>}</div>
      <Link href={`/payment?items=${serializeItems()}`}>
        <button className="btn">Gå til betaling</button>
      </Link>
    </div>
  );
};

export default List;
