import Page from "../../core/templates/Page";
import ProductItem from "../../core/components/ProductPageItem/ProductPageItem";

class ProductsPage extends Page {
  private productItem = new ProductItem("section", "product", "main");

  static TextObject = {
    Title: "Product | Online Store",
    Description: "Product page Online Store",
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    this.updateTitle(ProductsPage.TextObject.Title);
    this.updateDescription(ProductsPage.TextObject.Description);
    this.container.append(this.productItem.render());
    return this.container;
  }
}

export default ProductsPage;
