import Page from "../../core/templates/Page";
import Catalog from "../../core/components/Catalog/Catalog";

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
    const catalog = new Catalog("section", "catalog", "main__catalog");
    this.container.append(catalog.render());
    return this.container;
  };
}

export default CatalogPage;
