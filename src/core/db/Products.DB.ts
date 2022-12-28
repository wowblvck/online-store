//Loading a list of products from .json files. Create a simulation of loading the database using Promise
//Загружаем список товаров из файлы .json. Создаем имитацию загрузки базы с помощью Promise

import ProductData from "../interfaces/Products";
import { productsInfo } from "../data/products/products";

const PRODUCTS: ProductData[] = productsInfo;

export const getProducts = (): Promise<ProductData[]> => {
  return new Promise<ProductData[]>((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 2000);
  });
};
