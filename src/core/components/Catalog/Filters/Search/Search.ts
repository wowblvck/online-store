import { store } from "../../../../store/Store";
import Component from "../../../../templates/Component";
import { createElementWithClass } from "../../../../utils/functions";
import ProductsList from "../../../ProductsList/ProductsList";

class Search extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  createSearch = () => {
    const searchIcon = createElementWithClass(
      "i",
      "search__icon"
    ) as HTMLStyleElement;
    const searchInput = createElementWithClass(
      "input",
      "search__input"
    ) as HTMLInputElement;

    if (store.StateSearch.length === 0) {
      searchInput.placeholder = "Name, brand or category";
    } else {
      searchInput.value = store.StateSearch;
    }
    this.container.append(searchIcon, searchInput);
  };

  addEvents = () => {
    const searchInput = document.querySelector(
      ".search__input"
    ) as HTMLInputElement;
    searchInput?.addEventListener("input", () => {
      if (searchInput.value.length === 0) {
        searchInput.placeholder = "Name, brand or category";
      }
      const searchTerm = searchInput.value.toLowerCase();

      store.StateSearch = searchTerm;

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const productList = new ProductsList();
      if (wrapper) {
        wrapper.innerHTML = productList.render();
        productList.addEvents();
      }
    });
  };

  render = () => {
    this.createSearch();
    return this.container;
  };
}

export default Search;
