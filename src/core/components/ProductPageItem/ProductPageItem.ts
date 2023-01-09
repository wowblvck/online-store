import Component from "../../templates/Component";
import Container from "../Container/Container";
import { createElementWithClass } from "../../utils/functions";
import { icons } from "../../data/images/images";
import { productsInfo } from "../../data/products/products";
import { addToCart } from "../ProductsList/ProductsList";
import { removeFromCart } from "../ProductsList/ProductsList";
import { cartArray } from "../ProductsList/ProductsList";
import { createModal } from "../Modal/Modal";
import { PageIds } from "../../interfaces/Page";

class ProductPageItem extends Component {
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

    const pathWrapper = createElementWithClass(
      "div",
      "product__path-wrapper"
    ) as HTMLDivElement;
    const pathStore = createElementWithClass(
      "span",
      "product__path-item"
    ) as HTMLSpanElement;
    pathStore.textContent = "Catalog";
    const pathCategory = createElementWithClass(
      "span",
      "product__path-item"
    ) as HTMLSpanElement;
    pathStore.style.cursor = "pointer";
    pathStore.addEventListener("click", () => {
      location.href = `#${PageIds.CatalogPage}`;
    });
    const category = productsInfo[idOfItem].category.split("");
    const arr = [];
    for (let i = 0; i < category.length; i++) {
      if (i == 0) {
        arr.push(category[i].toUpperCase());
      } else {
        arr.push(category[i]);
      }
    }
    pathCategory.textContent = arr.join("");
    const pathBrand = createElementWithClass(
      "span",
      "product__path-item"
    ) as HTMLSpanElement;
    pathBrand.textContent = `${productsInfo[idOfItem].brand}`;
    const pathTitle = createElementWithClass(
      "span",
      "product__path-item"
    ) as HTMLSpanElement;
    pathTitle.textContent = `${productsInfo[idOfItem].title}`;
    const pathSeparator = createElementWithClass(
      "span",
      "product__path-item"
    ) as HTMLSpanElement;
    pathSeparator.textContent = "●";
    const pathSeparator_1 = createElementWithClass(
      "span",
      "product__path-item"
    ) as HTMLSpanElement;
    pathSeparator_1.textContent = "●";
    const pathSeparator_2 = createElementWithClass(
      "span",
      "product__path-item"
    ) as HTMLSpanElement;
    pathSeparator_2.textContent = "●";
    pathWrapper.append(
      pathStore,
      pathSeparator,
      pathCategory,
      pathSeparator_1,
      pathBrand,
      pathSeparator_2,
      pathTitle
    );

    const productSlider = createElementWithClass("div", "product__slider");
    const arrowLeft = createElementWithClass(
      "img",
      "arrow__left",
      "disabled"
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
    buttonBuyNow.addEventListener("click", () => {
      const modal = document.querySelector(".modal__wrapper") as HTMLDivElement;
      modal.style.display = "flex";
    });

    arrowLeft.addEventListener("click", () => {
      sliderImages.style.backgroundImage = `url("${productsInfo[idOfItem].images[0]}")`;
      arrowLeft.style.opacity = "0.2";
      arrowRight.style.opacity = "1";
    });
    arrowRight.addEventListener("click", () => {
      sliderImages.style.backgroundImage = `url("${productsInfo[idOfItem].images[1]}")`;
      arrowLeft.classList.remove("disabled");
      arrowRight.style.opacity = "0.2";
      arrowLeft.style.opacity = "1";
    });

    productWrapper.append(
      pathWrapper,
      productSlider,
      productBrand,
      productTitle,
      productDescription,
      productButtons
    );
    productSlider.append(arrowLeft, sliderImages, arrowRight);
    productButtons.append(buttonAdd, buttonBuyNow);
    this.subContainer.render().append(createModal(), productWrapper);
  };

  render = () => {
    this.createContent();
    this.container.append(this.subContainer.render());
    return this.container;
  };
}

export default ProductPageItem;
