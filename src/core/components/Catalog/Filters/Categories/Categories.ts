import Component from "../../../../templates/Component";

import FiltersForm from "../FiltersForm/FiltersForm";

import { createElementWithClass } from "../../../../utils/functions";

class Categories extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  createTitle = () => {
    const title = createElementWithClass("h2", "filters-content__title");
    title.textContent = "Categories";
    this.container.append(title);
  };

  createForm = () => {
    const form = new FiltersForm("div", "filters-form");
    this.container.append(form.render());
  };

  render = () => {
    this.createTitle();
    this.createForm();
    return this.container;
  };
}

export default Categories;
