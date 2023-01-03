import Component from "../../../templates/Component";
import { createElementWithClass } from "../../../utils/functions";
import { pages } from "../../../data/pages";

import { images } from "../../../data/images/images";
import { getButtons } from "../../ProductsList/ProductsList";

export default class Navigation extends Component {
  private navList: HTMLUListElement | null;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.navList = null;
  }

  private renderNavList = () => {
    this.navList = createElementWithClass(
      "ul",
      "nav__list"
    ) as HTMLUListElement;
    pages.forEach((el) => {
      const item = createElementWithClass("li", "nav__item") as HTMLLIElement;
      const link = createElementWithClass("a", "nav__link") as HTMLLinkElement;
      link.href = `#${el.id}`;

      if (el.box === true) {
        const cartBox = createElementWithClass("div", "cart") as HTMLDivElement;
        const img = createElementWithClass(
          "img",
          "cart__image"
        ) as HTMLImageElement;
        img.src = images["cart-home"].src;
        img.alt = images["cart-home"].name;

        const productsCount = createElementWithClass("p", "products-count");
        productsCount.textContent = "0";

        cartBox.append(img, productsCount);

        link.append(cartBox);
      } else {
        link.textContent = `${el.textLink}`;
      }

      item.append(link);
      if (this.navList) {
        this.navList.append(item);
      }
    });
    this.container.append(this.navList);
  };

  get Selector() {
    return this.container;
  }

  get List() {
    return this.navList;
  }

  get Items() {
    return this.navList?.querySelectorAll(".nav__item");
  }

  render = () => {
    this.renderNavList();
    return this.container;
  };
}
