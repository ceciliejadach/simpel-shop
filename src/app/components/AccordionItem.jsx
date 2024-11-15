import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Accordionitem = ({
  isOpen,
  setIsOpen,
  question,

  item,
  textOne,
  textTwo,
  textThree,
}) => {
  return (
    <li className="w-full border-b-[1px] py-4 border-solid border-black">
      <button
        onClick={() => {
          isOpen == item ? setIsOpen(0) : setIsOpen(item);
        }}
        className=" flex items-center justify-between border-white w-full border-b-2"
      >
        <p className="text-[--dg-text-color] text-[18px] font-bold">{question}</p>
        {isOpen == item ? <FiMinus className="place-items-center w-5 h-5 text-black" /> : <GoPlus className=" w-5 h-5 text-black" />}
      </button>
      {isOpen == item && (
        <div className="">
          <p className="font-sans text-gray-950 "> {textOne}</p>
          <p className="font-sans text-gray-950"> {textTwo}</p>
          <p className="font-sans text-gray-950"> {textThree}</p>
        </div>
      )}
    </li>
  );
};

export default Accordionitem;
