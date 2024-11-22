import App from "../components/App";

export default async function Page() {
  //fetcher alle produkter og deres informationer
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  };
  //fetcher kategorier
  const fecthCategories = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    return data;
  };
  //gemmer data fra det som API'erne retunerer. Gør det muligt at bruge dataene lokalt i funktionen og sende dem videre som props til din App-komponent.
  const products = await fetchProducts();
  const categories = await fecthCategories();

  return (
    <>
      {/* produkt og kategori data er hentet og gemt og sendes som props til App-komponenten */}
      <App initialProducts={products} categories={categories} />
    </>
  );
}
