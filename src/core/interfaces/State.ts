import { ProductData, ProductCategories } from "./Products";
import { Cart } from "./Cart";

interface State {
  cart: Cart;
  products: ProductData[];
  categories: ProductCategories[];
  filterProducts: ProductData[];
}

export { State };
