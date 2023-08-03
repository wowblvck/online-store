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
      store.$state.subscribe(({ stateBrands }) => {
        if (stateBrands.length) {
          this.loading = false;
          this.error = null;
          BrandsList.brands = stateBrands;
          BrandsList.brandsComponents = BrandsList.brands
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(
              (brand) =>
                new BrandsItem(
                  brand.name,
                  brand.state,
                  brand.amount,
                  brand.stock
                )
            );
        }
      });
    } else {
      BrandsList.brands = store.StateBrands;
      BrandsList.brandsComponents = BrandsList.brands
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(
          (brand) =>
            new BrandsItem(brand.name, brand.state, brand.amount, brand.stock)
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
