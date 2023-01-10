import { ProductData, ProductCategories, ProductBrands } from "./Products";
import { Cart } from "./Cart";

interface State {
  cart: Cart;
  products: ProductData[];
  categories: ProductCategories[];
  filterProducts: ProductData[];
  searchedProducts: ProductData[];
  brands: ProductBrands[];
}

export { State };
