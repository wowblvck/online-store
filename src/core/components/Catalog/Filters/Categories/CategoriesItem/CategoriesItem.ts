import { AppComponent } from "../../../../../interfaces/AppComponent";
import { store } from "../../../../../store/Store";
import { addOrRemove } from "../../../../../utils/functions";
import ProductsList from "../../../../ProductsList/ProductsList";
import { updateView } from "../../../Products/ProductsHeader/ProductsHeader";

export default class CategoriesItem implements AppComponent {
  private category: string;
  private state: boolean;
  private amount: number;
  private stock: number;
  constructor(category: string, state: boolean, amount: number, stock: number) {
    this.category = category;
    this.state = state;
    this.amount = amount;
    this.stock = stock;
  }

  private getHtmlID = () => `category_${this.category}`;

  render = () => {
    return `<li class="filters-form__item" id="${this.getHtmlID()}">
      <input class="filters-form__input" type="checkbox" id="${
        this.category
      }" ${this.state ? `checked` : ""}>
      <label class="filters-form__label" for="${this.getHtmlID()}">${
      this.category.charAt(0).toUpperCase() + this.category.slice(1)
    }</label>
      <p class="filters-form__value"><span class="category-amount">${
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

      store.StateCategories = store.StateCategories.map((category) => {
        if (category.name === this.category) {
          return {
            ...category,
            state: !category.state,
          };
        }
        return category;
      });

      store.FiltersCategories = addOrRemove(
        store.FiltersCategories,
        this.category
      );

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
