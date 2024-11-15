// Importerer nødvendige komponenter fra deres respektive stier
import Accordion from "@/app/components/Accordion";
import Button from "@/app/components/Button";
import Gallery from "@/app/components/Gallery";
import ScrollContainer from "@/app/components/ScrollContainer";

// Definerer en asynkron komponent kaldet Product, som tager props
// Her bruges destructuring til at hente params-prop direkte
const Product = async ({ params }) => {
  // Henter produkt-ID'et fra params-objektet
  const id = (await params).id;

  // Kalder API'et med det specifikke produkt-ID og venter på respons
  let response = await fetch(`https://dummyjson.com/products/${id}`);

  // Konverterer API-svaret til JSON-format og gemmer det i variablen product
  let product = await response.json();

  // Returnerer JSX, der renderes som produktets sideindhold
  return (
    // Hovedsektion med en grid-layout, der tilpasser sig forskellige skærmstørrelser
    <section className="grid grid-cols-[0.1fr_1fr_0.1fr] max-[400px]:grid-cols-1">
      {/* Sektion centreret i grid-layoutet */}
      <section className="grid sm:grid-cols-1 sm:px-4 md:grid-cols-2 lg:grid-cols-2 xl:pt-4 pb-28 col-start-2 col-end-3 max-[600px]:grid-cols-1">
        {/* Link til at navigere tilbage til produktsiden */}
        <a href="/products">Tilbage</a>

        <div className="lg:grid-cols-[2fr_1fr] grid gap-5 sm:p-4 md:col-start-1 md:col-end-4">
          {/* Gallery-komponent til at vise produktbilleder */}
          <Gallery
            thumbnail={product.thumbnail} // Thumbnail-billede for produktet
            images={product.images} // Liste af produktbilleder
            title={product.title} // Produktets titel som billedebeskrivelse
          />

          {/* Sektion til produktinformation */}
          <div className="px-8 sm:px-0">
            <div>
              {/* Liste over produkt-tags vist som en fleksibel, horisontal liste */}
              <ul className="flex gap-2 text-gray-400 text-[16px]">
                {product.tags.map((tag) => (
                  <li className="" key={tag}>
                    {tag} {/* Viser hver tag */}
                  </li>
                ))}
              </ul>

              {/* Viser produktets titel, mærke og pris */}
              <h1 className="text-3xl">{product.title}</h1>
              <p className="text-[17px] text-gray-700">{product.brand}</p>
              <p>{product.price} kr,-</p>
            </div>

            {/* Placeholder for en knap, sandsynligvis tilføjelse til kurv */}
            <div className="py-3">
              <Button></Button>
            </div>

            {/* Viser produktbeskrivelsen */}
            <p>{product.description}</p>

            {/* Accordion-komponent til yderligere produktinformation såsom dimensioner og garanti */}
            <Accordion
              dimensions={product.dimensions}
              warrantyInformation={product.warrantyInformation}
              shippingInformation={product.shippingInformation}
              sku={product.sku}
            />
          </div>
        </div>

        {/* ScrollContainer-komponent til visning af produktanmeldelser */}
        <ScrollContainer reviews={product.reviews} />
      </section>
    </section>
  );
};

export default Product;
