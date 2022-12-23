import Component from "../../templates/components";
import Container from "../container";
import { createElementWithClass } from "../../util/functions";

import { authors } from "../../data/copyright/authors";

class Footer extends Component {
  private subContainer: Container;

  constructor(tagName: string, className: string, subClass?: string) {
    super(tagName, className, subClass);
    this.subContainer = new Container("div", "container", "footer");
  }

  createCopyright = () => {
    const copyright = createElementWithClass("div", "copyright");

    const authorsBox = createElementWithClass("div", "authors");

    const authorsTitle = createElementWithClass("p", "authors__title");
    authorsTitle.textContent = "Authors: ";
    authorsBox.append(authorsTitle);

    authors.forEach((el, i) => {
      const link = createElementWithClass(
        "a",
        "authors__link"
      ) as HTMLLinkElement;
      link.href = el.link;
      link.target = "_blank";
      if (i < authors.length - 1) {
        link.textContent = el.name + ", ";
      } else {
        link.textContent = el.name;
      }
      authorsBox.append(link);
    });

    const year = createElementWithClass("p", "copyright__year");
    year.textContent = "2022 - 2023";

    const school = createElementWithClass(
      "a",
      "copyright__school"
    ) as HTMLLinkElement;
    school.href = "https://rs.school/";
    school.target = "_blank";
    school.textContent = "RS School";

    copyright.append(authorsBox, year, school);
    this.subContainer.render().append(copyright);
  };

  render = () => {
    this.createCopyright();
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

export default Footer;
