//Main application pages to create links to them
//Основные страницы приложения для создание ссылок на них

//You need to assign a value to PageIds and add it to the Pages array
//Необходимо присовить значение в PageIds и добавить в массив Pages

/* Example: 
export const enum PageIds {
  MapPage = "map",
} 

export const Pages: Array<PagesData> = [
  {
    id: PageIds.MapPage,
    textLink: "Map",
  },
];
*/

import { PagesData, PageIds } from "../interfaces/Page";

export const pages: Array<PagesData> = [
  {
    id: PageIds.MainPage,
    textLink: "Home",
  },
  {
    id: PageIds.CatalogPage,
    textLink: "Catalog",
  },
  {
    id: PageIds.CartPage,
    textLink: "Cart",
    box: true,
  },
];
