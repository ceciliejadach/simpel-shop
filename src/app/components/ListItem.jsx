import Image from "next/image";

// ListItem-komponenten viser et enkelt produkt i kurven og tillader opdatering af antallet
const ListItem = ({
  title, // Produktets titel
  price, // Produktets pris
  tag, // Produktets kategori/tag
  image, // Produktets billede-URL
  itemId, // Produktets unikke ID
  deleteItem, // Funktion til at fjerne produktet fra kurven
  basketCounter, // Antal varer i kurven
  productCount, // Antallet af denne specifikke vare
  setProductCount, // Funktion til at opdatere antallet af varen
}) => {
  // Variabel til at holde styr på ændringer i antal, men denne opdateres ikke korrekt
  let addSameProduct = 1;

  return (
    <li className="flex justify-around">
      {/* Produktbilledet */}
      <Image width={150} height={150} src={image} alt={title} />

      {/* Produktets detaljer: navn, kategori, og totalpris baseret på antallet af denne vare */}
      <div>
        <h2 className="text-2xl">{title}</h2>
        <p>{tag}</p>
        <p className="pt-2">{`${price * productCount} $`}</p>
      </div>

      {/* Kontrolelementer til at justere antallet af produktet i kurven */}
      <div className="flex justify-center gap-2 bg-white rounded-xl w-fit h-fit py-0 px-3">
        {/* Minus-knap til at reducere antallet af produktet */}
        <button
          id={itemId}
          onClick={(event) => {
            if (event.target.id == itemId && productCount > 1) {
              // Hvis produktantallet er større end 1, reducer det med 1
              let numberOfProduct = productCount - 1;
              setProductCount(numberOfProduct);
              console.log(event.target.id, "minus clicked"); // Logging til fejlfinding
            } else {
              // Hvis produktantallet er 1, fjernes varen helt fra kurven
              console.log(itemId, "knap id");
              deleteItem(itemId);
            }
          }}
        >
          -
        </button>

        {/* Viser det nuværende antal af varen */}
        <p>{productCount}</p>

        {/* Plus-knap til at øge antallet af produktet */}
        <button
          id={itemId}
          onClick={(event) => {
            if (event.target.id == itemId) {
              // Øger antallet af produktet med 1
              let numberOfProduct = productCount + 1;
              setProductCount(numberOfProduct);
              console.log(numberOfProduct, "plus clicked"); // Logging til fejlfinding
            }
          }}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default ListItem;
