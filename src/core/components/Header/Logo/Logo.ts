import Component from "../../../templates/Component";
import { createElementWithClass } from "../../../utils/functions";

import { images } from "../../../data/images/images";

import { PageIds } from "../../../interfaces/Page";

export default class Logo extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  createLogo = () => {
    const link = createElementWithClass("a", "logo__link") as HTMLLinkElement;
    link.href = `#${PageIds.MainPage}`;
    link.setAttribute("data-link", "");
    const img = createElementWithClass("img", "logo__img") as HTMLImageElement;
    img.src = images["cart-logo"].src;
    img.alt = images["cart-logo"].name;
    const name = createElementWithClass("p", "logo__title");
    name.textContent = "online";
    const span = createElementWithClass("span");
    span.textContent = "store";
    name.append(span);
    link.append(img, name);
    this.container.append(link);
  };

  render = () => {
    this.createLogo();
    return this.container;
  };
}
