import { AppComponent } from "../../../../../interfaces/AppComponent";
import { ProductData } from "../../../../../interfaces/Products";
import { store } from "../../../../../store/Store";
import BrandsItem from "../BrandsItem/BrandsItem";

class BrandsList implements AppComponent {
  private loading = !store.Loaded ? true : false;
  private static products: ProductData[] = [];
  private static sortBrands: string[] = [];
  private static brandsComponents: BrandsItem[] = [];

  constructor() {
    if (this.loading) {
      store.$state.subscribe(({ products }) => {
        if (products.length) {
          this.loading = false;
          BrandsList.products = products;
          BrandsList.sortBrands = Array.from(
            new Set(
              BrandsList.products.map((product: ProductData) => product.brand)
            )
          ).sort();
          BrandsList.brandsComponents = BrandsList.sortBrands.map(
            (brand) => new BrandsItem(brand)
          );
        }
      });
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
      ${BrandsList.brandsComponents
        .map((brand) => {
          return brand.render();
        })
        .join("")}
    `;
  };
}

export default BrandsList;
