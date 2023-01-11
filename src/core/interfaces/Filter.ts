import { PriceData, StockData } from "./State";

interface Filters {
  categories: string[];
  brands: string[];
  search: string;
  price: PriceData;
  stock: StockData;
}

interface BrandsCount {
  [brand: string]: number;
}

export { Filters, BrandsCount };
