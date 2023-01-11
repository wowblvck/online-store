import Page from "../../core/templates/Page";
import Catalog from "../../core/components/Catalog/Catalog";

class CatalogPage extends Page {
  private catalog = new Catalog("section", "catalog", "main__catalog");

  static TextObject = {
    Title: "Catalog | Online Store",
    Description: "Catalog page Online Store",
  };

  constructor(id: string) {
    super(id);
  }

  addEvents = () => {
    this.catalog.addEvents();
  };

  render(): HTMLElement {
    this.updateTitle(CatalogPage.TextObject.Title);
    this.updateDescription(CatalogPage.TextObject.Description);
    this.container.append(this.catalog.render());
    return this.container;
  }
}

export default CatalogPage;
