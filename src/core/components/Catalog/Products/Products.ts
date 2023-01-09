import Component from "../../../templates/Component";
import ProductsHeader from "./ProductsHeader/ProductsHeader";
import ProductsList from "../../ProductsList/ProductsList";
import { createElementWithClass } from "../../../utils/functions";
import { store } from "../../../store/Store";
import Container from "../../Container/Container";

class Products extends Component {
  private products = new ProductsList();

  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  createProductsHeader = () => {
    const header = new ProductsHeader("div", "products-header");
    this.container.append(header.render());
  };

  createHeaderLine = () => {
    const hr = createElementWithClass("hr", "products-header__line");
    this.container.append(hr);
  };

  createProductsContent = () => {
    const container = new Container("div", "products-content");
    store.$state.subscribe(() => {
      const root: HTMLElement | null =
        document.querySelector(".products-content");
      if (root) {
        root.innerHTML = this.products.render();
      }
    });
    container.render().innerHTML = this.products.render();
    this.container.append(container.render());
  };

  addEvents = () => {
    this.products.addEvents();
  };

  render = () => {
    this.createProductsHeader();
    this.createHeaderLine();
    this.createProductsContent();
    return this.container;
  };
}

export default Products;
