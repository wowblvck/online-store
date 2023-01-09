import Component from "../../templates/Component";
import Container from "../Container/Container";
import { Modal } from "./Modal/Modal";
import { Summary } from "./Summary/Summary";

class Cart extends Component {
  private subContainer: Container;

  private summary: Summary = new Summary();
  private modal: Modal = new Modal("div", "modal__wrapper");

  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.subContainer = new Container("div", "container", "cart__container");
  }

  createModalWrapper = () => {
    this.subContainer.render().append(this.modal.render());
    this.container.append(this.subContainer.render());
  };
  createSummaryWrapper = () => {
    this.subContainer.render().innerHTML += this.summary.render();
    this.container.append(this.subContainer.render());
  };

  addEvents = () => {
    this.summary.addEvents();
    this.modal.addEvents();
  };

  render = () => {
    this.createModalWrapper();
    this.createSummaryWrapper();
    return this.container;
  };
}

export { Cart };
