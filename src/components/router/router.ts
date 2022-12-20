import { routes } from "../view/routes";

export default class Router {
  constructor() {
    this.events();
  }

  events = () => {
    window.addEventListener("popstate", this.router);
    window.addEventListener("DOMContentLoaded", () => {
      this.createEventLinks();
      this.router();
    });
  };

  createEventLinks = () => {
    const links = document.querySelectorAll("[data-link]");
    links.forEach((el) => {
      el.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLLinkElement;
        e.preventDefault();
        window.history.pushState({}, "", target.href);
        this.router();
      });
    });
  };

  router = () => {
    const view = routes[window.location.pathname] || routes[404];
    if (view) {
      const container = document.querySelector(".main__container");
      if (container != null) {
        document.title = view.title;
        document
          .querySelector("meta[name='description']")
          ?.setAttribute("content", view.description);
        container.innerHTML = view.render;
      }
    } else {
      window.history.replaceState({}, "", "/");
      this.router();
    }
  };
}
