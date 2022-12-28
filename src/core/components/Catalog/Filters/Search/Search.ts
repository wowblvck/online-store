import Component from "../../../../templates/Component";
import { createElementWithClass } from "../../../../utils/functions";

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

  render = () => {
    this.createSearch();
    return this.container;
  };
}

export default Search;
