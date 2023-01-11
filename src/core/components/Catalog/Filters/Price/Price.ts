import Component from "../../../../templates/Component";
import { store } from "../../../../store/Store";
import PriceList from "./PriceList/PriceList";

class Price extends Component {
  private price = new PriceList();
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.container.id = "price";
  }

  createPriceContent = () => {
    store.$state.subscribe(() => {
      const root: HTMLElement | null = document.getElementById("price");
      if (root) {
        root.innerHTML = this.price.render();
      }
    });
    this.container.innerHTML += this.price.render();
  };

  addEvents = () => {
    this.price.addEvents();
  };

  render = () => {
    this.createPriceContent();
    return this.container;
  };
}

export default Price;
