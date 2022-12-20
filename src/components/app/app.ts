import Header from "../pages/static/header";
import Footer from "../pages/static/footer";
import Burger from "../burger/burger";
import Router from "../router/router";

class App {
  header: Header;
  footer: Footer;
  router: Router;

  constructor() {
    this.header = new Header();
    this.footer = new Footer();
    this.router = new Router();
    this.contentLoad();
  }

  contentLoad = () => {
    window.addEventListener("DOMContentLoaded", () => {
      new Burger();
    });
  };
}

export default App;
