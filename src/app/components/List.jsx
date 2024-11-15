"use client";
import ListItem from "./ListItem";
import Link from "next/link";

import { useState } from "react";

const List = ({ items, setItems, deleteItem, basketCounter }) => {
  const [productCount, setProductCount] = useState(1);
  <ListItem items={items} setItems={setItems}></ListItem>;

  const totalPrice = items.reduce((prePrice, items) => prePrice + items.price, 0);
  console.log(totalPrice, "prisen er");

  const serializeItems = () => {
    return encodeURIComponent(JSON.stringify(items));
  };

  return (
    <div>
      <ul>
        {items.map((items) => (
          <ListItem setProductCount={setProductCount} productCount={productCount} items={items} basketCounter={basketCounter} key={items.id} title={items.text} price={items.price} tag={items.tag} image={items.image} itemId={items.id} deleteItem={deleteItem}></ListItem>
        ))}
      </ul>
      <div>{items?.length > 0 && <p>{`Total Pris ${totalPrice}`}</p>}</div>
      <Link href={`/payment?items=${serializeItems()}`}>
        <button className="btn-2">Gå til betaling</button>
      </Link>
    </div>
  );
};

export default List;
