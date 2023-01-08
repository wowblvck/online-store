import ProductItem from "../ProductItem/ProductItem";
import { productModel } from "../../models/ProductsModel";
import { ProductData } from "../../interfaces/Products";
import { store } from "../../store/Store";
// import { productsInfo } from "../../data/products/products";

export default class ProductsList {
  private loading = !store.Loaded ? true : false;
  private error: Error | null = null;
  private static products: ProductData[] = [];

  constructor(newProducts?: ProductData[]) {
    this.fetchProducts();
    if (!store.Loaded) {
      store.$state.subscribe(({ products }) => {
        if (products.length && this.loading === true) {
          this.loading = false;
          this.error = null;
          ProductsList.products = products;
        }
      });
    } else {
      if (newProducts) {
        ProductsList.products = newProducts;
      } else {
        ProductsList.products = store.Products;
      }
    }
  }

  fetchProducts = () => {
    // store.update();
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
      ${ProductsList.products
        .map((product: ProductData) => new ProductItem(product))
        .map((el: ProductItem) => el.render().outerHTML)
        .join("")}
    `;
  };
}

export const cartArray: string[] = [];

/* let productCounter;
setTimeout(() => {
  productCounter = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  if (productCounter) {
    productCounter.textContent = localStorage.getItem("product-in-cart")?.toString();
  }
}, 1000); */

// const addToCart = (id: string) => {
//   cartArray.push(id);
//   const productCounter = document.querySelector(
//     ".products-count"
//   ) as HTMLParagraphElement;
//   productCounter.textContent = `${cartArray.length}`;
// };

// const removeFromCart = (id: string) => {
//   for (let i = 0; i < cartArray.length; i++) {
//     if (cartArray[i] === `${id}`) {
//       cartArray.splice(i, 1);
//     }
//   }
//   const productCounter = document.querySelector(
//     ".products-count"
//   ) as HTMLParagraphElement;
//   productCounter.textContent = `${cartArray.length}`;
// };

// export const getButtons = (): Promise<HTMLButtonElement> => {
//   return new Promise<HTMLButtonElement>(() => {
//     setTimeout(() => {
//       const btnArr = document.querySelectorAll(".btn__add-to-cart");
//       for (let i = 0; i < btnArr.length; i++) {
//         if (localStorage.getItem(`add-buttons-value${0}`)) {
//           btnArr[i].textContent = localStorage.getItem(`add-buttons-value${i}`);
//         }
//       }
//       btnArr.forEach((el) =>
//         el.addEventListener("click", () => {
//           if (el.textContent === "Add to cart") {
//             el.textContent = "Remove";
//             addToCart(`${el.getAttribute("id")}`);
//           } else {
//             el.textContent = "Add to cart";
//             removeFromCart(`${el.getAttribute("id")}`);
//           }
//         })
//       );
//       return btnArr;
//     }, 2010);
//   });
// };

// addEventListener("popstate", () => {
//   for (let i = 0; i < cartArray.length; i++) {
//     if (cartArray[i] == "null") {
//       cartArray.splice(i, 1);
//     }
//   }
//   saveButtons();
//   saveCart();
//   getButtons();
//   const productCounter = document.querySelector(
//     ".products-count"
//   ) as HTMLParagraphElement;
//   if (localStorage.getItem("product-in-cart") == "null") {
//     productCounter.textContent = "0";
//   } else {
//     productCounter.textContent = `${localStorage.getItem("product-in-cart")}`;
//   }
// });

// const saveButtons = () => {
//   const btnAdd = document.querySelectorAll(".btn__add-to-cart");
//   if (btnAdd.length != 0) {
//     for (let i = 0; i < btnAdd.length; i++) {
//       localStorage.setItem(`add-buttons-value${i}`, `${btnAdd[i].textContent}`);
//     }
//   }
// };

// window.addEventListener("beforeunload", saveButtons);

// const saveCart = () => {
//   if (cartArray.length === 0) {
//     localStorage.setItem("product-in-cart", "0");
//     for (let i = 0; i < productsInfo.length; i++) {
//       localStorage.removeItem(`product-in-cart${i}`);
//     }
//   }
//   for (let i = 0; i < cartArray.length; i++) {
//     localStorage.setItem(`product-in-cart${i}`, cartArray[i]);
//     localStorage.setItem("product-in-cart", cartArray.length.toString());
//   }
// };

// window.addEventListener("beforeunload", saveCart);

// window.addEventListener("load", () => {
//   for (let i = 0; i < Number(localStorage.getItem("product-in-cart")); i++) {
//     cartArray.push(localStorage.getItem(`product-in-cart${i}`) as string);
//   }
// });

// window.addEventListener("load", () => {
//   const productCounter = document.querySelector(
//     ".products-count"
//   ) as HTMLParagraphElement;
//   if (localStorage.getItem("product-in-cart") === null) {
//     productCounter.textContent = "0";
//   } else {
//     productCounter.textContent = `${localStorage.getItem("product-in-cart")}`;
//   }
// });
