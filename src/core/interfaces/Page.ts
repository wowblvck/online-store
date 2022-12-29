const enum PageIds {
  MainPage = "main-page",
  CatalogPage = "catalog-page",
  CartPage = "cart-page",
  ProductPage = "product-page"
}

interface PagesData {
  id: string;
  textLink: string;
  box?: boolean;
}

export { PageIds, PagesData };
