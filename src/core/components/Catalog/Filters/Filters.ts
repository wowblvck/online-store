import Component from "../../../templates/Component";

import Search from "./Search/Search";
import FiltersButtons from "./FiltersButtons/FiltersButtons";
import Categories from "./Categories/Categories";
import Brands from "./Brands/Brands";
import Price from "./Price/Price";
import Stock from "./Stock/Stock";

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

  price = () => {
    const price = new Price("div", "filters-content", "filters-content_price");
    this.container.append(price.render());
  };

  stock = () => {
    const stock = new Stock("div", "filters-content", "filters-content_stock");
    this.container.append(stock.render());
  };

  render = () => {
    this.searchBox();
    this.filtersButtons();
    this.categories();
    this.brands();
    this.price();
    this.stock();
    return this.container;
  };
}

export default Filters;
