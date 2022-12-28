import Component from "../../templates/Component";
import Container from "../Container/Container";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";
// import { createElementWithClass } from "../../../core/util/functions";

class Catalog extends Component {
  private subContainer: Container;
  private wrapper: Container;

  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.subContainer = new Container("div", "container");
    this.wrapper = new Container("div", "catalog-wrapper");
  }

  createFilters = () => {
    const filters = new Filters("div", "filters");
    this.wrapper.render().append(filters.render());
  };

  createProducts = () => {
    const products = new Products("div", "products");
    this.wrapper.render().append(products.render());
  };

  render = () => {
    this.createFilters();
    this.createProducts();
    this.subContainer.render().append(this.wrapper.render());
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

export default Catalog;
