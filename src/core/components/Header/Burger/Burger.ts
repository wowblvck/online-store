import Component from "../../../templates/Component";
// import { createElementWithClass } from "../../../util/functions";

export default class Burger extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  private createBurger = () => {
    for (let i = 0; i < 3; i++) {
      this.container.append(document.createElement("span"));
    }
  };

  get Selector() {
    return this.container;
  }

  render = () => {
    this.createBurger();
    return this.container;
  };
}
