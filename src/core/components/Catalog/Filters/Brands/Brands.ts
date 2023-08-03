import Component from "../../../../templates/Component";
import Container from "../../../Container/Container";
import { store } from "../../../../store/Store";
import { createElementWithClass } from "../../../../utils/functions";
import BrandsList from "./BrandsList/BrandsList";

class Brands extends Component {
  private brands = new BrandsList();

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
    store.$state.subscribe(() => {
      const root: HTMLElement | null = document.getElementById("brands");
      if (root) {
        root.innerHTML = this.brands.render();
      }
    });
    container.render().innerHTML = this.brands.render();
    this.container.append(container.render());
  };

  addEvents() {
    this.brands.addEvents();
  }

  render = () => {
    this.createTitle();
    this.createFormBrands();
    return this.container;
  };
}

export default Brands;
