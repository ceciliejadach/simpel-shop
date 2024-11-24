"use client";
import Image from "next/image";
import { useState } from "react";

const Gallery = ({ thumbnail, images, title }) => {
  const [selectedProduct, setSelectedProduct] = useState(thumbnail);
  return (
    <div className="">
      <div className="">
        <Image className="justify-self-center mb-4" src={selectedProduct} height={500} width={500} alt={title}></Image>
      </div>
      <ul className="flex gap-2">
        {images?.map((image, id) => (
          <li key={id} className="bg-primary-gray rounded-md h-fit w-fit ">
            <button onClick={() => setSelectedProduct(image)}>
              <Image src={image} height={100} width={100} alt={title} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
