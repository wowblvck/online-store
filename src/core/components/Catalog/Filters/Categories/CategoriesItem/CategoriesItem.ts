import { AppComponent } from "../../../../../interfaces/AppComponent";
import { ProductData } from "../../../../../interfaces/Products";
import { store } from "../../../../../store/Store";
import { toggleObjects } from "../../../../../utils/functions";
import ProductsList from "../../../../ProductsList/ProductsList";
import FoundItems from "../../../Products/ProductsHeader/FoundItems/FoundItems";

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

      store.Categories = store.Categories.map((category) => {
        if (category.name === this.category) {
          return {
            ...category,
            state: !category.state,
          };
        }
        return category;
      });

      //Получаем продукты выбранной категории
      const selectCategories: ProductData[] = store.Products.filter(
        (el) => el.category === this.category
      );

      //Добавляем в отфильтрованные продукты тех категории, которые мы выбрали
      store.FilterProducts = toggleObjects(
        store.FilterProducts,
        selectCategories
      );

      //Получаем селектор поискового окна
      const searchInput = document.querySelector(
        ".search__input"
      ) as HTMLInputElement;

      //Проверяем, существует ли такой селектор
      if (searchInput) {
        //Проверяем, если в селекторе поисковой запрос
        if (searchInput.value.length > 0) {
          //Проверяем, состояния включения каждой категории
          const stateOff = store.Categories.every(
            (category) => category.state === false
          );

          //Если stateOff not true (Состояние каждой категории не равно False), то начинаем поиск по отфильтрованным товарам
          if (!stateOff) {
            const searchTerm = searchInput.value.toLowerCase();
            const foundProducts = store.FilterProducts.filter((product) => {
              return (
                product.brand.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                product.title.toLowerCase().includes(searchTerm)
              );
            });
            store.SearchedProducts = foundProducts;
            //Иначе будем искать во всех товарах
          } else {
            const searchTerm = searchInput.value.toLowerCase();
            const foundProducts = store.Products.filter((product) => {
              return (
                product.brand.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                product.title.toLowerCase().includes(searchTerm)
              );
            });
            store.SearchedProducts = foundProducts;
          }
        } else {
          store.SearchedProducts = [];
        }
      }

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const foundWrapper = document.querySelector(
        ".found-items"
      ) as HTMLDivElement;

      const foundItems = new FoundItems();
      if (foundWrapper) {
        foundWrapper.innerHTML = foundItems.render();
      }

      const productList = new ProductsList();
      if (wrapper) {
        wrapper.innerHTML = productList.render();
        productList.addEvents();
      }
    });
  }
}
