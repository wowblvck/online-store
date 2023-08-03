//Function: creates an element and assigns classes
//Функция: создает элемент и присвает классы
//Example: createElementWithClass("div", "nav", "container__nav")

import { Filters } from "../interfaces/Filter";
import { ImageMap } from "../interfaces/Images";
import {
  BrandCounts,
  CategoryCounts,
  ProductData,
} from "../interfaces/Products";
import { PriceData, StockData } from "../interfaces/State";
import { store } from "../store/Store";

const createElementWithClass = (elemName: string, ...args: string[]) => {
  const node = document.createElement(elemName);
  node.classList.add(...args);
  return node;
};

function importAll(r: __WebpackModuleApi.RequireContext): ImageMap {
  const images: ImageMap = {};
  r.keys().forEach((item: string) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function toggleObjects(array: ProductData[], objects: ProductData[]) {
  const toRemove = array.filter((a) => !objects.some((o) => o.id === a.id));
  const toAdd = objects.filter((o) => !array.some((a) => a.id === o.id));
  return array.filter((a) => toRemove.indexOf(a) === -1).concat(toAdd);
}

function addOrRemove<T>(
  source: T[],
  candidate: T,
  comparator?: (a: T, b: T) => boolean
): T[] {
  const c = comparator || ((a, b) => a == b);
  const e = source.find((i) => c(i, candidate));
  return e ? source.filter((i) => !c(i, candidate)) : [...source, candidate];
}

function filterProducts(products: ProductData[], filters: Filters) {
  return products.filter((product) => {
    if (
      filters.categories.length &&
      !categoryFilter(product, filters.categories)
    )
      return false;
    if (filters.brands.length && !brandFilter(product, filters.brands))
      return false;
    if (filters.search.length && !searchFilter(product, filters.search))
      return false;
    if (filters.price && !priceFilter(product, filters.price)) return false;
    if (filters.stock && !stockFilter(product, filters.stock)) return false;
    return true;
  });
}

function searchFilter(product: ProductData, searchValue: string) {
  const searchLower = searchValue.toLowerCase();
  return (
    product.title.toLowerCase().includes(searchLower) ||
    product.brand.toLowerCase().includes(searchLower) ||
    product.category.toLowerCase().includes(searchLower)
  );
}

function priceFilter(product: ProductData, price: PriceData) {
  return product.price >= price.minPrice && product.price <= price.maxPrice;
}

function stockFilter(product: ProductData, stock: StockData) {
  return product.stock >= stock.minStock && product.stock <= stock.maxStock;
}

function categoryFilter(product: ProductData, categories: string[]) {
  return categories.includes(product.category);
}

function brandFilter(product: ProductData, brands: string[]) {
  return brands.includes(product.brand);
}

function sortMethod(products: ProductData[], method = 0): ProductData[] {
  let arr = products;
  switch (method) {
    case 1: {
      return (arr = products.sort((a, b) => a.price - b.price));
    }
  }
  return arr;
}

function updateBrandAmount(brandCounts: BrandCounts) {
  store.StateBrands.forEach((el) => {
    const brandID = document.getElementById(`brand_${el.name}`) as HTMLElement;
    if (brandID) {
      const brandContent = brandID.querySelector(
        ".brand-amount"
      ) as HTMLSpanElement;
      if (brandContent) {
        const brandCount = brandCounts[el.name] || 0;

        brandContent.textContent = brandCount.toString();

        const itemIndex = store.StateBrands.findIndex(
          (elem) => elem.name === el.name
        );
        store.StateBrands[itemIndex].stock = brandCount;
        localStorage.setItem("stateBrands", JSON.stringify(store.StateBrands));
      }
    }
  });
}

function updateCategoryAmount(categoryCounts: CategoryCounts) {
  store.StateCategories.forEach((el) => {
    const categoryID = document.getElementById(
      `category_${el.name}`
    ) as HTMLElement;
    if (categoryID) {
      const categoryContent = categoryID.querySelector(
        ".category-amount"
      ) as HTMLSpanElement;
      if (categoryContent) {
        const categoryCount = categoryCounts[el.name] || 0;

        categoryContent.textContent = categoryCount.toString();

        const itemIndex = store.StateCategories.findIndex(
          (elem) => elem.name === el.name
        );
        store.StateCategories[itemIndex].stock = categoryCount;
        localStorage.setItem(
          "stateCategories",
          JSON.stringify(store.StateCategories)
        );
      }
    }
  });
}

export {
  createElementWithClass,
  importAll,
  toggleObjects,
  addOrRemove,
  searchFilter,
  filterProducts,
  categoryFilter,
  brandFilter,
  priceFilter,
  sortMethod,
  updateBrandAmount,
  updateCategoryAmount,
};
