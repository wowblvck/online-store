import { AppComponent } from "../../interfaces/AppComponent";
import { PageIds } from "../../interfaces/Page";
import { ProductData } from "../../interfaces/Products";
import { cartModel } from "../../models/CartModel";

export default class ProductItem implements AppComponent {
  private product: ProductData;

  constructor(product: ProductData) {
    this.product = product;
  }

  private getAddHtmlID = () => `add_${this.product.id}`;
  private getSeeHtmlID = () => `see_${this.product.id}`;

  render = () => {
    return `
      <div class="products-item" style="background-image: url(${
        this.product.images[0]
      })">
        <h3 class="products-item__title">${this.product.title}</h3>
        <div class="products-item__wrapper">
          <p class="products-item__category">Category: ${
            this.product.category.charAt(0).toUpperCase() +
            this.product.category.slice(1)
          }
          </p>
          <p class="products-item__brand">Brand: ${
            this.product.brand.charAt(0).toUpperCase() +
            this.product.brand.slice(1)
          }
          </p>
          <p class="products-item__price">Price: ${this.product.price}$</p>
          <p class="products-item__stock">Stock: ${this.product.stock}</p>
          <div class="products-item__buttons-wrapper">
            <button class="products-item__button btn__add-to-cart" id="${this.getAddHtmlID()}">${
      cartModel.checkProduct(this.product) ? "Remove" : "Add to cart"
    }</button>
            <button class="products-item__button btn__see-more" id="${this.getSeeHtmlID()}">See more</button>
          </div>
        </div>
      </div>
    `;
  };

  addEvents() {
    const seeButton = document.getElementById(this.getSeeHtmlID());
    if (!seeButton) throw new Error("Button is undefined");
    seeButton.addEventListener("click", (e) => {
      e.preventDefault();
      const btn = e.currentTarget as HTMLButtonElement;
      const btnID = btn.getAttribute("id")?.replace(/\D/g, "");
      location.href = `#${PageIds.ProductsPage}`;
      localStorage.setItem("idOfItem", btnID as string);
    });

    const addButton = document.getElementById(this.getAddHtmlID());
    if (!addButton) throw new Error("Button is undefined");
    addButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (cartModel.checkProduct(this.product)) {
        cartModel.removeProduct(this.product);
      } else {
        cartModel.addProduct(this.product);
      }
      const productsCount = document.querySelector(
        ".products-count"
      ) as HTMLParagraphElement;
      if (productsCount) {
        productsCount.textContent = cartModel.getTotalAmount().toString();
      }
    });
  }
}
