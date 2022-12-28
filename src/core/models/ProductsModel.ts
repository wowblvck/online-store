//Create a product model of the possibility of expanding and managing goods. We load products from product databases.
//Создаем модель продуктов возможности расширения и управления товарами. Подгружаем продукты из базыд данных продуктов.

import ProductData from "../interfaces/Products";
import { getProducts } from "../db/Products.DB";

class ProductsModel {
  //Create and check for a single instance of a class
  //Создание и проверка на единственный инстанс класса
  static isExist = false;
  static instance: ProductsModel;
  constructor() {
    if (ProductsModel.isExist) {
      return ProductsModel.instance;
    }
    ProductsModel.isExist = true;
    ProductsModel.instance = this;
  }

  //Getting a list of products from the database
  //Получаем список товаров из базы данных
  getProducts(): Promise<ProductData[]> {
    return getProducts();
  }
}

export const productModel = new ProductsModel();
