import ProductData from "../../../../../interfaces/Products";
import { store } from "../../../../../store/Store";

class ProductsPrice {
  private loading = true;
  private minValue = 0;
  private maxValue = 0;
  private products: ProductData[] = [];

  constructor() {
    store.$state.subscribe(({ products }) => {
      if (products.length) {
        this.products = products;
        this.loading = false;
        this.minValue = Math.min(
          ...this.products.map((product) => product.price)
        );
        this.maxValue = Math.max(
          ...this.products.map((product) => product.price)
        );
      }
    });
  }

  render = () => {
    return `
      <h2 class="filters-content__title">Price</h2>
      ${
        this.loading
          ? `<div class="lds-ring lds-ring_view_small"><div></div><div></div><div></div><div></div></div>`
          : ""
      }
      ${
        this.products.length
          ? `
            <div class="price-content">
              <p class="price-content__min">$${this.minValue}</p>
              <p class="price-content__max">$${this.maxValue}</p>
            </div>
            <div class="filters-range">
              <input type="range" class="filters-range__input" min="${this.minValue}" max="${this.maxValue}" value="${this.minValue}">
              <input type="range" class="filters-range__input" min="${this.minValue}" max="${this.maxValue}" value="${this.maxValue}">
            </div>
            `
          : ""
      }
    `;
  };
}

export default ProductsPrice;
