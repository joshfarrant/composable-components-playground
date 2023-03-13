import { getProducts } from "./data/products";
import { ProductList } from "./components/composable/product-list";
import { Product } from "./components/product";

export default function App() {
  const products = getProducts();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl mb-8 font-bold">Products</h1>

      <ProductList>
        {products.map((product) => (
          <Product {...product} />
        ))}
      </ProductList>
    </div>
  );
}
