"use client";
const Button = () => {
  return (
    <button
      onClick={() => {
        console.log("isOpen", addItem, newItem, key);
      }}
      className="px-7 py-2 text-white rounded-3xl bg-[#3C35FF]"
    >
      Tilføj til kurv
    </button>
  );
};

export default Button;
