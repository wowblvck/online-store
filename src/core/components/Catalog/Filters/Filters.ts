import Component from "../../../templates/Component";

import Search from "./Search/Search";
import FiltersButtons from "./FiltersButtons/FiltersButtons";
import Categories from "./Categories/Categories";

class Filters extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  searchBox = () => {
    const search = new Search("div", "search");
    this.container.append(search.render());
  };

  filtersButtons = () => {
    const buttons = new FiltersButtons("div", "filters-buttons");
    this.container.append(buttons.render());
  };

  categories = () => {
    const categories = new Categories("div", "filters-content", "categories");
    this.container.append(categories.render());
  };

  render = () => {
    this.searchBox();
    this.filtersButtons();
    this.categories();
    return this.container;
  };
}

export default Filters;
