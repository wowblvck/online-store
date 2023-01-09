import Page from "../core/templates/Page";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import MainPage from "../pages/MainPage/MainPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import CartPage from "../pages/CartPage/CartPage";

import Header from "../core/components/Header/Header";
import Footer from "../core/components/Footer/Footer";

import { PageIds } from "../core/interfaces/Page";
import { pages } from "../core/data/pages";
import { store } from "../core/store/Store";

class App {
  //Default container
  //Контейнер по умолчанию
  private static container: HTMLElement = document.body;
  //
  private static defaultPageId = "currentPageID";
  private initialPage: MainPage;
  private header: Header;
  private footer: Footer;
  private static page: Page | null = null;

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
    // let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      App.page = new MainPage(idPage);
    } else if (idPage === PageIds.CatalogPage) {
      App.page = new CatalogPage(idPage);
    } else if (idPage === PageIds.ProductsPage) {
      App.page = new ProductsPage(idPage);
    } else if (idPage === PageIds.CartPage) {
      App.page = new CartPage(idPage);
    } else {
      App.page = new ErrorPage(idPage);
    }
    //

    //If the class value of the required page is received, we render the page
    //Если значение класса необходимой страницы получено, отрисовываем страницу
    if (App.page) {
      const pageHTML = App.page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);

      store.$state.subscribe(() => {
        if (store.Loaded) {
          if (idPage === PageIds.CatalogPage) {
            (App.page as CatalogPage).addEvents();
          }
        }
        // if (idPage === PageIds.CartPage) {
        //   (App.page as CartPage).addEvents();
        // }
      });
    }

    const links = document.querySelectorAll(".nav__item");
    pages.forEach((el, i) => {
      if (pages[i].id === idPage) {
        links[i].classList.add("nav__item_state_active");
        links[i]
          .querySelector(".nav__link")
          ?.classList.add("nav__link_state_hovered");
      } else {
        links[i].classList.remove("nav__item_state_active");
        links[i]
          .querySelector(".nav__link")
          ?.classList.remove("nav__link_state_hovered");
      }
    });
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
    this.staticRender();
    this.dynamicPage();
    this.enableRouteChange();
  }
  //

  //We draw the header, footer and main content, add it to the main container
  //Отрисовываем шапку, подвал и основной контент, добавляем в основной контейнер

  staticRender = () => {
    App.container.append(this.header.render());
    App.container.append(this.footer.render());
  };

  dynamicPage = () => {
    App.renderNewPage(PageIds.MainPage);
  };

  currentPage = () => {
    const current = document.getElementById("currentPageID");
    return current;
  };
}

export default App;
