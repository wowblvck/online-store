import HomePage from "../pages/homePage/home";
import Catalog from "../pages/catalog/productsPage";
import Burger from "../burger/burger";

class App {
  homePage: HomePage;
  catalogPage: Catalog;

  constructor() {
    this.homePage = new HomePage();
    this.catalogPage = new Catalog();
    this.contentLoad();
  }

  contentLoad = () => {
    window.addEventListener("DOMContentLoaded", () => {
      new Burger();
    });
  };
}

export default App;
