import Accordion from "@/app/components/Accordion";
import Button from "@/app/components/Button";
import Gallery from "@/app/components/Gallery";
import ScrollContainer from "@/app/components/ScrollContainer";

const Product = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();

  return (
    <section className="grid grid-cols-[0.1fr_1fr_0.1fr] max-[400px]:grid-cols-1">
      <section className=" grid sm:grid-cols-1 sm:px-4 md:grid-cols-2  lg:grid-cols-2 xl: pt-4 pb-28 col-start-2 col-end-3 max-[600px]:grid-cols-1">
        <a href="/products">Tilbage</a>
        <div className="lg:grid-cols-[2fr_1fr] grid gap-5 sm:p-4 md:col-start-1 md:col-end-4">
          <Gallery
            thumbnail={product.thumbnail}
            images={product.images}
            title={product.title}
          />
          <div className="px-8 sm:px-0">
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
              <p>{product.price} kr,-</p>
            </div>

            {/* <p>{product.discountPercentage}</p> */}
            <div className="py-3">
              <Button></Button>
            </div>

            <p>{product.description}</p>

            <Accordion
              dimensions={product.dimensions}
              warrantyInformation={product.warrantyInformation}
              shippingInformation={product.shippingInformation}
              sku={product.sku}
            />
          </div>
        </div>
        <ScrollContainer reviews={product.reviews} />
      </section>
    </section>
  );
};

export default Product;
