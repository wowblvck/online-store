import Component from "../../templates/Component";
import Container from "../Container/Container";
import { createElementWithClass } from "../../../core/utils/functions";
import { icons } from "../../../core/data/images/images";
import { productsInfo } from "../../data/products/products";
import { cartArray } from "../ProductsList/ProductsList";
import { PageIds } from "../../interfaces/Page";
import { removeFromCart } from "../ProductsList/ProductsList";
import { createModal } from "../Modal/Modal";

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
    summaryBtn.addEventListener("click", () => {
      const modal = document.querySelector(".modal__wrapper") as HTMLDivElement;
      modal.style.display = "flex";
    });
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

    const copyOfArr = cartArray.filter((x, i) => cartArray.indexOf(x) === i);

    for (let i = 0; i < copyOfArr.length; i++) {
      for (let j = 0; j < productsInfo.length; j++) {
        if (copyOfArr[i] === (productsInfo[j].id - 1).toString()) {
          const productWrapper = createElementWithClass(
            "div",
            "cart__products-item"
          ) as HTMLDivElement;
          const productImage = createElementWithClass(
            "img",
            "cart__product-image"
          ) as HTMLImageElement;
          productImage.style.backgroundImage = `url(${productsInfo[j].images[0]})`;
          const productTextWrapper = createElementWithClass(
            "div",
            "cart__product-text-container"
          ) as HTMLDivElement;
          const productTitle = createElementWithClass(
            "h3",
            "cart__product-title"
          ) as HTMLTitleElement;
          productTitle.textContent = `${productsInfo[j].title}`;
          const productDescription = createElementWithClass(
            "p",
            "cart__product-description"
          ) as HTMLParagraphElement;
          productDescription.textContent = `${productsInfo[
            j
          ].description.substring(0, 150)}...`;
          const productButton = createElementWithClass(
            "button",
            "cart__product-button-see-more"
          ) as HTMLButtonElement;
          productButton.textContent = "See more";
          productButton.setAttribute("id", `${cartArray[i]}`);
          productButton.addEventListener("click", () => {
            localStorage.setItem(
              "idOfItem",
              `${productButton.getAttribute("id")}`
            );
            location.href = `#${PageIds.ProductPage}`;
          });
          productTextWrapper.append(
            productTitle,
            productDescription,
            productButton
          );
          const productControls = createElementWithClass(
            "div",
            "cart__product-controls"
          ) as HTMLDivElement;
          const productStock = createElementWithClass(
            "p",
            "cart__product-stock"
          ) as HTMLParagraphElement;
          productStock.textContent = `Stock: ${productsInfo[j].stock}`;
          const productsNumBtnsWrapper = createElementWithClass(
            "div",
            "cart__product-buttons"
          ) as HTMLDivElement;
          const buttonPlus = createElementWithClass(
            "button",
            "cart__product-button",
            "button-plus"
          ) as HTMLButtonElement;
          buttonPlus.textContent = "+";
          const productNum = createElementWithClass(
            "span",
            "cart__product-num"
          ) as HTMLSpanElement;

          let counterOfProduct = 0;
          for (let i = 0; i < cartArray.length; i++) {
            if (cartArray[i] == `${productsInfo[j].id - 1}`) {
              counterOfProduct++;
            }
          }
          productNum.textContent = counterOfProduct.toString();

          const buttonMinus = createElementWithClass(
            "button",
            "cart__product-button",
            "button-minus"
          ) as HTMLButtonElement;
          buttonMinus.textContent = "-";
          const productSumm = createElementWithClass(
            "p",
            "cart__product-summ"
          ) as HTMLParagraphElement;
          productSumm.textContent = `${productsInfo[j].price}$`;
          productsNumBtnsWrapper.append(buttonMinus, productNum, buttonPlus);
          productControls.append(
            productStock,
            productsNumBtnsWrapper,
            productSumm
          );
          productWrapper.append(
            productImage,
            productTextWrapper,
            productControls
          );
          cartProducts.append(productWrapper);
          buttonPlus.addEventListener("click", () => {
            if (
              Number(productNum.textContent) <
              Number(productStock.textContent?.substring(7))
            ) {
              cartArray.push(`${productsInfo[j].id - 1}`);
              console.log(cartArray);
              productNum.textContent = (
                Number(productNum.textContent) + 1
              ).toString();
              productSumm.textContent = `${(
                Number(productSumm.textContent?.slice(0, -1)) +
                Number(productsInfo[j].price)
              ).toString()}$`;
              updateValues();
            } else {
              return false;
            }
          });
          buttonMinus.addEventListener("click", () => {
            if (productNum.textContent != "1") {
              productNum.textContent = (
                Number(productNum.textContent) - 1
              ).toString();
              productSumm.textContent = `${(
                Number(productSumm.textContent?.slice(0, -1)) -
                Number(productsInfo[j].price)
              ).toString()}$`;
              const val = cartArray.indexOf(`${productsInfo[j].id - 1}`);
              cartArray.splice(val, 1);
              console.log(cartArray);
              updateValues();
            } else if (productNum.textContent == "1") {
              removeFromCart(`${productsInfo[j].id - 1}`);
              productWrapper.style.display = "none";
              productNum.textContent = "0";
              productSumm.textContent = "0";
              const cartNum = document.querySelector(
                ".products-count"
              ) as HTMLParagraphElement;
              cartNum.textContent = `${cartArray.length}`;
              localStorage.setItem(
                `add-buttons-value${productsInfo[j].id - 1}`,
                "Add to cart"
              );
              updateValues();
            } else {
              return false;
            }
          });
        }
      }
    }
    console.log(cartArray);
    setTimeout(updateValues, 10);
    this.subContainer.render().append(createModal(), cartBlock, summaryBlock);
  };

  render = () => {
    this.createContent();
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

const updateValues = () => {
  const productNum = document.querySelector(
    ".summary__products-num"
  ) as HTMLParagraphElement;
  productNum.textContent = `Products: ${cartArray.length}`;
  const Total = document.querySelector(
    ".summary__total"
  ) as HTMLParagraphElement;
  const prices = document.querySelectorAll(".cart__product-summ");
  const pricesValues = [];
  if (prices[0]) {
    for (let i = 0; i < prices.length; i++) {
      pricesValues.push(Number(prices[i].textContent?.slice(0, -1)));
      Total.textContent = `Total: ${pricesValues.reduce((a, b) => a + b)}.00$`;
    }
  } else {
    Total.textContent = `Total: 0.00$`;
  }
  const cartNum = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  cartNum.textContent = cartArray.length.toString();
};

export default Cart;
