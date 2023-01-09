import { AppComponent } from "../../../../../interfaces/AppComponent";
import { updateView } from "../../../Products/ProductsHeader/ProductsHeader";

export default class BrandsItem implements AppComponent {
  private brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }

  private getHtmlID = () => `brand_${this.brand}`;

  render = () => {
    return `<li class="filters-form__item" id="${this.getHtmlID()}">
            <input class="filters-form__input" type="checkbox" id="${
              this.brand
            }">
            <label class="filters-form__label for="${this.brand}">${
      this.brand.charAt(0).toUpperCase() + this.brand.slice(1)
    }</label>
          </li>`;
  };

  addEvents() {
    const item = document.getElementById(this.getHtmlID());
    if (!item) {
      throw new Error("Item is undefined");
    }
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const elem = e.target as HTMLLIElement;
      console.log(`Click ${elem.textContent}`);
      updateView();
    });
  }
}
