import { AppComponent } from "../../../../../interfaces/AppComponent";
import { store } from "../../../../../store/Store";

class FoundItems implements AppComponent {
  private loading = !store.Loaded ? true : false;
  private error: Error | null = null;
  private static items: number;

  constructor() {
    if (!store.Loaded) {
      store.$state.subscribe(({ filterProducts, products }) => {
        if (filterProducts.length && this.loading) {
          this.loading = false;
          this.error = null;
          FoundItems.items = filterProducts.length;
        }
        if (products.length && this.loading) {
          this.loading = false;
          this.error = null;
          FoundItems.items = products.length;
        }
      });
    } else {
      if (store.SearchedProducts.length) {
        FoundItems.items = store.SearchedProducts.length;
      } else {
        const searchInput = document.querySelector(
          ".search__input"
        ) as HTMLInputElement;
        if (searchInput) {
          if (searchInput.value.length) {
            FoundItems.items = 0;
          } else {
            if (store.FilterProducts.length) {
              FoundItems.items = store.FilterProducts.length;
            } else {
              FoundItems.items = store.Products.length;
            }
          }
        } else {
          if (store.FilterProducts.length) {
            FoundItems.items = store.FilterProducts.length;
          } else {
            FoundItems.items = store.Products.length;
          }
        }
      }
    }
  }

  render = () => {
    return `
      Items:
      ${this.loading ? "Loading..." : ""}
      ${this.error ? `${this.error.message}` : ""}
      ${
        FoundItems.items
          ? FoundItems.items
          : this.loading === true
          ? ""
          : FoundItems.items
      }
    `;
  };
}

export default FoundItems;
