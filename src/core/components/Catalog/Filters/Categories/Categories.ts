import Component from "../../../../templates/Component";
import CategoriesList from "./CategoriesList/CategoriesList";
import { createElementWithClass } from "../../../../utils/functions";
import { store } from "../../../../store/Store";
import Container from "../../../Container/Container";

class Categories extends Component {
  private categories = new CategoriesList();

  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  createTitle = () => {
    const title = createElementWithClass("h2", "filters-content__title");
    title.textContent = "Categories";
    this.container.append(title);
  };

  createFormCategories = () => {
    const container = new Container("div", "filters-form");
    container.render().id = "categories";
    store.$state.subscribe(() => {
      const root: HTMLElement | null = document.getElementById("categories");
      if (root) {
        root.innerHTML = this.categories.render();
      }
    });
    container.render().innerHTML = this.categories.render();
    this.container.append(container.render());
  };

  addEvents() {
    this.categories.addEvents();
  }

  render = () => {
    this.createTitle();
    this.createFormCategories();
    return this.container;
  };
}

export default Categories;
