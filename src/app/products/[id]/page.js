import Accordion from "@/app/components/Accordion";
import Gallery from "@/app/components/Gallery";
import ScrollContainer from "@/app/components/ScrollContainer";
import Header from "@/app/components/Header";
import { IoChevronBackOutline } from "react-icons/io5";

const Product = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();

  return (
    <>
      <Header />
      <a href="/products" className="flex items-center hover:underline pl-4">
        <IoChevronBackOutline /> Tilbage
      </a>
      <section className="">
        <section className=" grid sm:grid-cols-1 sm:px-4 md:grid-cols-2 lg:grid-cols-2 xl: pt-4 pb-10 col-start-2 col-end-3 max-[600px]:grid-cols-1">
          <div className="lg:grid-cols-[2fr_1fr] grid gap-5 sm:p-4 md:col-start-1 md:col-end-4">
            <Gallery thumbnail={product.thumbnail} images={product.images} title={product.title} />
            <div className=" grid  px-4 sm:px-0 h-fit gap-4">
              <div>
                <ul className="flex gap-2 text-gray-400 text-[16px]">
                  {product.tags.map((tag) => (
                    <li className="" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <h1 className="text-3xl">{product.title}</h1>
                <p className="text-[17px] text-gray-700">{product.brand} </p>
                <p>{product.price} $</p>
                <div className="py-3">
                  <button className="btn-2">Tilføj til kurv</button>
                </div>
              </div>
              <p>{product.description}</p>
              <Accordion dimensions={product.dimensions} warrantyInformation={product.warrantyInformation} shippingInformation={product.shippingInformation} sku={product.sku} />
            </div>
          </div>
        </section>
      </section>
      <ScrollContainer reviews={product.reviews} />
    </>
  );
};

export default Product;
