"use client";

import Gallery from "./Gallery";
import Accordion from "./Accordion";
import ReviewContainer from "./ReviewContainer";

const ProductSingle = ({ product }) => {
  const {
    title,
    brand,
    thumbnail,
    images,
    description,
    price,
    stock,
    dimensions,
    warrantyInformation,
    shippingInformation,
    sku,
    reviews,
  } = product;
  return (
    <>
      <section className="max-[800px]:grid-cols-[0.1fr_1fr_0.1fr] grid">
        <div className="max-[800px]:col-start-2 min-[801px]:grid-cols-[0.1fr_1fr_1fr_0.1fr] grid items-center justify-items-center">
          <div className="min-[801px]:col-start-2 w-fit align-middle">
            <Gallery thumbnail={thumbnail} images={images} title={title} />
          </div>
          <div className="min-[801px]:col-start-3 w-fit">
            <p className="pb-3xs font-semibold text-4xl md:text-5xl">{brand}</p>
            <p className="text-subtitle pb-6 text-gray-600 text-2xl">{title}</p>
            <p className="max-w-[55ch] my-xs text-xl">{description}</p>
            <p className="py-4 text-xl">Antal tilbage på lager: {stock}</p>
            <Accordion
              dimensions={dimensions}
              warrantyInformation={warrantyInformation}
              shippingInformation={shippingInformation}
              sku={sku}
            />
          </div>
          <ReviewContainer reviews={reviews} />
        </div>
      </section>
    </>
  );
};

export default ProductSingle;
