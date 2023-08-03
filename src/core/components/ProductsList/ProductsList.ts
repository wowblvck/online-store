import ProductItem from "../ProductItem/ProductItem";
import { productModel } from "../../models/ProductsModel";
import {
  BrandCounts,
  CategoryCounts,
  ProductData,
} from "../../interfaces/Products";
import { store } from "../../store/Store";
import { AppComponent } from "../../interfaces/AppComponent";
import { productsInfo } from "../../data/products/products";
import { updateTotal } from "../Header/Total/Total";
import {
  filterProducts,
  updateBrandAmount,
  updateCategoryAmount,
} from "../../utils/functions";
import FoundItems from "../Catalog/Products/ProductsHeader/FoundItems/FoundItems";
// import { BrandsCount } from "../../interfaces/Filter";

export default class ProductsList implements AppComponent {
  private loading = !store.Loaded ? true : false;
  private error: Error | null = null;
  private static products: ProductData[] = [];
  private static productsComponents: ProductItem[] = [];

  constructor() {
    this.fetchProducts();
    if (!store.Loaded) {
      store.$state.subscribe(({ products }) => {
        if (products.length) {
          this.loading = false;
          this.error = null;

          const filters = {
            categories: store.FiltersCategories,
            brands: store.FiltersBrands,
            search: store.StateSearch,
            price: { minPrice: store.MinPrice, maxPrice: store.MaxPrice },
            stock: { minStock: store.MinStock, maxStock: store.MaxStock },
          };

          const filteredProducts = filterProducts(store.Products, filters);

          if (filteredProducts.length) {
            ProductsList.products = filteredProducts;
            ProductsList.productsComponents = ProductsList.products.map(
              (product: ProductData) => new ProductItem(product)
            );
          } else {
            ProductsList.products = products;
            ProductsList.productsComponents = ProductsList.products.map(
              (product: ProductData) => new ProductItem(product)
            );
          }

          const searchInput = document.querySelector(
            ".search__input"
          ) as HTMLInputElement;

          if (searchInput) {
            searchInput.value = store.StateSearch;
          }

          const foundWrapper = document.querySelector(
            ".found-items"
          ) as HTMLParagraphElement;

          if (foundWrapper) {
            const foundItems = new FoundItems();
            foundWrapper.innerHTML = foundItems.render();
          }
        }
      });
    } else {
      const filters = {
        categories: store.FiltersCategories,
        brands: store.FiltersBrands,
        search: store.StateSearch,
        price: { minPrice: store.MinPrice, maxPrice: store.MaxPrice },
        stock: { minStock: store.MinStock, maxStock: store.MaxStock },
      };

      const filteredProducts = filterProducts(store.Products, filters);

      const brandCounts: BrandCounts = filteredProducts.reduce(
        (counts, product) => {
          const brand = product.brand;
          counts[brand] = (counts[brand] || 0) + 1;
          return counts;
        },
        {} as BrandCounts
      );

      const categoryCounts: CategoryCounts = filteredProducts.reduce(
        (counts, product) => {
          const category = product.category;
          counts[category] = (counts[category] || 0) + 1;
          return counts;
        },
        {} as CategoryCounts
      );

      updateBrandAmount(brandCounts);
      updateCategoryAmount(categoryCounts);

      if (filteredProducts.length) {
        ProductsList.products = filteredProducts;
        ProductsList.productsComponents = ProductsList.products.map(
          (product: ProductData) => new ProductItem(product)
        );
        store.FilterProducts = ProductsList.products;
      } else {
        ProductsList.products = [];
        ProductsList.productsComponents = [];
        store.FilterProducts = ProductsList.products;
      }
    }

    const foundWrapper = document.querySelector(
      ".found-items"
    ) as HTMLParagraphElement;

    if (foundWrapper) {
      const foundItems = new FoundItems();
      foundWrapper.innerHTML = foundItems.render();
    }
  }

  fetchProducts = () => {
    productModel.getProducts().catch((error) => {
      this.error = error;
      this.loading = false;
    });
  };

  render = () => {
    return `
      ${
        this.loading
          ? `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
          : ""
      }
      ${this.error ? `${this.error.message}` : ""}
      ${
        !ProductsList.productsComponents.length && this.loading !== true
          ? `<p class="products-content__no-items">Not items found</p>`
          : ProductsList.productsComponents
              .map((product) => {
                return product.render();
              })
              .join("")
      }
    `;
  };

  addEvents = () => {
    ProductsList.productsComponents.forEach((product) => {
      product.addEvents();
    });
  };
}

export let cartArray: string[] = [];

export const getButtonID = (selector: HTMLButtonElement) =>
  selector.getAttribute("id")?.replace(/\D/g, "") as string;

export const checkInCart = (id: string) => cartArray.includes(id);

export const addToCart = (id: string) => {
  cartArray.push(id);
  const productCounter = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  productCounter.textContent = `${cartArray.length}`;
  localStorage.setItem(`add-buttons-value${id}`, `Remove`);
  let totalHeader = 0;
  for (let i = 0; i < cartArray.length; i++) {
    for (let j = 0; j < productsInfo.length; j++) {
      if (cartArray[i] == productsInfo[j].id.toString()) {
        totalHeader = totalHeader + productsInfo[j].price;
      }
    }
  }
  localStorage.setItem("total", `${totalHeader}`);
  updateTotal();
};

export const removeFromCart = (id: string) => {
  let totalHeader = Number(
    document.querySelector(".total__value")?.textContent?.slice(0, -4)
  );
  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i] == id) {
      totalHeader = totalHeader - productsInfo[Number(id)].price;
    }
  }
  localStorage.setItem("total", `${totalHeader}`);
  updateTotal();
  cartArray = cartArray.filter((el) => el != `${id}`);
  const productCounter = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  productCounter.textContent = `${cartArray.length}`;
  localStorage.setItem(`add-buttons-value${id}`, `Add to cart`);
};

export const removeFromCart1 = (id: string) => {
  updateTotal();
  cartArray = cartArray.filter((x) => cartArray.indexOf(x));
  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i] === `${id}`) {
      cartArray.splice(i, 1);
    }
  }
  const productCounter = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  productCounter.textContent = `${cartArray.length}`;
  localStorage.setItem(`add-buttons-value${id}`, `Add to cart`);
};

export const getButtons = (timer: number): Promise<HTMLButtonElement> => {
  return new Promise<HTMLButtonElement>(() => {
    setTimeout(() => {
      const btnArr = document.querySelectorAll(".btn__add-to-cart");
      for (let i = 0; i < btnArr.length; i++) {
        if (localStorage.getItem(`add-buttons-value${0}`)) {
          btnArr[i].textContent = localStorage.getItem(`add-buttons-value${i}`);
        }
      }
      btnArr.forEach((el) =>
        el.addEventListener("click", () => {
          if (el.textContent === "Add to cart") {
            el.textContent = "Remove";
            addToCart(`${el.getAttribute("id")}`);
          } else {
            el.textContent = "Add to cart";
            removeFromCart(`${el.getAttribute("id")}`);
          }
        })
      );
      return btnArr;
    }, timer);
  });
};

addEventListener("popstate", () => {
  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i] == "null") {
      cartArray.splice(i, 1);
    }
  }
  saveButtons();
  saveCart();
});

export const saveButtons = () => {
  const btnAdd = document.querySelectorAll(".btn__add-to-cart");
  if (btnAdd.length != 0) {
    for (let i = 0; i < btnAdd.length; i++) {
      localStorage.setItem(`add-buttons-value${i}`, `${btnAdd[i].textContent}`);
    }
  }
};

window.addEventListener("beforeunload", saveButtons);

export const saveCart = () => {
  if (cartArray.length === 0) {
    localStorage.setItem("product-in-cart", "0");
    for (let i = 0; i < productsInfo.length; i++) {
      localStorage.removeItem(`product-in-cart${i}`);
    }
  }
  for (let i = 0; i < cartArray.length; i++) {
    localStorage.setItem(`product-in-cart${i}`, cartArray[i]);
    localStorage.setItem("product-in-cart", cartArray.length.toString());
  }
};

window.addEventListener("beforeunload", saveCart);
window.addEventListener("beforeunload", () => {
  const headerTotal = document.querySelector(
    ".total__value"
  ) as HTMLSpanElement;
  localStorage.setItem("total", `${headerTotal.textContent?.slice(0, -4)}`);
});

window.addEventListener("load", () => {
  for (let i = 0; i < Number(localStorage.getItem("product-in-cart")); i++) {
    cartArray.push(localStorage.getItem(`product-in-cart${i}`) as string);
  }
});

window.addEventListener("load", () => {
  const productCounter = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  if (localStorage.getItem("product-in-cart") === null) {
    productCounter.textContent = "0";
  } else {
    productCounter.textContent = `${localStorage.getItem("product-in-cart")}`;
  }
});

window.addEventListener("load", updateTotal);
