import ListItem from "./ListItem";

const List = ({ items, setItems, deleteItem, basketCounter }) => {
  <ListItem items={items} setItems={setItems}></ListItem>;
  return (
    <ul>
      {items.map((items) => (
        <ListItem items={items} basketCounter={basketCounter} key={items.id} title={items.text} price={items.price} tag={items.tag} image={items.image} itemId={items.id} deleteItem={deleteItem}></ListItem>
      ))}
    </ul>
  );
};

export default List;
