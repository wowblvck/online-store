import ProductItem from "../ProductItem/ProductItem";
import { productModel } from "../../models/ProductsModel";
import { ProductData } from "../../interfaces/Products";
import { store } from "../../store/Store";
import { productsInfo } from "../../data/products/products";
import { setBtns } from "../ProductItem/ProductItem";
import { updateTotal } from "../Header/Total/Total";

export default class ProductsList {
  private loading = !store.Loaded ? true : false;
  private error: Error | null = null;
  private static products: ProductData[] = [];

  constructor() {
    this.fetchProducts();
    if (!store.Loaded) {
      store.$state.subscribe(({ products, filterProducts }) => {
        if ((products.length || filterProducts.length) && this.loading) {
          this.loading = false;
          this.error = null;
          ProductsList.products = filterProducts.length
            ? filterProducts
            : products;
        }
      });
    } else {
      if (store.SearchedProducts.length !== 0) {
        ProductsList.products = store.SearchedProducts;
      } else {
        const searchInput = document.querySelector(
          ".search__input"
        ) as HTMLInputElement;
        if (searchInput) {
          if (searchInput.value.length) {
            ProductsList.products = [];
          } else {
            ProductsList.products = store.FilterProducts.length
              ? store.FilterProducts
              : store.Products;
          }
        } else {
          ProductsList.products = store.FilterProducts.length
            ? store.FilterProducts
            : store.Products;
        }
      }
    }
  }

  fetchProducts = () => {
    productModel.getProducts().catch((error) => {
      this.error = error;
      this.loading = false;
    });
    getButtons(2010);
    setBtns(2015);
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
        !ProductsList.products.length && this.loading !== true
          ? `<p class="products-content__no-items">Not items found</p>`
          : ProductsList.products
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((product: ProductData) => new ProductItem(product))
              .map((el: ProductItem) => el.render().outerHTML)
              .join("")
      }
    `;
  };
}

export let cartArray: string[] = [];
export let totalSum = 0;

export const addToCart = (id: string) => {
  cartArray.push(id);
  totalSum = totalSum + productsInfo[Number(id)].price;
  localStorage.setItem("total", `${totalSum}`);
  const productCounter = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  productCounter.textContent = `${cartArray.length}`;
  localStorage.setItem(`add-buttons-value${id}`, `Remove`);
  console.log(cartArray);
  updateTotal();
};

export const removeFromCart = (id: string) => {
  totalSum = totalSum - productsInfo[Number(id)].price;
  localStorage.setItem("total", `${totalSum}`);
  console.log(totalSum);
  cartArray = cartArray.filter((el) => el != `${id}`);
  const productCounter = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  productCounter.textContent = `${cartArray.length}`;
  localStorage.setItem(`add-buttons-value${id}`, `Add to cart`);
  console.log(cartArray);
  updateTotal();
};

export const removeFromCart1 = (id: string) => {
  cartArray = cartArray.filter((x) => cartArray.indexOf(x));
  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i] === `${id}`) {
      totalSum - productsInfo[Number(id)].price;
      cartArray.splice(i, 1);
    }
  }
  localStorage.setItem("total", `${totalSum}`);
  const productCounter = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  productCounter.textContent = `${cartArray.length}`;
  localStorage.setItem(`add-buttons-value${id}`, `Add to cart`);
  console.log(cartArray);
  updateTotal();
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
  getButtons(10);
  setBtns(15);
  const productCounter = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  if (localStorage.getItem("product-in-cart") == "null") {
    productCounter.textContent = "0";
  } else {
    productCounter.textContent = `${localStorage.getItem("product-in-cart")}`;
  }
});

const saveButtons = () => {
  const btnAdd = document.querySelectorAll(".btn__add-to-cart");
  if (btnAdd.length != 0) {
    for (let i = 0; i < btnAdd.length; i++) {
      localStorage.setItem(`add-buttons-value${i}`, `${btnAdd[i].textContent}`);
    }
  }
};

window.addEventListener("beforeunload", saveButtons);

const saveCart = () => {
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
  localStorage.setItem("total", `${totalSum}`);
});

window.addEventListener("load", () => {
  for (let i = 0; i < Number(localStorage.getItem("product-in-cart")); i++) {
    cartArray.push(localStorage.getItem(`product-in-cart${i}`) as string);
  }
  if (localStorage.getItem("total")) {
    totalSum = Number(localStorage.getItem("total"));
  }
  console.log(cartArray);
  getButtons(2010);
  setBtns(2015);
  updateTotal;
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
