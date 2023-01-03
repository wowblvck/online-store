import ProductData from "../../../../../interfaces/Products";
import { store } from "../../../../../store/Store";

class ProductsStock {
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
          ...this.products.map((product) => product.stock)
        );
        this.maxValue = Math.max(
          ...this.products.map((product) => product.stock)
        );
      }
    });
  }

  render = () => {
    return `
      <h2 class="filters-content__title">Stock</h2>
      ${
        this.loading
          ? `<div class="lds-ring lds-ring_view_small"><div></div><div></div><div></div><div></div></div>`
          : ""
      }
      ${
        this.products.length
          ? `
            <div class="stock-content">
              <p class="stock-content__min">${this.minValue}</p>
              <p class="stock-content__max">${this.maxValue}</p>
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

export default ProductsStock;
