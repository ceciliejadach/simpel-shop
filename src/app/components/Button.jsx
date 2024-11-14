"use client";
const Button = () => {
  return (
    <button
      onClick={() => {
        console.log("isOpen", addItem, newItem, key);
      }}
      className="px-8 py-2 bg-[--blue] text-white rounded-full"
    >
      Tilføj til kurv
    </button>
  );
};

export default Button;
