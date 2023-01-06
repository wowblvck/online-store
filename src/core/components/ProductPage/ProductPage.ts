import Component from "../../../core/templates/Component";
import Container from "../../../core/components/Container/Container";
import { createElementWithClass } from "../../../core/utils/functions";
import { icons } from "../../../core/data/images/images";
import { productsInfo } from "../../data/products/products";
import { addToCart } from "../ProductsList/ProductsList";
import { removeFromCart } from "../ProductsList/ProductsList";
import { cartArray } from "../ProductsList/ProductsList";

class ProductItem extends Component {
  private subContainer: Container;

  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.subContainer = new Container("div", "container", "product");
  }

  createContent = () => {
    const idOfItem = Number(localStorage.getItem("idOfItem"));

    const productWrapper = createElementWithClass(
      "div",
      "product__wrapper"
    ) as HTMLDivElement;

    const productSlider = createElementWithClass("div", "product__slider");
    const arrowLeft = createElementWithClass(
      "img",
      "arrow__left"
    ) as HTMLImageElement;
    const arrowRight = createElementWithClass(
      "img",
      "arrow__right"
    ) as HTMLImageElement;
    arrowLeft.src = icons[0].src;
    arrowLeft.alt = icons[0].name;
    arrowRight.src = icons[1].src;
    arrowRight.alt = icons[1].name;

    const sliderImages = createElementWithClass(
      "div",
      "slider__images"
    ) as HTMLDivElement;

    sliderImages.style.backgroundImage = `url("${productsInfo[idOfItem].images[0]}")`;

    const productTitle = createElementWithClass(
      "p",
      "product__title"
    ) as HTMLParagraphElement;

    productTitle.textContent = `${productsInfo[idOfItem].title}`;

    const productBrand = createElementWithClass(
      "p",
      "product__brand"
    ) as HTMLParagraphElement;
    productBrand.textContent = `${productsInfo[idOfItem].brand}`;

    const productDescription = createElementWithClass(
      "p",
      "product__description"
    ) as HTMLParagraphElement;
    productDescription.textContent = `${productsInfo[idOfItem].description}`;

    const productButtons = createElementWithClass(
      "div",
      "product__buttons"
    ) as HTMLDivElement;

    const buttonAdd = createElementWithClass(
      "button",
      "product__button"
    ) as HTMLButtonElement;
    if (cartArray.includes(idOfItem.toString())) {
      buttonAdd.textContent = "Remove";
      console.log(cartArray, idOfItem);
    } else {
      buttonAdd.textContent = "Add to cart";
      console.log(cartArray, idOfItem);
    }
    buttonAdd.addEventListener("click", () => {
      if (buttonAdd.textContent === "Add to cart") {
        buttonAdd.textContent = "Remove";
        addToCart(`${idOfItem}`);
        localStorage.setItem(`add-buttons-value${idOfItem}`, "Remove");
      } else {
        buttonAdd.textContent = "Add to cart";
        removeFromCart(`${idOfItem}`);
        localStorage.setItem(`add-buttons-value${idOfItem}`, "Add to cart");
      }
    });

    const buttonBuyNow = createElementWithClass(
      "button",
      "product__button"
    ) as HTMLButtonElement;
    buttonBuyNow.textContent = "Buy now";

    arrowLeft.addEventListener("click", () => {
      sliderImages.style.backgroundImage = `url("${productsInfo[idOfItem].images[0]}")`;
      arrowLeft.style.opacity = "0.2";
      arrowRight.style.opacity = "1";
    });
    arrowRight.addEventListener("click", () => {
      sliderImages.style.backgroundImage = `url("${productsInfo[idOfItem].images[1]}")`;
      arrowRight.style.opacity = "0.2";
      arrowLeft.style.opacity = "1";
    });

    productWrapper.append(
      productSlider,
      productBrand,
      productTitle,
      productDescription,
      productButtons
    );
    productSlider.append(arrowLeft, sliderImages, arrowRight);
    productButtons.append(buttonAdd, buttonBuyNow);
    this.subContainer.render().append(productWrapper);
  };

  render = () => {
    this.createContent();
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

export default ProductItem;
