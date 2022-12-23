import Page from "../../core/templates/page";
import CatalogPage from "../catalog/catalog";
import MainPage from "../main/main";
import ErrorPage from "../error";

import Header from "../../core/components/header";
import Footer from "../../core/components/footer";

import { PageIds } from "../../core/data/pages";

class App {
  //Default container
  //Контейнер по умолчанию
  private static container = document.body as HTMLElement;
  //
  private static defaultPageId = "currentPageID";
  private initialPage: MainPage;
  private header: Header;
  private footer: Footer;

  static renderNewPage(idPage: string) {
    //Get default page ID selector and remove them (before insert next url page content)
    //Получаем Node текущеного блока с ID и удалеям его (необходимо перед вставкой нового контента)
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    //

    //We check the received ID value with the ID of the created pages, if it matches, create Class Instances
    //Проверяем полученное значение ID с ID созданных страниц, если совпадает, создаем инстанс класса
    let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.CatalogPage) {
      page = new CatalogPage(idPage);
    } else {
      page = new ErrorPage(idPage);
    }
    //

    //If the class value of the required page is received, we render the page
    //Если значение класса необходимой страницы получено, отрисовываем страницу
    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
    //
  }

  //Enable hash routing. Cut off the # symbol and draw the required page
  //Включаем роутинг по хэшу. Обрезаем символ # и отрисовываем необходимую страницу
  private enableRouteChange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }
  //

  //Creating Class Instances
  //Создаем инстансы классов
  constructor() {
    this.header = new Header("header", "header");
    this.initialPage = new MainPage("main");
    this.footer = new Footer("footer", "footer");
  }
  //

  //We draw the header, footer and main content, add it to the main container
  //Отрисовываем шапку, подвал и основной контент, добавляем в основной контейнер
  run() {
    App.container.append(this.header.render());
    App.renderNewPage("main");
    App.container.append(this.footer.render());
    this.enableRouteChange();
  }
  //
}

export default App;
