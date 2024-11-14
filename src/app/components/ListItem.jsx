const ListItem = () => {
  return (
    <li className="flex justify-around">
      <div>
        <h2 className="text-2xl">Apple Watch </h2>
        <p>Brand</p>
        <p className="pt-2">Price</p>
      </div>
      <div
        className="flex justify-center gap-2 bg-white rounded-xl
     w-fit h-fit py-0 px-3"
      >
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
    </li>
  );
};

export default ListItem;
