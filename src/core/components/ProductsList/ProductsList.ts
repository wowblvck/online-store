import ProductItem from "../ProductItem/ProductItem";
import { productModel } from "../../models/ProductsModel";
import { ProductData } from "../../interfaces/Products";
import { store } from "../../store/Store";
import { AppComponent } from "../../interfaces/AppComponent";
import { productsInfo } from "../../data/products/products";
import { updateTotal } from "../Header/Total/Total";

export default class ProductsList implements AppComponent {
  private loading = !store.Loaded ? true : false;
  private error: Error | null = null;
  private static products: ProductData[] = [];
  private static productsComponents: ProductItem[] = [];

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
          ProductsList.productsComponents = ProductsList.products.map(
            (product: ProductData) => new ProductItem(product)
          );
        }
      });
    } else {
      if (store.SearchedProducts.length !== 0) {
        ProductsList.products = store.SearchedProducts;
        ProductsList.productsComponents = ProductsList.products.map(
          (product: ProductData) => new ProductItem(product)
        );
      } else {
        const searchInput = document.querySelector(
          ".search__input"
        ) as HTMLInputElement;
        if (searchInput) {
          if (searchInput.value.length !== 0) {
            ProductsList.products = [];
            ProductsList.productsComponents = ProductsList.products.map(
              (product: ProductData) => new ProductItem(product)
            );
          } else {
            ProductsList.products = store.FilterProducts.length
              ? store.FilterProducts
              : store.Products;
            ProductsList.productsComponents = ProductsList.products.map(
              (product: ProductData) => new ProductItem(product)
            );
          }
        } else {
          ProductsList.products = store.FilterProducts.length
            ? store.FilterProducts
            : store.Products;
          ProductsList.productsComponents = ProductsList.products.map(
            (product: ProductData) => new ProductItem(product)
          );
        }
      }
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
