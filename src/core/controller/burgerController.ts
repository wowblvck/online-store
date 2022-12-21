export class BurgerController {
  private selector: HTMLDivElement | null;
  private header: HTMLElement | null;
  private list: HTMLUListElement | null;
  private items: NodeList;

  constructor(
    selector: HTMLDivElement,
    header: HTMLElement,
    list: HTMLUListElement,
    items: NodeList
  ) {
    this.selector = selector;
    this.header = header;
    this.list = list;
    this.items = items;
    this.events();
  }

  events = () => {
    this.selector?.addEventListener("click", (e) => {
      e.preventDefault();
      this.menuState();
    });

    this.items.forEach((el) => {
      el.addEventListener("click", this.closeMenu);
    });
  };

  menuState = () => {
    this.selector?.classList.toggle("burger_state_active");
    this.list?.classList.toggle("nav__list_state_active");
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
      this.selector?.classList.contains("burger_state_active") &&
      this.list?.classList.contains("nav__list_state_active") &&
      this.header?.classList.contains("header_state_active")
    ) {
      this.selector?.classList.remove("burger_state_active");
      this.list?.classList.remove("nav__list_state_active");
      this.header?.classList.remove("header_state_active");
    }
  };
}
