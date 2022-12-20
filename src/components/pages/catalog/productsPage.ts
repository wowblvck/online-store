import logoImg from "../../../assets/icons/cart-logo.svg";
import cartImg from "../../../assets/icons/cart-home.png";
import loupeIcon from "../../../assets/icons/loupe.png";
import products from "../../products/products";

export default class catalog {
  element: string;
  logoImg: string;
  cartImg: string;
  loupeIcon: string;

  constructor() {
    this.logoImg = logoImg;
    this.cartImg = cartImg;
    this.loupeIcon = loupeIcon;
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
              <li class="nav__item">
                <a class="nav__link">Home</a>
              </li>
              <li class="nav__item nav__item_state_active">
                <a class="nav__link nav__link_state_hovered">Catalog</a>
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
        <div class="container main__container main__catalog">
            <div class="filters__container">
              <div class="search__wrapper">
                <input class="search" placeholder="Search" id="search">
                <label class="search__label" for="search">
                  <img class="loupe" src="${this.loupeIcon}" alt="Search Icon"
                </label>
              </div>
              <div class="filters">
                <div class="buttons__wrapper">
                  <button class="button__reset filters__button">Reset filters</button>
                  <button class="button__copy-link filters__button">Copy</button>
                </div>
                <div class="categories__wrapper">
                  <h2 class="categories__title">Categories</h2>
                  <div class="categories__list">
                    <div class="categories__item">
                      <input class="categories__input" type="checkbox" id="smartphones">
                      <label class="categories__label" for="smartphones">Smartphones</label>
                      <span class="categories__amount">0 / 0</span>
                    </div>
                    <div class="categories__item">
                      <input class="categories__input" type="checkbox" id="laptops">
                      <label class="categories__label" for="laptops">Laptops</label>
                      <span class="categories__amount">0 / 0</span>
                    </div>
                    <div class="categories__item">
                      <input class="categories__input" type="checkbox" id="tablets">
                      <label class="categories__label" for="tablets">Tablets</label>
                      <span class="categories__amount">0 / 0</span>
                    </div>
                    <div class="categories__item">
                      <input class="categories__input" type="checkbox" id="tv">
                      <label class="categories__label" for="tv">TV's</label>
                      <span class="categories__amount">0 / 0</span>
                    </div>
                    <div class="categories__item">
                      <input class="categories__input" type="checkbox" id="watches">
                      <label class="categories__label" for="watches">Watches</label>
                      <span class="categories__amount">0 / 0</span>
                    </div>
                  </div>
                </div>
                  <div class="brands__wrapper">
                    <h2 class="brands__title">Brands</h2>
                    <div class="brands__list">
                      <div class="brands__item">
                        <input class="brands__input" type="checkbox" id="acer">
                        <label class="brands__label" for="acer">Acer</label>
                        <span class="brands__amount">0 / 0</span>
                    </div>
                    <div class="brands__item">
                        <input class="brands__input" type="checkbox" id="apple">
                        <label class="brands__label" for="apple">Apple</label>
                        <span class="brands__amount">0 / 0</span>
                    </div>
                    <div class="brands__item">
                      <input class="brands__input" type="checkbox" id="asus">
                      <label class="brands__label" for="asus">ASUS</label>
                      <span class="brands__amount">0 / 0</span>
                    </div>
                    <div class="brands__item">
                      <input class="brands__input" type="checkbox" id="garmin">
                      <label class="brands__label" for="garmin">Garmin</label>
                      <span class="brands__amount">0 / 0</span>
                    </div>
                      <div class="brands__item">
                        <input class="brands__input" type="checkbox" id="haier">
                        <label class="brands__label" for="haier">Haier</label>
                        <span class="brands__amount">0 / 0</span>
                    </div>
                      <div class="brands__item">
                        <input class="brands__input" type="checkbox" id="hp">
                        <label class="brands__label" for="hp">hp</label>
                        <span class="brands__amount">0 / 0</span>
                    </div>
                    <div class="brands__item">
                      <input class="brands__input" type="checkbox" id="huawei">
                      <label class="brands__label" for="huawei">HUAWEI</label>
                      <span class="brands__amount">0 / 0</span>
                    </div>
                    <div class="brands__item">
                      <input class="brands__input" type="checkbox" id="lg">
                      <label class="brands__label" for="lg">LG</label>
                      <span class="brands__amount">0 / 0</span>
                    </div>
                    <div class="brands__item">
                      <input class="brands__input" type="checkbox" id="realme">
                      <label class="brands__label" for="realme">Realme</label>
                      <span class="brands__amount">0 / 0</span>
                    </div>
                    <div class="brands__item">
                      <input class="brands__input" type="checkbox" id="samsung">
                      <label class="brands__label" for="samsung">Samsung</label>
                      <span class="brands__amount">0 / 0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="prices__wrapper">
                <h2 class="prices__title">Price</h2>
                <div class="prices__subtitle">
                  <span class="price__min">$ 0</span>
                  <span class="price__max">$ 100</span>
                </div>
                <div class="prices__inputs">
                  <input type="range" class="prices__input" min="0" max="100" value="0">
                  <input type="range" class="prices__input" min="0" max="100" value="100">
                </div>
              </div>
              <div class="stock__wrapper">
                <h2 class="stock__title">Stock</h2>
                <div class="stock__subtitle">
                  <span class="stock__min">0</span>
                  <span class="stock__max">50</span>
              </div>
              <div class="stock__inputs">
                <input type="range" class="stock__input" min="0" max="100" value="0">
                <input type="range" class="stock__input" min="0" max="100" value="100">
              </div>
            </div>
          </div>
          <div class="products__wrapper">
              <div class="products__container"></div>
          </div>
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
    this.generatePage();
  }
  generatePage = () => {
    window.addEventListener("DOMContentLoaded", () => {
      const body: HTMLElement | null = document.querySelector(".page");
      if (body != undefined) {
        body.innerHTML = this.element;
      }
    });
  };
}

/* let allProducts:string = ``; */

const appearProducts = () => {
  for (let i = 0; i < products.length; i++) {
    const productsContainer = document.querySelector(".products__container");
    const productItem = document.createElement("div");
    productItem.className = "products__item";
    productItem.style.backgroundImage = `url("https://raw.githubusercontent.com/MikhailStn/img/main/${
      i + 1
    }/1.jpg")`;
    productsContainer?.append(productItem);
    const productTitle = document.createElement("h3");
    productTitle.className = "product__title";
    productItem?.append(productTitle);
    productTitle.innerHTML = products[i].title;
    const productInfoWrapper = document.createElement("div");
    productInfoWrapper.className = "product__info-wrapper";
    productItem.append(productInfoWrapper);
    const brandName = document.createElement("p");
    brandName.className = "product__brand-name";
    brandName.innerHTML = `Brand: ${products[i].brand}`;
    const productPrice = document.createElement("p");
    productPrice.innerHTML = `Price: ${products[i].price}$`;
    productPrice.className = "product__price";
    const productStock = document.createElement("p");
    productStock.innerHTML = `Stock: ${products[i].stock}`;
    productStock.className = "product__stock";
    productInfoWrapper.append(brandName, productPrice, productStock);
    const productsButtonsWrapper = document.createElement("div");
    productsButtonsWrapper.className = "product__buttons-wrapper";
    productInfoWrapper.append(productsButtonsWrapper);
    const btnAddProduct = document.createElement("button");
    const btnSeeMore = document.createElement("button");
    btnAddProduct.className = "product__button";
    btnSeeMore.className = "product__button";
    btnAddProduct.innerHTML = "Add to cart";
    btnSeeMore.innerHTML = "See more";
    productsButtonsWrapper.append(btnAddProduct, btnSeeMore);
  }
};

setTimeout(appearProducts, 1000);
