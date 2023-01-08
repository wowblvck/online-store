import { ProductData } from "./Products";

interface CardData {
  [key: string]: {
    amount: number;
    product: ProductData;
  };
}

interface Cart {
  products: CardData;
}

export { Cart };
