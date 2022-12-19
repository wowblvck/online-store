export default class Burger {
  burgerMenu: HTMLDivElement | null;
  navMenu: HTMLUListElement | null;
  navLink: NodeList;
  header: HTMLElement | null;

  constructor() {
    this.burgerMenu = document.querySelector(".burger");
    this.navMenu = document.querySelector(".nav__list");
    this.navLink = document.querySelectorAll(".nav__item");
    this.header = document.querySelector(".header");
    this.events();
  }

  events = () => {
    this.burgerMenu?.addEventListener("click", (e) => {
      e.preventDefault();
      this.menuState();
    });

    this.navLink.forEach((el) => {
      el.addEventListener("click", this.closeMenu);
    });
  };

  menuState = () => {
    this.burgerMenu?.classList.toggle("burger_state_active");
    this.navMenu?.classList.toggle("nav__list_state_active");
    if (!this.header?.classList.contains("header_state_active")) {
      setTimeout(() => {
        this.header?.classList.toggle("header_state_active");
      }, 500);
    } else {
      this.header?.classList.toggle("header_state_active");
    }
  };

  closeMenu = () => {
    if (
      this.burgerMenu?.classList.contains("burger_state_active") &&
      this.navMenu?.classList.contains("nav__list_state_active") &&
      this.header?.classList.contains("header_state_active")
    ) {
      this.burgerMenu?.classList.remove("burger_state_active");
      this.navMenu?.classList.remove("nav__list_state_active");
      this.header?.classList.remove("header_state_active");
    }
  };
}
