import {
  ProductData,
  ProductCategories,
  ProductBrands,
  SortState,
} from "./Products";
import { Cart } from "./Cart";

interface State {
  cart: Cart;
  products: ProductData[];
  sortMethod: SortState;
  stateCategories: ProductCategories[];
  stateBrands: ProductBrands[];
  filterProducts: ProductData[];
  filterBrands: string[];
  filterCategories: string[];
  filterSearch: string;
  price: PriceData;
  stock: StockData;
}

interface PriceData {
  minPrice: number | 0;
  maxPrice: number | 0;
}

interface StockData {
  minStock: number | 0;
  maxStock: number | 0;
}

export { State, PriceData, StockData };
