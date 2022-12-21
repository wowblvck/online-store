import Component from "../../templates/components";
import Navigation from "./navigation";
import Burger from "./burger";
import { BurgerController } from "../../controller/burgerController";
import Container from "../container";
import Logo from "./logo";

class Header extends Component {
  private subContainer: Container;

  constructor(tagName: string, className: string, subClass?: string) {
    super(tagName, className, subClass);
    this.subContainer = new Container("div", "container", "header");
  }

  private renderLogo = () => {
    const logo = new Logo("div", "logo");
    this.subContainer.render().append(logo.render());
  };

  private renderNavigation = () => {
    const nav = new Navigation("nav", "nav");
    const burger = new Burger("div", "burger");
    this.subContainer.render().append(nav.render());
    nav.Selector.append(burger.render());
    new BurgerController(
      burger.Selector as HTMLDivElement,
      this.container,
      nav.List as HTMLUListElement,
      nav.Items as NodeList
    );
  };

  render = () => {
    this.renderLogo();
    this.renderNavigation();
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

export default Header;
