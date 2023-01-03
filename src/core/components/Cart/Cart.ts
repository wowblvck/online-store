import Component from "../../templates/Component";
import Container from "../Container/Container";
import { createElementWithClass } from "../../../core/utils/functions";
import { icons } from "../../../core/data/images/images";
import { productsInfo } from "../../data/products/products";
import { cartArray } from "../ProductsList/ProductsList";

class Cart extends Component {
  private subContainer: Container;

  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.subContainer = new Container("div", "container", "cart__container");
  }

  createContent = () => {
    const cartBlock = createElementWithClass(
      "div",
      "products-in-cart__container"
    ) as HTMLDivElement;
    const summaryBlock = createElementWithClass(
      "div",
      "summary__container"
    ) as HTMLDivElement;

    const cartHeader = createElementWithClass(
      "div",
      "cart__header"
    ) as HTMLDivElement;
    const cartSeparator = createElementWithClass(
      "hr",
      "cart__line"
    ) as HTMLHRElement;
    const cartProducts = createElementWithClass(
      "div",
      "cart__products"
    ) as HTMLDivElement;
    cartBlock.append(cartHeader, cartSeparator, cartProducts);

    const summaryHeader = createElementWithClass(
      "div",
      "summary__header"
    ) as HTMLDivElement;
    const summarySeparator = createElementWithClass(
      "hr",
      "summary__line"
    ) as HTMLHRElement;
    const summaryMain = createElementWithClass(
      "div",
      "summary__main"
    ) as HTMLDivElement;
    summaryBlock.append(summaryHeader, summarySeparator, summaryMain);

    const summaryTitle = createElementWithClass(
      "h2",
      "summary__title"
    ) as HTMLTitleElement;
    summaryTitle.textContent = "SUMMARY";
    summaryHeader.append(summaryTitle);

    const summaryProductsNum = createElementWithClass(
      "p",
      "summary__products-num"
    ) as HTMLParagraphElement;
    summaryProductsNum.textContent = "Products: 0";
    const summaryTotal = createElementWithClass(
      "p",
      "summary__total"
    ) as HTMLParagraphElement;
    summaryTotal.textContent = "Total: 0.00$";
    const summaryInput = createElementWithClass(
      "input",
      "summary__input"
    ) as HTMLInputElement;
    summaryInput.placeholder = "Enter promo code (Test: 'RS', 'EPM')";
    const summaryBtn = createElementWithClass("button", "summary__button");
    summaryBtn.textContent = "BUY NOW";
    summaryMain.append(
      summaryProductsNum,
      summaryTotal,
      summaryInput,
      summaryBtn
    );

    const cartTitle = createElementWithClass(
      "h2",
      "cart__title"
    ) as HTMLTitleElement;
    cartTitle.textContent = "Products: ";
    const cartLimitBlock = createElementWithClass(
      "div",
      "cart__limit"
    ) as HTMLDivElement;
    const cartPagesBlock = createElementWithClass(
      "div",
      "cart__pages"
    ) as HTMLDivElement;
    const cartLimitTitle = createElementWithClass(
      "h2",
      "cart__limit-title"
    ) as HTMLTitleElement;
    cartLimitTitle.textContent = "Limit: ";
    const cartLimitInput = createElementWithClass(
      "input",
      "cart__limit-input"
    ) as HTMLInputElement;
    cartLimitInput.value = "10";
    const cartPagesTitle = createElementWithClass(
      "h2",
      "cart__pages-title"
    ) as HTMLTitleElement;
    cartPagesTitle.textContent = "Page: ";
    const cartPagesControls = createElementWithClass(
      "div",
      "cart__pages-controls"
    ) as HTMLDivElement;
    const cartPagesArrowLeft = createElementWithClass(
      "img",
      "arrow__left",
      "cart__pages-arrow"
    ) as HTMLImageElement;
    const cartPagesArrowRight = createElementWithClass(
      "img",
      "arrow__right",
      "cart__pages-arrow"
    ) as HTMLImageElement;
    const cartPagesPageNum = createElementWithClass(
      "span",
      "cart__pages-num"
    ) as HTMLSpanElement;
    cartPagesPageNum.textContent = "1";

    cartPagesArrowLeft.src = icons[0].src;
    cartPagesArrowLeft.alt = icons[0].name;
    cartPagesArrowRight.src = icons[1].src;
    cartPagesArrowRight.alt = icons[1].name;

    cartLimitBlock.append(cartLimitTitle, cartLimitInput);
    cartPagesBlock.append(cartPagesControls);
    cartPagesControls.append(
      cartPagesArrowLeft,
      cartPagesPageNum,
      cartPagesArrowRight
    );

    cartHeader.append(cartTitle, cartLimitBlock, cartPagesBlock);

    for (let i = 0; i < cartArray.length; i++) {
      for (let j = 0; j < productsInfo.length; j++) {
        if (cartArray[i] === (productsInfo[j].id - 1).toString()) {
          const productWrapper = createElementWithClass(
            "div",
            "cart__products-item"
          ) as HTMLDivElement;
          const productImage = createElementWithClass(
            "img",
            "cart__products-image"
          ) as HTMLImageElement;
          productImage.style.backgroundImage = `url(${productsInfo[j].images[0]})`;
          productImage.style.width = "100px";
          productImage.style.height = "100px";
          productWrapper.append(productImage);
          cartProducts.append(productWrapper);
        }
      }
    }
    console.log(cartArray);
    this.subContainer.render().append(cartBlock, summaryBlock);
  };

  render = () => {
    this.createContent();
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

export default Cart;
