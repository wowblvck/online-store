const enum PageIds {
  MainPage = "main-page",
  CatalogPage = "catalog-page",
  CartPage = "cart-page",
}

interface PagesData {
  id: string;
  textLink: string;
  box?: boolean;
}

export { PageIds, PagesData };
