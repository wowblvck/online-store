import { ProductData } from "../../../../interfaces/Products";
import { store } from "../../../../store/Store";
import Component from "../../../../templates/Component";
import { createElementWithClass } from "../../../../utils/functions";
import ProductsList from "../../../ProductsList/ProductsList";
import FoundItems from "../../Products/ProductsHeader/FoundItems/FoundItems";

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
    searchInput.placeholder = "Search";
    this.container.append(searchIcon, searchInput);
  };

  addEvents = () => {
    const searchInput = document.querySelector(
      ".search__input"
    ) as HTMLInputElement;
    searchInput?.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();

      let arrayFind: ProductData[] = [];

      if (store.FilterProducts.length) {
        arrayFind = store.FilterProducts;
      } else if (searchTerm.length != 0) {
        arrayFind = store.Products;
      }

      const foundProducts = arrayFind.filter((product) => {
        return (
          product.brand.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.title.toLowerCase().includes(searchTerm)
        );
      });

      store.SearchedProducts = foundProducts;

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const productList = new ProductsList();
      if (wrapper) {
        wrapper.innerHTML = productList.render();
      }

      const foundWrapper = document.querySelector(
        ".found-items"
      ) as HTMLDivElement;

      const foundItems = new FoundItems();
      if (foundWrapper) {
        foundWrapper.innerHTML = foundItems.render();
      }
    });
  };

  render = () => {
    this.createSearch();
    return this.container;
  };
}

export default Search;
