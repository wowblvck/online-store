import Component from "../../../core/templates/components";
import Container from "../../../core/components/container";
import { images } from "../../../core/data/contentImages";
import { createElementWithClass } from "../../../core/util/functions";

class Error extends Component {
  private subContainer: Container;

  constructor(tagName: string, className: string, subClass?: string) {
    super(tagName, className, subClass);
    this.subContainer = new Container("div", "container", "error");
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

export default Error;
