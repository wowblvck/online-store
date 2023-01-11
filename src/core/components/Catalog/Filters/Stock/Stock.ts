import Component from "../../../../templates/Component";
import { store } from "../../../../store/Store";
import StockList from "./StockList/StockList";

class Stock extends Component {
  private stock = new StockList();
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.container.id = "stock";
  }

  createStockContent = () => {
    store.$state.subscribe(() => {
      const root: HTMLElement | null = document.getElementById("stock");
      if (root) {
        root.innerHTML = this.stock.render();
      }
    });
    this.container.innerHTML += this.stock.render();
  };

  addEvents = () => {
    this.stock.addEvents();
  };

  render = () => {
    this.createStockContent();
    return this.container;
  };
}

export default Stock;
