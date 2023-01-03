import Component from "../../../../templates/Component";
import { store } from "../../../../store/Store";
import ProductsStock from "./ProductsStock/ProductsStock";

class Stock extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.container.id = "stock";
  }

  createStockContent = () => {
    const stock = new ProductsStock();
    store.$state.subscribe(() => {
      const root: HTMLElement | null = document.getElementById("stock");
      if (root) {
        root.innerHTML = stock.render();
      }
    });
    this.container.innerHTML += stock.render();
  };

  render = () => {
    this.createStockContent();
    return this.container;
  };
}

export default Stock;
