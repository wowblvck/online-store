import Component from "../../../../templates/Component";
import { store } from "../../../../store/Store";
import ProductsPrice from "./ProductsPrice/ProductsPrice";

class Price extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.container.id = "price";
  }

  createPriceContent = () => {
    const price = new ProductsPrice();
    store.$state.subscribe(() => {
      const root: HTMLElement | null = document.getElementById("price");
      if (root) {
        root.innerHTML = price.render();
      }
    });
    this.container.innerHTML += price.render();
  };

  render = () => {
    this.createPriceContent();
    return this.container;
  };
}

export default Price;
