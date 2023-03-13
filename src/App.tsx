import { getProducts } from "./data/products";
import { ProductList } from "./components/product-list";
import { ActionMenuItem as ComposableActionMenuItem } from "./components/composable/action-menu-item";
import { ActionMenu } from "./components/action-menu";
import { ActionMenu as ComposableActionMenu } from "./components/composable/action-menu";

export default function App() {
  const products = getProducts();

  return (
    <div className="container mx-auto mt-8">
      <div className="m-8">
        <header className="flex justify-between">
          <h1 className="text-4xl mb-8 font-bold">Products</h1>
          <ActionMenu
            label="Options A"
            items={[
              {
                id: "basket",
                label: "Basket",
                href: "#"
              },
              {
                id: "settings",
                label: "Settings",
                href: "#"
              },
              {
                id: "account",
                label: "Account",
                href: "#"
              }
            ]}
          />
          <ComposableActionMenu label="Options B">
            <ComposableActionMenuItem href="#basket">
              Basket
            </ComposableActionMenuItem>
            <ComposableActionMenuItem href="#settings">
              Settings
            </ComposableActionMenuItem>
            <ComposableActionMenuItem href="#account">
              Account
            </ComposableActionMenuItem>
          </ComposableActionMenu>
        </header>
        <ProductList products={products} />
      </div>
    </div>
  );
}
