"use client";
import Image from "next/image";
import { useState } from "react";

const Gallery = ({ thumbnail, images, title }) => {
  const [selectedProduct, setSelectedProduct] = useState(thumbnail);
  return (
    <div className="grid md:grid-cols-[0.1fr_1fr_0.1fr] lg:grid-cols-[0.1fr_1fr_0.1fr] gap-2">
      <div className="grid place-content-center rounded-xl col-start-2">
        <Image
          src={selectedProduct}
          height={500}
          width={500}
          alt={title}
        ></Image>
      </div>
      <ul className="grid gap-2 col-start-2">
        {images.map((image, id) => (
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
