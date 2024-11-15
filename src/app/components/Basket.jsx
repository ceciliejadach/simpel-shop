"use client";
import List from "./List";

const Basket = ({ isOpen, setIsOpen, items, setItems, deleteItem, setArt, artNum, basketCounter }) => {
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
            <List basketCounter={basketCounter} artNum={artNum} setArt={setArt} items={items} setItems={setItems} deleteItem={deleteItem} />
          </div>
        </section>
      )}
    </>
  );
};

export default Basket;
