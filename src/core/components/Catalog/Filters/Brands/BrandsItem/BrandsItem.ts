import { AppComponent } from "../../../../../interfaces/AppComponent";
import { store } from "../../../../../store/Store";
import { addOrRemove } from "../../../../../utils/functions";
import ProductsList from "../../../../ProductsList/ProductsList";
import { updateView } from "../../../Products/ProductsHeader/ProductsHeader";

export default class BrandsItem implements AppComponent {
  private brand: string;
  private state: boolean;
  private amount: number;
  private stock: number;
  constructor(brand: string, state: boolean, amount: number, stock: number) {
    this.brand = brand;
    this.state = state;
    this.amount = amount;
    this.stock = stock;
  }

  private getHtmlID = () => `brand_${this.brand}`;

  render = () => {
    return `<li class="filters-form__item" id="${this.getHtmlID()}">
            <input class="filters-form__input" type="checkbox" id="${
              this.brand
            }" ${this.state ? `checked` : ""}>
            <label class="filters-form__label" for="${this.getHtmlID()}">${
      this.brand.charAt(0).toUpperCase() + this.brand.slice(1)
    }</label>
    <p class="filters-form__value"><span class="brand-amount">${
      this.stock
    }</span> / ${this.amount}</p>
          </li>`;
  };

  addEvents() {
    const item = document.getElementById(this.getHtmlID());
    if (!item) throw new Error("Item is undefined");
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const elem = e.currentTarget as HTMLLIElement;
      const input = elem.querySelector(
        ".filters-form__input"
      ) as HTMLInputElement;

      input.checked = !input.checked;

      store.StateBrands = store.StateBrands.map((brand) => {
        if (brand.name === this.brand) {
          return {
            ...brand,
            state: !brand.state,
          };
        }
        return brand;
      });

      store.FiltersBrands = addOrRemove(store.FiltersBrands, this.brand);

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const productList = new ProductsList();
      if (wrapper) {
        wrapper.innerHTML = productList.render();
        productList.addEvents();
      }

      updateView();
    });
  }
}
