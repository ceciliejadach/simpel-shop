"use client";
import List from "./List";
import { RxCross2 } from "react-icons/rx";

const Basket = ({ isOpen, setIsOpen, items, setItems, deleteItem, setArt, artNum, basketCounter }) => {
  return (
    <>
      {isOpen && (
        <section className="border-2 w-fit bg-white justify-self-end absolute z-10 top-24 right-4 py-4 px-2">
          <div className="">
            <div className="flex justify-between">
              <h1 className="text-2xl">Din kurv</h1>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  console.log("isOpen", isOpen);
                }}
              >
                <RxCross2 />
              </button>
            </div>
            <List basketCounter={basketCounter} artNum={artNum} setArt={setArt} items={items} setItems={setItems} deleteItem={deleteItem} />
          </div>
        </section>
      )}
    </>
  );
};

export default Basket;
