import Component from "../../../templates/Component";

import Search from "./Search/Search";
import FiltersButtons from "./FiltersButtons/FiltersButtons";
import Categories from "./Categories/Categories";
import Brands from "./Brands/Brands";
// import Price from "./Price/Price";
// import Stock from "./Stock/Stock";

class Filters extends Component {
  private search = new Search("div", "search");
  private buttons = new FiltersButtons("div", "filters-buttons");
  private categories = new Categories("div", "filters-content");
  private brands = new Brands("div", "filters-content");
  // private price = new Price("div", "filters-content", "filters-content_price");
  // private stock = new Stock("div", "filters-content", "filters-content_stock");

  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  searchBox = () => {
    this.container.append(this.search.render());
  };

  filtersButtons = () => {
    this.container.append(this.buttons.render());
  };

  categoriesBox = () => {
    this.container.append(this.categories.render());
  };

  brandsBox = () => {
    this.container.append(this.brands.render());
  };

  // priceBox = () => {
  //   this.container.append(this.price.render());
  // };

  // stockBox = () => {
  //   this.container.append(this.stock.render());
  // };

  addEvents() {
    this.categories.addEvents();
    this.search.addEvents();
    this.brands.addEvents();
  }

  render = () => {
    this.searchBox();
    this.filtersButtons();
    this.categoriesBox();
    this.brandsBox();
    // this.priceBox();
    // this.stockBox();
    return this.container;
  };
}

export default Filters;
