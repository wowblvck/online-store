import { AppComponent } from "../../../../../interfaces/AppComponent";
import { ProductData } from "../../../../../interfaces/Products";
import { store } from "../../../../../store/Store";
import ProductsList from "../../../../ProductsList/ProductsList";

class PriceList implements AppComponent {
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

          PriceList.minValueFixed = Math.min(
            ...products.map((product) => product.price)
          );
          PriceList.maxValueFixed = Math.max(
            ...products.map((product) => product.price)
          );
        }
      });
    }
  }

  addEvents = () => {
    const minInput = document.querySelector(
      ".filters-range__input_min-price"
    ) as HTMLInputElement;
    minInput?.addEventListener("input", () => {
      const valueNumber = Number(minInput.value);
      if (valueNumber > store.MaxPrice) {
        minInput.value = store.MaxPrice.toString();
      }

      store.MinPrice = Number(minInput.value);

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const minContent = document.querySelector(
        ".price-content__min"
      ) as HTMLParagraphElement;

      minContent.textContent = `$${store.MinPrice}`;

      const productList = new ProductsList();
      if (wrapper) {
        wrapper.innerHTML = productList.render();
        productList.addEvents();
      }
      store.updatePrice();
    });

    const maxInput = document.querySelector(
      ".filters-range__input_max-price"
    ) as HTMLInputElement;
    maxInput?.addEventListener("input", () => {
      const valueNumber = Number(maxInput.value);
      if (valueNumber < store.MinPrice) {
        maxInput.value = store.MinPrice.toString();
      }
      store.MinPrice = Number(minInput.value);

      store.MaxPrice = Number(maxInput.value);

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const minContent = document.querySelector(
        ".price-content__max"
      ) as HTMLParagraphElement;

      minContent.textContent = `$${store.MaxPrice}`;

      const productList = new ProductsList();
      if (wrapper) {
        wrapper.innerHTML = productList.render();
        productList.addEvents();
      }
      store.updatePrice();
    });
  };

  render = () => {
    return `
      <h2 class="filters-content__title">Price</h2>
      ${
        this.loading
          ? `<div class="lds-ring lds-ring_view_small"><div></div><div></div><div></div><div></div></div>`
          : ""
      }
      ${
        this.loading
          ? ""
          : `<div class="price-content">
          <p class="price-content__min">$${store.MinPrice}</p>
          <p class="price-content__max">$${store.MaxPrice}</p>
        </div>
        <div class="filters-range">
          <input type="range" class="filters-range__input filters-range__input_min-price" min="${PriceList.minValueFixed}" max="${PriceList.maxValueFixed}" value="${store.MinPrice}">
          <input type="range" class="filters-range__input filters-range__input_max-price" min="${PriceList.minValueFixed}" max="${PriceList.maxValueFixed}" value="${store.MaxPrice}">
        </div>`
      }
    `;
  };
}

export default PriceList;
