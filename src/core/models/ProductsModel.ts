//Create a product model of the possibility of expanding and managing goods. We load products from product databases.
//Создаем модель продуктов возможности расширения и управления товарами. Подгружаем продукты из базыд данных продуктов.

import { ProductData } from "../interfaces/Products";
import {
  getProductsFromStorage,
  getCategoriesStateFromStorage,
  getFilteredProductsFromStorage,
  getBrandsStateFromStorage,
  getCategoriesFiltersFromStorage,
  getBrandsFiltersFromStorage,
  getPriceFiltersFromStorage,
  getStockFiltersFromStorage,
  getSearchFiltersFromStorage,
  getSortProductsFromStorage,
} from "../db/Products.DB";

import { store } from "../store/Store";

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
  async getProducts(): Promise<ProductData[]> {
    const filterProducts = await getFilteredProductsFromStorage();
    const products = await getProductsFromStorage();
    const categories = await getCategoriesStateFromStorage(products);
    const brands = await getBrandsStateFromStorage(products);
    const filtersCategories = await getCategoriesFiltersFromStorage();
    const filtersBrands = await getBrandsFiltersFromStorage();
    const filtersPrice = await getPriceFiltersFromStorage(products);
    const filtersStock = await getStockFiltersFromStorage(products);
    const filtersSearch = await getSearchFiltersFromStorage();
    const sorts = await getSortProductsFromStorage();
    if (!store.Loaded) {
      store.Loaded = true;
      store.update({
        filterProducts: filterProducts,
        products: products,
        stateCategories: categories,
        stateBrands: brands,
        filterCategories: filtersCategories,
        filterBrands: filtersBrands,
        filterSearch: filtersSearch,
        price: {
          minPrice: filtersPrice.minPrice,
          maxPrice: filtersPrice.maxPrice,
        },
        stock: {
          minStock: filtersStock.minStock,
          maxStock: filtersStock.maxStock,
        },
        sortMethod: sorts,
      });
    }
    return products;
  }
}

export const productModel = new ProductsModel();
