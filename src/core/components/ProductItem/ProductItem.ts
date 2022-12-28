import Container from "../Container/Container";
import Button from "../Button/Button";
import { createElementWithClass } from "../../utils/functions";
import ProductData from "../../interfaces/Products";

export default class ProductItem {
  private container: Container;
  private wrapper: Container;

  constructor(private product: ProductData) {
    this.container = new Container("div", "products-item");
    this.wrapper = new Container("div", "products-item__wrapper");
  }

  createTitle = () => {
    const title = createElementWithClass(
      "h3",
      "products-item__title"
    ) as HTMLHeadingElement;
    this.container.render().style.backgroundImage = `url(${this.product.images[0]})`;
    title.textContent = this.product.title;
    return this.container.render().append(title);
  };

  createWrapper = () => {
    const category = createElementWithClass(
      "p",
      "products-item__category"
    ) as HTMLParagraphElement;
    category.textContent = `Category: ${
      this.product.category.charAt(0).toUpperCase() +
      this.product.category.slice(1)
    }`;

    const brand = createElementWithClass(
      "p",
      "products-item__brand"
    ) as HTMLParagraphElement;
    brand.textContent = `Brand: ${
      this.product.brand.charAt(0).toUpperCase() + this.product.brand.slice(1)
    }`;

    const price = createElementWithClass(
      "p",
      "products-item__price"
    ) as HTMLParagraphElement;
    price.textContent = `Price: ${this.product.price}$`;

    const stock = createElementWithClass(
      "p",
      "products-item__stock"
    ) as HTMLParagraphElement;
    stock.textContent = `Stock: ${this.product.stock}`;
    return this.wrapper.render().append(category, brand, price, stock);
  };

  createButton = () => {
    const wrapper = new Container("div", "products-item__buttons-wrapper");

    const btnAdd = new Button("button", "products-item__button");
    btnAdd.render().textContent = "Add to cart";

    const btnMore = new Button("button", "products-item__button");
    btnMore.render().textContent = "See more";

    wrapper.render().append(btnAdd.render(), btnMore.render());

    return this.wrapper.render().append(wrapper.render());
  };

  render = () => {
    this.createTitle();
    this.createWrapper();
    this.createButton();
    this.container.render().append(this.wrapper.render());
    return this.container.render();
  };
}
