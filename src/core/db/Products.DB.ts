//Loading a list of products from .json files. Create a simulation of loading the database using Promise
//Загружаем список товаров из файлы .json. Создаем имитацию загрузки базы с помощью Promise

import { ProductData, ProductCategories } from "../interfaces/Products";
import { productsInfo } from "../data/products/products";

const getProducts = (products: ProductData[]): Promise<ProductData[]> => {
  return new Promise<ProductData[]>((resolve) => {
    setTimeout(() => {
      resolve(products);
      localStorage.setItem("allProducts", JSON.stringify(products));
    }, 2000);
  });
};

export async function getProductsFromStorage(): Promise<ProductData[]> {
  const PRODUCTS: ProductData[] = productsInfo;
  return await new Promise((resolve, reject) => {
    try {
      const products = localStorage.getItem("allProducts");
      if (products === null) {
        resolve(getProducts(PRODUCTS));
      } else {
        const arrayProducts: ProductData[] = JSON.parse(products);
        if (
          JSON.stringify(arrayProducts.sort((a, b) => a.id - b.id)) ===
          JSON.stringify(PRODUCTS.sort((a, b) => a.id - b.id))
        ) {
          resolve(arrayProducts);
        } else {
          resolve(getProducts(PRODUCTS));
        }
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getFilteredProductsFromStorage(): Promise<ProductData[]> {
  return await new Promise((resolve, reject) => {
    try {
      const products = localStorage.getItem("filter-products");
      if (products !== null) {
        const arrayProducts = JSON.parse(products);
        resolve(arrayProducts);
      } else {
        resolve([]);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getCategoriesFromStorage(
  products: ProductData[]
): Promise<ProductCategories[]> {
  return await new Promise((resolve, reject) => {
    try {
      const filters = localStorage.getItem("filters-categories");
      if (filters !== null) {
        const arrayFilters = JSON.parse(filters);
        resolve(arrayFilters);
      } else {
        const categories = Array.from(
          new Set(products.map((product: ProductData) => product.category))
        );
        const productCategories: ProductCategories[] = categories.map(
          (category) => ({
            name: category,
            state: false,
          })
        );
        localStorage.setItem(
          "filters-categories",
          JSON.stringify(productCategories)
        );
        resolve(productCategories);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getBrandsFromStorage(
  products: ProductData[]
): Promise<ProductCategories[]> {
  return await new Promise((resolve, reject) => {
    try {
      const filters = localStorage.getItem("filters-brands");
      if (filters !== null) {
        const arrayFilters = JSON.parse(filters);
        resolve(arrayFilters);
      } else {
        const brands = Array.from(
          new Set(products.map((product: ProductData) => product.brand))
        );
        const productBrands: ProductCategories[] = brands.map((brand) => ({
          name: brand,
          state: false,
        }));
        localStorage.setItem("filters-brands", JSON.stringify(productBrands));
        resolve(productBrands);
      }
    } catch (error) {
      reject(error);
    }
  });
}
