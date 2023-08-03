import Component from "../../templates/Component";
import Container from "../Container/Container";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";

class Catalog extends Component {
  private subContainer: Container;
  private wrapper: Container;
  private filters = new Filters("div", "filters");
  private products = new Products("div", "products");

  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.subContainer = new Container("div", "container");
    this.wrapper = new Container("div", "catalog-wrapper");
  }

  createFilters = () => {
    this.wrapper.render().append(this.filters.render());
  };

  createProducts = () => {
    this.wrapper.render().append(this.products.render());
  };

  addEvents() {
    this.filters.addEvents();
    this.products.addEvents();
  }

  render = () => {
    this.createFilters();
    this.createProducts();
    this.subContainer.render().append(this.wrapper.render());
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

export default Catalog;
