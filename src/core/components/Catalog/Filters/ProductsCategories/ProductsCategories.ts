import ProductData from "../../../../interfaces/Products";
import { store } from "../../../../store/Store";

class ProductsCategories {
  private loading = true;
  private products: ProductData[] = [];

  constructor() {
    store.$state.subscribe(({ products }) => {
      if (products.length) {
        this.products = products;
        this.loading = false;
      }
    });
  }

  render = () => {
    return `
      ${
        this.loading
          ? `<div class="lds-ring lds-ring_view_catalog"><div></div><div></div><div></div><div></div></div>`
          : ""
      }
      ${Array.from(
        new Set(this.products.map((product: ProductData) => product.category))
      )
        .map((category) => {
          return `<li class="filters-form__item">
            <input class="filters-form__input" type="checkbox" id="${category}">
            <label class="filters-form__label for="${category}">${
            category.charAt(0).toUpperCase() + category.slice(1)
          }</label>
          </li>`;
        })
        .join("")}
    `;
  };
}

export default ProductsCategories;
