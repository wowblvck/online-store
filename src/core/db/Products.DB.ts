//Loading a list of products from .json files. Create a simulation of loading the database using Promise
//Загружаем список товаров из файлы .json. Создаем имитацию загрузки базы с помощью Promise

import {
  ProductData,
  ProductCategories,
  ProductBrands,
  SortState,
} from "../interfaces/Products";
import { productsInfo } from "../data/products/products";
import { PriceData, StockData } from "../interfaces/State";

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
      const products = localStorage.getItem("filteredProducts");
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

export async function getSortProductsFromStorage(): Promise<SortState> {
  return await new Promise((resolve, reject) => {
    try {
      const sorts = localStorage.getItem("sortMethod");
      if (sorts !== null) {
        const arraySorts = JSON.parse(sorts);
        resolve(arraySorts);
      } else {
        resolve({ name: "Sort by", value: 0 });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getCategoriesStateFromStorage(
  products: ProductData[]
): Promise<ProductCategories[]> {
  return await new Promise((resolve, reject) => {
    try {
      const filters = localStorage.getItem("stateCategories");
      if (filters !== null) {
        const arrayFilters = JSON.parse(filters);
        resolve(arrayFilters);
      } else {
        const categories = Array.from(
          new Set(products.map((product: ProductData) => product.category))
        );

        const categoryCounts = products.reduce(
          (counts: { [key: string]: number }, product: ProductData) => {
            counts[product.category] = (counts[product.category] || 0) + 1;
            return counts;
          },
          {}
        );

        const productCategories: ProductCategories[] = categories.map(
          (category) => ({
            name: category,
            amount: categoryCounts[category] || 0,
            stock: categoryCounts[category] || 0,
            state: false,
          })
        );
        localStorage.setItem(
          "stateCategories",
          JSON.stringify(productCategories)
        );
        resolve(productCategories);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getCategoriesFiltersFromStorage(): Promise<[]> {
  return await new Promise((resolve, reject) => {
    try {
      const filters = localStorage.getItem("filtersCategories");
      if (filters !== null) {
        const arrayFilters = JSON.parse(filters);
        resolve(arrayFilters);
      } else {
        resolve([]);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getPriceFiltersFromStorage(
  products: ProductData[]
): Promise<PriceData> {
  return await new Promise((resolve, reject) => {
    try {
      const filters = localStorage.getItem("filteredPrice");
      if (filters !== null) {
        const arrayFilters: PriceData = JSON.parse(filters);
        resolve(arrayFilters);
      } else {
        const minValue = Math.min(...products.map((product) => product.price));
        const maxValue = Math.max(...products.map((product) => product.price));
        resolve({ minPrice: minValue, maxPrice: maxValue });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getStockFiltersFromStorage(
  products: ProductData[]
): Promise<StockData> {
  return await new Promise((resolve, reject) => {
    try {
      const filters = localStorage.getItem("filteredStock");
      if (filters !== null) {
        const arrayFilters: StockData = JSON.parse(filters);
        resolve(arrayFilters);
      } else {
        const minValue = Math.min(...products.map((product) => product.stock));
        const maxValue = Math.max(...products.map((product) => product.stock));
        resolve({ minStock: minValue, maxStock: maxValue });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getSearchFiltersFromStorage(): Promise<string> {
  return await new Promise((resolve, reject) => {
    try {
      const filters = localStorage.getItem("filteredSearch");
      if (filters !== null) {
        resolve(filters);
      } else {
        resolve("");
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getBrandsFiltersFromStorage(): Promise<[]> {
  return await new Promise((resolve, reject) => {
    try {
      const filters = localStorage.getItem("filtersBrands");
      if (filters !== null) {
        const arrayFilters = JSON.parse(filters);
        resolve(arrayFilters);
      } else {
        resolve([]);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export async function getBrandsStateFromStorage(
  products: ProductData[]
): Promise<ProductBrands[]> {
  return await new Promise((resolve, reject) => {
    try {
      const filters = localStorage.getItem("stateBrands");
      if (filters !== null) {
        const arrayFilters = JSON.parse(filters);
        resolve(arrayFilters);
      } else {
        const brands = Array.from(
          new Set(products.map((product: ProductData) => product.brand))
        );

        const brandsCounts = products.reduce(
          (counts: { [key: string]: number }, product: ProductData) => {
            counts[product.brand] = (counts[product.brand] || 0) + 1;
            return counts;
          },
          {}
        );

        const productBrands: ProductBrands[] = brands.map((brand) => ({
          name: brand,
          amount: brandsCounts[brand] || 0,
          stock: brandsCounts[brand] || 0,
          state: false,
        }));

        localStorage.setItem("stateBrands", JSON.stringify(productBrands));
        resolve(productBrands);
      }
    } catch (error) {
      reject(error);
    }
  });
}
