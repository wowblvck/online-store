import Component from "../../../templates/Component";

import Search from "./Search/Search";
import FiltersButtons from "./FiltersButtons/FiltersButtons";
import Categories from "./Categories/Categories";
import Brands from "./Brands/Brands";

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
    const categories = new Categories("div", "filters-content");
    this.container.append(categories.render());
  };

  brands = () => {
    const brands = new Brands("div", "filters-content");
    this.container.append(brands.render());
  };

  render = () => {
    this.searchBox();
    this.filtersButtons();
    this.categories();
    this.brands();
    return this.container;
  };
}

export default Filters;
