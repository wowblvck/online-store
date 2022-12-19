import Header from "../pages/static/header";
import Footer from "../pages/static/footer";
import Burger from "../burger/burger";

class App {
  header: Header;
  footer: Footer;

  constructor() {
    this.header = new Header();
    this.footer = new Footer();
    this.contentLoad();
  }

  contentLoad = () => {
    window.addEventListener("DOMContentLoaded", () => {
      new Burger();
    });
  };
}

export default App;
