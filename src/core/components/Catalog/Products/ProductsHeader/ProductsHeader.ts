import Component from "../../../../templates/Component";
import Container from "../../../Container/Container";
import { createElementWithClass } from "../../../../utils/functions";
import { sorts } from "../../../../data/sorts/sorts";
import Button from "../../../Button/Button";

class ProductsHeader extends Component {
  private sortWrapper: Container;
  private viewItems: Container;
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.sortWrapper = new Container("div", "sort");
    this.viewItems = new Container("div", "view-items");
  }

  createLabel = () => {
    const label = createElementWithClass(
      "label",
      "sort__label"
    ) as HTMLLabelElement;
    label.setAttribute("for", "sort-select");

    const select = createElementWithClass(
      "select",
      "sort__select"
    ) as HTMLSelectElement;
    select.id = "sort-select";
    select.required = true;
    select.name = "sorts";

    sorts.forEach((el, i) => {
      const option = createElementWithClass(
        "option",
        "sort__item"
      ) as HTMLOptionElement;
      option.value = el.value;
      option.textContent = el.sortType;
      if (i == 0) {
        option.disabled = true;
        option.setAttribute("selected", "selected");
      }
      select.append(option);
    });

    const svg = `
    <svg class="sort__icon">
      <use xlink:href="#select-arrow-down"></use>
      <symbol id="select-arrow-down" viewbox="0 0 10 6">
        <polyline points="1 1 5 5 9 1"></polyline>
      </symbol>
    </svg>
    `;

    label.append(select);
    label.innerHTML += svg;
    this.sortWrapper.render().append(label);
    this.container.append(this.sortWrapper.render());
  };

  createFoundItems = () => {
    const title = createElementWithClass("p", "found-items");
    title.textContent = "Items: 0";
    this.container.append(title);
  };

  createViewItemsButtons = () => {
    const btnGrid = new Button(
      "button",
      "view-items__button",
      "view-items__button_active",
      "view-items__button_grid"
    );

    const btnList = new Button(
      "button",
      "view-items__button",
      "view-items__button_list"
    );
    this.viewItems.render().append(btnGrid.render(), btnList.render());
    this.container.append(this.viewItems.render());
  };

  render = () => {
    this.createLabel();
    this.createFoundItems();
    this.createViewItemsButtons();
    return this.container;
  };
}

export default ProductsHeader;
