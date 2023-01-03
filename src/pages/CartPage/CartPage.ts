import Page from "../../core/templates/Page";
import Cart from "../../core/components/Cart/Cart";

class CartPage extends Page {
  static TextObject = {
    Title: "Cart | Online Store",
    Description: "Cart page Online Store",
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    this.updateTitle(CartPage.TextObject.Title);
    this.updateDescription(CartPage.TextObject.Description);
    const cart = new Cart("section", "product", "main__cart");
    this.container.append(cart.render());
    return this.container;
  }
}

export default CartPage;
