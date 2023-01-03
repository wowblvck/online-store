import Component from "../../../../templates/Component";
import ProductsCategories from "./ProductsCategories/ProductsCategories";
import { createElementWithClass } from "../../../../utils/functions";
import { store } from "../../../../store/Store";
import Container from "../../../Container/Container";

class Categories extends Component {
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
    const categories = new ProductsCategories();
    store.$state.subscribe(() => {
      const root: HTMLElement | null = document.getElementById("categories");
      if (root) {
        root.innerHTML = categories.render();
      }
    });
    container.render().innerHTML = categories.render();
    this.container.append(container.render());
  };

  render = () => {
    this.createTitle();
    this.createFormCategories();
    return this.container;
  };
}

export default Categories;
