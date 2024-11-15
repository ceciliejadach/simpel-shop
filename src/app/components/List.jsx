"use client";
import ListItem from "./ListItem";
import { useState } from "react";

// List-komponenten viser en liste over produkter i kurven og beregner den samlede pris
const List = ({ items, setItems, deleteItem, basketCounter }) => {
  // State til at holde styr på antallet af hver vare (standard 1)
  const [productCount, setProductCount] = useState(1);

  // Beregner den samlede pris af alle varer i kurven
  const totalPrice = items.reduce(
    (prePrice, item) => prePrice + item.price * productCount,
    0
  );
  console.log(totalPrice, "prisen er");

  return (
    <div>
      <ul>
        {/* Mapper gennem alle varer i kurven og renderer en ListItem-komponent for hver vare */}
        {items.map((item) => (
          <ListItem
            setProductCount={setProductCount} // Funktion til at opdatere antal
            productCount={productCount} // Nuvarande antal af denne vare
            items={items} // Liste af alle varer (tilføjes ikke direkte her)
            basketCounter={basketCounter} // Antal varer i kurven
            key={item.id} // Unikt ID til hver vare (nødvendigt for React)
            title={item.text} // Produktets titel
            price={item.price} // Produktets pris
            tag={item.tag} // Produktets tag eller kategori
            image={item.image} // Produktets billede
            itemId={item.id} // Produktets unikke ID
            deleteItem={deleteItem} // Funktion til at fjerne varen fra kurven
          />
        ))}
      </ul>

      {/* Viser totalpris, hvis der er varer i kurven */}
      <div>{items?.length > 0 && <p>{`Total Pris ${totalPrice}`}</p>}</div>
    </div>
  );
};

export default List;
