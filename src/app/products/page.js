// Vi importerer først produktlisten
import ProductList from "../components/ProductList";

// Eksporterer en asynkron funktion "page", vi benytter async, da vi så kan bruge await senere
export default async function Page() {
  // Definerer en asynkron funktion til at hente produkter fra API'et
  const fetchProducts = async () => {
    // Sender en GET-anmodning til produkt-API'et, vi benytter await, da den så ikke vil returnere response, før kaldet til api'en er færdig
    const response = await fetch("https://dummyjson.com/products");
    // Konverterer API-svaret til JSON-format
    const data = await response.json();
    // Returnerer kun produktdataene fra JSON-svaret
    return data.products;
  };

  // Definerer en asynkron funktion til at hente kategorier fra API'et
  const fetchCategories = async () => {
    // Sender en GET-anmodning til kategorier-API'et
    const response = await fetch("https://dummyjson.com/products/categories");
    // Konverterer API-svaret til JSON-format
    const data = await response.json();
    // Returnerer kategoridataene (her som en liste over kategorier)
    return data;
  };

  // Kalder fetchProducts og gemmer resultatet i variablen products
  const products = await fetchProducts();
  // Kalder fetchCategories og gemmer resultatet i variablen categories
  const categories = await fetchCategories();

  // Returnerer en React-komponent, der indeholder ProductList-komponenten
  // ProductList modtager produkter og kategorier som props (initialProducts og categories)
  return (
    <>
      <ProductList initialProducts={products} categories={categories} />
    </>
  );
}
