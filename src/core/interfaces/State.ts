import ProductData from "./Products";
import { Cart } from "./Cart";

interface State {
  cart: Cart;
  products: ProductData[];
}

export { State };
