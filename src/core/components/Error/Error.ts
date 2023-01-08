import Component from "../../templates/Component";
import Container from "../Container/Container";
import { images } from "../../data/images/images";
import { createElementWithClass } from "../../utils/functions";

class ErrorSection extends Component {
  private subContainer: Container;

  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.subContainer = new Container("div", "container", "error__container");
  }

  createError = () => {
    const img = createElementWithClass(
      "img",
      "error__image"
    ) as HTMLImageElement;
    img.src = images["error404-page"].src;
    img.alt = images["error404-page"].name;

    this.subContainer.render().append(img);
  };

  render = () => {
    this.createError();
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

export default ErrorSection;
