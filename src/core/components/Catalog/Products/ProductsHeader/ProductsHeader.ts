import Component from "../../../../templates/Component";
import Container from "../../../Container/Container";
import { createElementWithClass } from "../../../../utils/functions";
import { sorts } from "../../../../data/sorts/sorts";
import Button from "../../../Button/Button";
import { store } from "../../../../store/Store";
import FoundItems from "./FoundItems/FoundItems";

class ProductsHeader extends Component {
  private foundItems = new FoundItems();
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

  addEvents = () => {
    const item = document.getElementById("sort-select") as HTMLSelectElement;
    item?.addEventListener("change", () => {
      const selectedOption = item.options[item.selectedIndex];
      store.SortState = {
        name: selectedOption.text,
        value: Number(selectedOption.value),
      };
    });
  };

  createFoundItems = () => {
    const container = new Container("p", "found-items");
    store.$state.subscribe(() => {
      const root: HTMLElement | null = document.querySelector(".found-items");
      if (root) {
        root.innerHTML = this.foundItems.render();
      }
    });
    container.render().innerHTML = this.foundItems.render();
    this.container.append(container.render());
  };

  createViewItemsButtons = () => {
    const btnGrid = new Button(
      "button",
      "view-items__button",
      "view-items__button_active",
      "view-items__button_grid"
    );
    btnGrid.render().addEventListener("click", changeView);

    const btnList = new Button(
      "button",
      "view-items__button",
      "view-items__button_list"
    );

    btnList.render().addEventListener("click", changeView);
    this.viewItems.render().append(btnGrid.render(), btnList.render());
    this.container.append(this.viewItems.render());

    localStorage.setItem("view", "grid");
  };

  render = () => {
    this.createLabel();
    this.createFoundItems();
    this.createViewItemsButtons();
    return this.container;
  };
}

export default ProductsHeader;

export const changeView = () => {
  if (localStorage.getItem("view") == "grid") {
    const btns = document.querySelectorAll(".view-items__button");
    btns[0].classList.remove("view-items__button_active");
    btns[1].classList.add("view-items__button_active");
    const items = document.querySelectorAll(".products-item");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add("list");
    }
    localStorage.setItem("view", "list");
  } else if (localStorage.getItem("view") == "list") {
    const btns = document.querySelectorAll(".view-items__button");
    btns[0].classList.add("view-items__button_active");
    btns[1].classList.remove("view-items__button_active");
    const items = document.querySelectorAll(".products-item");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("list");
    }
    localStorage.setItem("view", "grid");
  }
};

export const updateView = () => {
  if (localStorage.getItem("view") == "list") {
    const btns = document.querySelectorAll(".view-items__button");
    btns[0].classList.remove("view-items__button_active");
    btns[1].classList.add("view-items__button_active");
    const items = document.querySelectorAll(".products-item");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add("list");
    }
  } else if (localStorage.getItem("view") == "grid") {
    const btns = document.querySelectorAll(".view-items__button");
    btns[0].classList.add("view-items__button_active");
    btns[1].classList.remove("view-items__button_active");
    const items = document.querySelectorAll(".products-item");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("list");
    }
  }
};
