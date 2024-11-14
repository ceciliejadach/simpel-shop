"use client";
import ListItem from "./ListItem";
import { useState } from "react";
const List = ({ items, setItems, deleteItem, basketCounter }) => {
  const [productCount, setProductCount] = useState(1);
  <ListItem items={items} setItems={setItems}></ListItem>;

  const totalPrice = items.reduce((prePrice, items) => prePrice + items.price, 0);
  console.log(totalPrice, "prisen er");

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
          ></ListItem>
        ))}
      </ul>
      <div>{items?.length > 0 && <p>{`Total Pris ${totalPrice}`}</p>}</div>
    </div>
  );
};

export default List;
