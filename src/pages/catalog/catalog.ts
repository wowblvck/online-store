import Page from "../../core/templates/page";

class CatalogPage extends Page {
  static TextObject = {
    Title: "Catalog | Online Store",
    Description: "Catalog page Online Store",
  };

  constructor(id: string) {
    super(id);
  }

  render = () => {
    this.updateTitle(CatalogPage.TextObject.Title);
    this.updateDescription(CatalogPage.TextObject.Description);
    return this.container;
  };
}

export default CatalogPage;
