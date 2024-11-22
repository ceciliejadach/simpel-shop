import ProductSingle from "@/app/components/ProductSingle";

import { IoChevronBackOutline } from "react-icons/io5";

const Product = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let data = await response.json();

  return (
    <>
      <ProductSingle product={data} />
    </>
  );
};

export default Product;
