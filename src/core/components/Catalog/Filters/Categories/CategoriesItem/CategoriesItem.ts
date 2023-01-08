import { AppComponent } from "../../../../../interfaces/AppComponent";
import { store } from "../../../../../store/Store";
import ProductsList from "../../../../ProductsList/ProductsList";

export default class CategoriesItem implements AppComponent {
  private category: string;
  private state: boolean;
  constructor(category: string, state: boolean) {
    this.category = category;
    this.state = state;
  }

  private getHtmlID = () => `category_${this.category}`;

  render = () => {
    return `<li class="filters-form__item" id="${this.getHtmlID()}">
      <input class="filters-form__input" type="checkbox" id="${
        this.category
      }" ${this.state ? `checked` : ""}>
      <label class="filters-form__label for="${this.getHtmlID()}">${
      this.category.charAt(0).toUpperCase() + this.category.slice(1)
    }</label>
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

      const filterCategories = store.Products.filter(
        (el) => el.category === this.category
      );

      store.FilterProducts = filterCategories;

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const productList = new ProductsList(store.FilterProducts);
      if (wrapper) {
        wrapper.innerHTML = productList.render();
      }
    });
  }
}
