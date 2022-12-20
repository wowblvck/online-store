import { homePage } from "../pages/home";
import { catalogPage } from "../pages/catalog";
import { errorPage } from "../pages/404";

import { PathsDescriptions } from "./page";

export const routes: PathsDescriptions = {
  404: {
    name: "404",
    title: "Oops! 404",
    description: "",
    render: errorPage.render,
  },
  "/": {
    name: "home",
    title: "Welcome | Online Store",
    description: "Main page",
    render: homePage.render,
  },
  "/catalog": {
    name: "catalog",
    title: "Catalog | Online Store",
    description: "Products catalog",
    render: catalogPage.render,
  },
};
