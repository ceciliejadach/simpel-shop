import ListItem from "./ListItem";
import Link from "next/link";

const List = ({ items, setItems, deleteItem, basketCounter }) => {
  // Serialiser hele item-arrayet som JSON
  const serializeItems = () => {
    return encodeURIComponent(JSON.stringify(items));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <ListItem items={item} basketCounter={basketCounter} key={item.id} title={item.text} price={item.price} tag={item.tag} image={item.image} itemId={item.id} deleteItem={deleteItem} />
        ))}
      </ul>
      <Link href={`/payment?items=${serializeItems()}`}>
        <button className="btn">Gå til betaling</button>
      </Link>
    </div>
  );
};

export default List;
