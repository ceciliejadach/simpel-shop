"use client";
import List from "./List";

const Basket = ({ isOpen, setIsOpen, items, setItems, deleteItem, basketCounter }) => {
  return (
    <>
      {isOpen && (
        <section className="bg-tertier-blue">
          <div>
            <h1 className="text-3xl">Your Chart</h1>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                console.log("isOpen", isOpen);
              }}
            >
              click mig!
            </button>
            <List basketCounter={basketCounter} items={items} setItems={setItems} deleteItem={deleteItem}></List>
          </div>
        </section>
      )}
    </>
  );
};

export default Basket;
