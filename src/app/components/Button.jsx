"use client";
const Button = () => {
  return (
    <button
      onClick={() => {
        console.log("isOpen", addItem, newItem, key);
      }}
      className="px-8 py-2 bg-[--purple] text-black rounded-md"
    >
      Tilføj til kurv
    </button>
  );
};

export default Button;
