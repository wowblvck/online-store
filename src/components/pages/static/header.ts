import logoImg from "../../../assets/icons/cart-logo.svg";
import cartImg from "../../../assets/icons/cart-home.png";

export default class Header {
  logoImg: string;
  cartImg: string;
  element: string;

  constructor() {
    this.logoImg = logoImg;
    this.cartImg = cartImg;
    this.element = `
      <div class="container header__container">
        <div class="logo">
            <a class="logo__link" href="/">
                <img
                    src="${this.logoImg}"
                    class="logo__img"
                    alt="Logo Icon">
                <p class="logo__title">online<span>store</span></p>
            </a>
        </div>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item nav__item_state_active">
                    <a class="nav__link nav__link_state_hovered">Home</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link">Catalog</a>
                </li>
                <li class="nav__item">
                    <img class="cart" src="${this.cartImg}" alt="Cart Icon">
                    <p class="products-count">0</p>
                </li>
            </ul>
            <div class="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
      </div>
    `;
    this.generatePage();
  }
  generatePage = () => {
    window.addEventListener("DOMContentLoaded", () => {
      const header: HTMLElement | null = document.querySelector(".header");
      if (header != undefined) {
        header.innerHTML = this.element;
      }
    });
  };
}
