import Component from "../../../../templates/Component";
import Container from "../../../Container/Container";
import { store } from "../../../../store/Store";
import ProductsBrands from "./ProductsBrands/ProductsBrands";

import { createElementWithClass } from "../../../../utils/functions";

class Brands extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  createTitle = () => {
    const title = createElementWithClass("h2", "filters-content__title");
    title.textContent = "Brands";
    this.container.append(title);
  };

  createFormBrands = () => {
    const container = new Container("div", "filters-form");
    container.render().id = "brands";
    const categories = new ProductsBrands();
    store.$state.subscribe(() => {
      const root: HTMLElement | null = document.getElementById("brands");
      if (root) {
        root.innerHTML = categories.render();
      }
    });
    container.render().innerHTML = categories.render();
    this.container.append(container.render());
  };

  render = () => {
    this.createTitle();
    this.createFormBrands();
    return this.container;
  };
}

export default Brands;
