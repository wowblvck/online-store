import Component from "../../templates/Component";
import Container from "../Container/Container";
import { createElementWithClass } from "../../utils/functions";
import { icons } from "../../data/images/images";
import { productsInfo } from "../../data/products/products";
import { cartArray } from "../ProductsList/ProductsList";
import { PageIds } from "../../interfaces/Page";
import { removeFromCart1 } from "../ProductsList/ProductsList";
import { Modal } from "./Modal/Modal";
import { promoCodes } from "../../data/promo/promoCodes";
import { sortProducts } from "../../Pagination/Pagination";
import { goNextPage } from "../../Pagination/Pagination";
import { goPrevPage } from "../../Pagination/Pagination";
import { updateTotal } from "../Header/Total/Total";

class Cart extends Component {
  private subContainer: Container;

  private modal = new Modal("div", "modal__wrapper");

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
    summaryProductsNum.textContent = `Products: 0`;

    const summaryPricesContainer = createElementWithClass(
      "div",
      "summary__total-container"
    ) as HTMLDivElement;

    for (let i = 0; i <= promoCodes.length; i++) {
      const summaryTotal = createElementWithClass(
        "p",
        "summary__total-wrapper"
      ) as HTMLParagraphElement;
      const totalSpan = createElementWithClass(
        "span",
        "summary__total-subtitle"
      ) as HTMLSpanElement;
      totalSpan.textContent = "Total:";
      const totalNum = createElementWithClass(
        "span",
        "summary__total"
      ) as HTMLSpanElement;
      totalNum.textContent = "0.00$";
      totalNum.setAttribute("id", `total${i}`);
      if (i != 0) {
        summaryTotal.classList.add("hidden");
      }
      summaryTotal.append(totalSpan, totalNum);
      summaryTotal.setAttribute("id", `${i}`);
      summaryPricesContainer.append(summaryTotal);
    }
    const discountBlock = createElementWithClass(
      "div",
      "summary__discounts"
    ) as HTMLDivElement;
    const summaryInput = createElementWithClass(
      "input",
      "summary__input"
    ) as HTMLInputElement;
    summaryInput.placeholder = "Enter promo code (Test: 'RS', 'EPM')";
    summaryInput.addEventListener("input", () => {
      for (let i = 0; i < promoCodes.length; i++) {
        if (summaryInput.value.toUpperCase() == promoCodes[i].name) {
          const discountInfo = document.querySelector(
            `.id${i}`
          ) as HTMLDivElement;
          discountInfo.classList.add("visible");
        } else {
          const discountInfo = document.querySelector(
            `.id${i}`
          ) as HTMLDivElement;
          discountInfo.classList.remove("visible");
        }
      }
    });
    discountBlock.append(summaryInput);
    let btnCount = 0;
    for (let i = 0; i < promoCodes.length; i++) {
      const discountInfo = createElementWithClass(
        "div",
        "summary__discount-item",
        `id${i}`
      ) as HTMLDivElement;
      const discountText = createElementWithClass(
        "span",
        "summary__discount-info"
      ) as HTMLDivElement;
      discountText.textContent = `${promoCodes[i].description}`;
      const discountButton = createElementWithClass(
        "button",
        "summary__discount-button"
      ) as HTMLButtonElement;
      discountButton.textContent = "Add";
      discountInfo.append(discountText, discountButton);
      discountBlock.append(discountInfo);
      discountButton.addEventListener("click", () => {
        if (discountButton.textContent == "Add") {
          discountButton.textContent = "Drop";
          discountInfo.setAttribute("style", "display: flex");
          if (btnCount == 0) {
            const sum0 = document.querySelectorAll(
              ".summary__total"
            )[0] as HTMLSpanElement;
            const sumContainer = document.querySelectorAll(
              ".summary__total-wrapper"
            )[1] as HTMLDivElement;
            sum0.style.textDecoration = "line-through";
            sumContainer.classList.remove("hidden");
            btnCount++;
          } else if (btnCount == 1) {
            const sum0 = document.querySelectorAll(
              ".summary__total"
            )[1] as HTMLSpanElement;
            const sumContainer = document.querySelectorAll(
              ".summary__total-wrapper"
            )[2] as HTMLDivElement;
            sum0.style.textDecoration = "line-through";
            sumContainer.classList.remove("hidden");
            btnCount++;
          }
        } else {
          discountButton.textContent = "Add";
          discountInfo.removeAttribute("style");
          if (btnCount == 1) {
            const sum0 = document.querySelectorAll(
              ".summary__total"
            )[0] as HTMLSpanElement;
            const sumContainer = document.querySelectorAll(
              ".summary__total-wrapper"
            )[1] as HTMLDivElement;
            sum0.style.textDecoration = "auto";
            sumContainer.classList.add("hidden");
            btnCount--;
          } else if (btnCount == 2) {
            const sum0 = document.querySelectorAll(
              ".summary__total"
            )[1] as HTMLSpanElement;
            const sumContainer = document.querySelectorAll(
              ".summary__total-wrapper"
            )[2] as HTMLDivElement;
            sum0.style.textDecoration = "auto";
            sumContainer.classList.add("hidden");
            btnCount--;
          }
        }
      });
    }

    const summaryBtn = createElementWithClass("button", "summary__button");
    summaryBtn.textContent = "BUY NOW";
    summaryBtn.addEventListener("click", () => {
      const modal = document.querySelector(".modal__wrapper") as HTMLDivElement;
      modal.style.opacity = "1";
      modal.style.visibility = "visible";
    });
    summaryMain.append(
      summaryProductsNum,
      summaryPricesContainer,
      discountBlock,
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
    cartLimitInput.type = "number";
    cartLimitInput.addEventListener("input", sortProducts);
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
    cartPagesArrowLeft.addEventListener("click", goPrevPage);
    const cartPagesArrowRight = createElementWithClass(
      "img",
      "arrow__right",
      "cart__pages-arrow"
    ) as HTMLImageElement;
    cartPagesArrowRight.addEventListener("click", goNextPage);
    const cartPagesNums = createElementWithClass(
      "div",
      "cart__pages-nums"
    ) as HTMLDivElement;
    const cartPagesPageNumCurrent = createElementWithClass(
      "span",
      "cart__pages-num",
      "pages__current"
    ) as HTMLSpanElement;
    cartPagesPageNumCurrent.textContent = "1";
    const cartPagesPageNumSep = createElementWithClass(
      "span",
      "cart__pages-num",
      "pages__separator"
    ) as HTMLSpanElement;
    cartPagesPageNumSep.textContent = "/";
    const cartPagesPageNumCommon = createElementWithClass(
      "span",
      "cart__pages-num",
      "pages__common"
    ) as HTMLSpanElement;
    cartPagesPageNumCommon.textContent = "1";

    cartPagesNums.append(
      cartPagesPageNumCurrent,
      cartPagesPageNumSep,
      cartPagesPageNumCommon
    );
    cartPagesArrowLeft.src = icons[0].src;
    cartPagesArrowLeft.alt = icons[0].name;
    cartPagesArrowLeft.setAttribute("style", "pointer-events: none");
    cartPagesArrowRight.src = icons[1].src;
    cartPagesArrowRight.alt = icons[1].name;
    cartPagesArrowRight.setAttribute("style", "pointer-events: none");

    cartLimitBlock.append(cartLimitTitle, cartLimitInput);
    cartPagesBlock.append(cartPagesControls);
    cartPagesControls.append(
      cartPagesArrowLeft,
      cartPagesNums,
      cartPagesArrowRight
    );

    cartHeader.append(cartTitle, cartLimitBlock, cartPagesBlock);

    const copyOfArr = cartArray.filter((x, i) => cartArray.indexOf(x) === i);

    for (let i = 0; i < copyOfArr.length; i++) {
      for (let j = 0; j < productsInfo.length; j++) {
        if (copyOfArr[i] === productsInfo[j].id.toString()) {
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
            location.href = `#${PageIds.ProductsPage}`;
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
            if (cartArray[i] == `${productsInfo[j].id}`) {
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
          productSumm.textContent = `${
            productsInfo[j].price * counterOfProduct
          }$`;
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
              cartArray.push(`${productsInfo[j].id}`);
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
              const val = cartArray.indexOf(`${productsInfo[j].id}`);
              cartArray.splice(val, 1);
              updateValues();
            } else if (productNum.textContent == "1") {
              removeFromCart1(`${productsInfo[j].id}`);
              cartProducts.removeChild(productWrapper);
              productWrapper.style.display = "none";
              productNum.textContent = "0";
              productSumm.textContent = "0";
              const cartNum = document.querySelector(
                ".products-count"
              ) as HTMLParagraphElement;
              cartNum.textContent = `${cartArray.length}`;
              localStorage.setItem(
                `add-buttons-value${productsInfo[j].id}`,
                "Add to cart"
              );
              updateValues();
              sortProducts();
            } else {
              return false;
            }
          });
        }
      }
    }
    setTimeout(updateValues, 10);
    this.subContainer
      .render()
      .append(this.modal.render(), cartBlock, summaryBlock);
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
  const Total = document.querySelectorAll(".summary__total");
  const prices = document.querySelectorAll(".cart__product-summ");
  const pricesValues = [];
  let total = 0;
  if (prices[0]) {
    for (let i = 0; i < prices.length; i++) {
      pricesValues.push(Number(prices[i].textContent?.slice(0, -1)));
      total = pricesValues.reduce((a, b) => a + b);
      Total[0].textContent = `${total}.00$`;
      Total[1].textContent = `${total * 0.9}.00$`;
      Total[2].textContent = `${total * 0.8}.00$`;
    }
  } else {
    Total.forEach((el) => {
      el.textContent = `0.00$`;
    });
  }
  const cartNum = document.querySelector(
    ".products-count"
  ) as HTMLParagraphElement;
  cartNum.textContent = cartArray.length.toString();
  const headerTotal = document.querySelector(
    ".total__value"
  ) as HTMLSpanElement;
  headerTotal.textContent = Total[0].textContent = `${total}.00$`;
  localStorage.setItem("total", `${headerTotal.textContent.slice(0, -4)}`);
  updateTotal();
};

export default Cart;
