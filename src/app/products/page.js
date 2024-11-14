import ProductList from "../components/ProductList";
import Header from "../components/Header";

export default async function Page() {
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  };

  const fetchCategories = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    return data;
  };

  const products = await fetchProducts();
  const categories = await fetchCategories();

  return (
    <>
      <Header />
      <ProductList initialProducts={products} categories={categories} />
    </>
  );
}
