import { AppComponent } from "../../../../../interfaces/AppComponent";
import { ProductData } from "../../../../../interfaces/Products";
import { store } from "../../../../../store/Store";
import ProductsList from "../../../../ProductsList/ProductsList";

class StockList implements AppComponent {
  private loading = !store.Loaded ? true : false;
  private static minValueFixed = 0;
  private static maxValueFixed = 0;
  private products: ProductData[] = [];

  constructor() {
    if (!store.Loaded) {
      store.$state.subscribe(({ products }) => {
        if (products.length && this.loading === true) {
          this.products = products;
          this.loading = false;

          StockList.minValueFixed = Math.min(
            ...this.products.map((product) => product.stock)
          );
          StockList.maxValueFixed = Math.max(
            ...this.products.map((product) => product.stock)
          );
        }
      });
    }
  }

  addEvents = () => {
    const minInput = document.querySelector(
      ".filters-range__input_min-stock"
    ) as HTMLInputElement;
    minInput?.addEventListener("input", () => {
      const valueNumber = Number(minInput.value);
      if (valueNumber > store.MaxStock) {
        minInput.value = store.MaxStock.toString();
      }

      store.MinStock = Number(minInput.value);

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const minContent = document.querySelector(
        ".stock-content__min"
      ) as HTMLParagraphElement;

      minContent.textContent = `${store.MinStock}`;

      const productList = new ProductsList();
      if (wrapper) {
        wrapper.innerHTML = productList.render();
        productList.addEvents();
      }

      store.updateStock();
    });

    const maxInput = document.querySelector(
      ".filters-range__input_max-stock"
    ) as HTMLInputElement;
    maxInput?.addEventListener("input", () => {
      const valueNumber = Number(maxInput.value);
      if (valueNumber < store.MinStock) {
        maxInput.value = store.MinStock.toString();
      }

      store.MaxStock = Number(maxInput.value);

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const maxContent = document.querySelector(
        ".stock-content__max"
      ) as HTMLParagraphElement;

      maxContent.textContent = `${store.MaxStock}`;

      const productList = new ProductsList();
      if (wrapper) {
        wrapper.innerHTML = productList.render();
        productList.addEvents();
      }

      store.updateStock();
    });
  };

  render = () => {
    return `
      <h2 class="filters-content__title">Stock</h2>
      ${
        this.loading
          ? `<div class="lds-ring lds-ring_view_small"><div></div><div></div><div></div><div></div></div>`
          : ""
      }
      ${
        this.loading
          ? ""
          : `
            <div class="stock-content">
              <p class="stock-content__min">${store.MinStock}</p>
              <p class="stock-content__max">${store.MaxStock}</p>
            </div>
            <div class="filters-range">
              <input type="range" class="filters-range__input filters-range__input_min-stock" min="${StockList.minValueFixed}" max="${StockList.maxValueFixed}" value="${store.MinStock}">
              <input type="range" class="filters-range__input filters-range__input_max-stock" min="${StockList.minValueFixed}" max="${StockList.maxValueFixed}" value="${store.MaxStock}">
            </div>
            `
      }
    `;
  };
}

export default StockList;
