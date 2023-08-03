import { ProductData } from "./Products";

interface CartData {
  [key: string]: {
    amount: number;
    price: number;
    product: ProductData;
  };
}

interface Cart {
  products: CartData;
}

export { Cart };
