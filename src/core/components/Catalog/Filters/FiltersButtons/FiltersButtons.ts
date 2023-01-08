import Component from "../../../../templates/Component";
import Button from "../../../Button/Button";

class FiltersButtons extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  createFilterButtons = () => {
    const btnReset = new Button(
      "button",
      "btn",
      "btn_theme_shadow",
      "filters-buttons__reset"
    );
    btnReset.render().textContent = "Reset filters";

    const btnCopy = new Button(
      "button",
      "btn",
      "btn_theme_shadow",
      "filters-buttons__copy"
    );
    btnCopy.render().textContent = "Copy";

    this.container.append(btnReset.render(), btnCopy.render());
  };

  render = () => {
    this.createFilterButtons();
    return this.container;
  };
}

export default FiltersButtons;
