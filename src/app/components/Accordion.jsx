"use client";

import Accordionitem from "./AccordionItem";
import { useState } from "react";

const Accordion = ({ dimensions, warrantyInformation, shippingInformation, returnPolicy }) => {
  const [isOpen, setIsOpen, item] = useState(0);
  return (
    <div>
      <ul className=" list-none w-full">
        <Accordionitem item={1} isOpen={isOpen} setIsOpen={setIsOpen} question="Information" textOne={returnPolicy} textTwo={warrantyInformation} textThree={shippingInformation} />
        <Accordionitem item={2} isOpen={isOpen} setIsOpen={setIsOpen} textOne={` Depth: ${dimensions.depth}`} textTwo={`Height: ${dimensions.height}`} textThree={`Width ${dimensions.width}`} question="Product Details" />
      </ul>
    </div>
  );
};

export default Accordion;
