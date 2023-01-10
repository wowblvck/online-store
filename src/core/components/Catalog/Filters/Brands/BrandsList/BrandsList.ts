import { AppComponent } from "../../../../../interfaces/AppComponent";
import { ProductBrands } from "../../../../../interfaces/Products";
import { store } from "../../../../../store/Store";
import BrandsItem from "../BrandsItem/BrandsItem";

class BrandsList implements AppComponent {
  private loading = !store.Loaded ? true : false;
  private error: Error | null = null;
  private static brands: ProductBrands[] = [];
  private static brandsComponents: BrandsItem[] = [];

  constructor() {
    if (!store.Loaded) {
      store.$state.subscribe(({ brands }) => {
        if (brands.length && this.loading === true) {
          this.loading = false;
          this.error = null;
          BrandsList.brands = brands;
          BrandsList.brandsComponents = BrandsList.brands.map(
            (brand) => new BrandsItem(brand.name, brand.state)
          );
        }
      });
    } else {
      BrandsList.brands = store.Brands;
      BrandsList.brandsComponents = BrandsList.brands.map(
        (brand) => new BrandsItem(brand.name, brand.state)
      );
    }
  }

  addEvents() {
    BrandsList.brandsComponents.forEach((brand) => {
      brand.addEvents();
    });
  }

  render = () => {
    return `
      ${
        this.loading
          ? `<div class="lds-ring lds-ring_view_small"><div></div><div></div><div></div><div></div></div>`
          : ""
      }
      ${this.error ? `${this.error.message}` : ""}
      ${BrandsList.brandsComponents
        .map((brand) => {
          return brand.render();
        })
        .join("")}
    `;
  };
}

export default BrandsList;
