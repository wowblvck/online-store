import laptopImg from "../../../assets/images/laptop.png";
import cameraIcon from "../../../assets/icons/multimedia/camera.svg";
import laptopIcon from "../../../assets/icons/multimedia/laptop.svg";
import modemIcon from "../../../assets/icons/multimedia/modem.svg";
import tvIcon from "../../../assets/icons/multimedia/tv.svg";
import tabletIcon from "../../../assets/icons/multimedia/tablet.svg";
import logoImg from "../../../assets/icons/cart-logo.svg";
import cartImg from "../../../assets/icons/cart-home.png";

export default class homePage {
  laptopImg: string;
  cameraIcon: string;
  laptopIcon: string;
  modemIcon: string;
  tvIcon: string;
  tabletIcon: string;
  cartImg: string;
  logoImg: string;
  element: string;

  constructor() {
    this.laptopImg = laptopImg;
    this.cameraIcon = cameraIcon;
    this.laptopIcon = laptopIcon;
    this.modemIcon = modemIcon;
    this.tvIcon = tvIcon;
    this.tabletIcon = tabletIcon;
    this.logoImg = logoImg;
    this.cartImg = cartImg;
    this.element = `
          <header class="header">
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
          </header>
          <main class="main">
            <div class="container main__container">
                <section class="welcome main__welcome">
                    <img
                        class="welcome__img"
                        src="${this.laptopImg}"
                        alt="Laptop logo">
                    <div class="welcome__content">
                        <h1 class="welcome__title">Welcome to Online <span>Store</span></h1>
                        <div class="multimedia">
                            <img
                                src="${this.cameraIcon}"
                                class="multimedia__icon"
                                alt="Camera icon">
                            <img
                                src="${this.laptopIcon}"
                                class="multimedia__icon"
                                alt="Laptop icon">
                            <img
                                src="${this.modemIcon}"
                                class="multimedia__icon"
                                alt="Modem icon">
                            <img
                                src="${this.tabletIcon}"
                                class="multimedia__icon"
                                alt="Tablet icon">
                            <img
                                src="${this.tvIcon}"
                                class="multimedia__icon"
                                alt="TV icon">
                        </div>
                        <p class="welcome__subtitle">Our store sells electronics: the assortment of the store includes smartphones, laptops, smart watches and more.</p>
                        <button class="btn btn__welcome">Start shopping</button>
                    </div>
                </section>
            </div>
          </main>
          <footer class = "footer">
            <div class="container footer__container">
              <div class="copyright">
                <div class="authors">
                  <p class="authors__title">Authors:</p>
                  <a
                    class="authors__link"
                    href="https://github.com/wowblvck"
                    target="_blank">Indar Basto,
                  </a>
                  <a
                    class="authors__link"
                    href="https://github.com/MikhailStn"
                    target="_blank">Mikhail Stankevich
                  </a>
                </div>
                <p class="copyright__year">2022 - 2023</p>
                <a
                  class="copyright__school"
                  href="https://rs.school/"
                  target="_blank">RS School
                </a>
              </div>
            </div>
          </footer>
      `;
    /* this.generatePage(); */
  }
  /* generatePage = () => {
    window.addEventListener("DOMContentLoaded", () => {
      const body: HTMLElement | null = document.querySelector(".page");
      if (body != undefined) {
        body.innerHTML = this.element;
      }
    });
  }; */
}
