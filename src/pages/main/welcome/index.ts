import Component from "../../../core/templates/components";
import Container from "../../../core/components/container";
import { images, multimedia } from "../../../core/data/contentImages";
import { createElementWithClass } from "../../../core/util/functions";

class Welcome extends Component {
  private subContainer: Container;

  constructor(tagName: string, className: string, subClass?: string) {
    super(tagName, className, subClass);
    this.subContainer = new Container("div", "container", "welcome");
  }
  createImg = () => {
    const img = createElementWithClass(
      "img",
      "welcome__img"
    ) as HTMLImageElement;
    img.src = images["laptop-home"].src;
    img.alt = images["laptop-home"].name;

    this.subContainer.render().append(img);
  };

  createContent = () => {
    const content = createElementWithClass("div", "welcome__content");
    const title = createElementWithClass(
      "h1",
      "welcome__title"
    ) as HTMLHeadingElement;
    title.textContent = "Welcome to Online";
    const span = createElementWithClass("span");
    span.textContent = " Store";
    title.append(span);

    const multimediaBox = createElementWithClass(
      "div",
      "multimedia"
    ) as HTMLDivElement;

    multimedia.forEach((el) => {
      const mimg = createElementWithClass(
        "img",
        "multimedia__icon"
      ) as HTMLImageElement;
      mimg.src = el.src;
      mimg.alt = el.name;
      multimediaBox.append(mimg);
    });

    const subtitle = createElementWithClass(
      "p",
      "welcome__subtitle"
    ) as HTMLParagraphElement;
    subtitle.textContent =
      "Our store sells electronics: the assortment of the store includes smartphones, laptops, smart watches and more.";

    const button = createElementWithClass("button", "btn", "btn__welcome");
    button.textContent = "Start shopping";

    content.append(title, multimediaBox, subtitle, button);
    this.subContainer.render().append(content);
  };

  render = () => {
    this.createImg();
    this.createContent();
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

export default Welcome;
