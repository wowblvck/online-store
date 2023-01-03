import Page from "../../core/templates/page";
import ProductItem from "../../core/components/ProductPage/ProductPage";

class ProductPage extends Page {
  static TextObject = {
    Title: "Product | Online Store",
    Description: "Product page Online Store",
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    this.updateTitle(ProductPage.TextObject.Title);
    this.updateDescription(ProductPage.TextObject.Description);
    const productItem = new ProductItem("section", "product", "main");
    this.container.append(productItem.render());
    return this.container;
  }
}

export default ProductPage;
