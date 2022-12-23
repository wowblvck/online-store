import logoImg from "../../../assets/icons/cart-logo.svg";
import cartImg from "../../../assets/icons/cart-home.png";
import loupeIcon from "../../../assets/icons/loupe.png";
// import products from "../../products/products";
// import productImg from "../../../components/products/images/1/1.jpg";

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
        <section class="catalog main__catalog">
          <div class="container">
            <div class="catalog-wrapper">
              <div class="filters">
                <div class="search">
                  <i class="search__icon"></i>
                  <input class="search__input" placeholder="Search">
                </div>
                <div class="filters-buttons">
                  <button class="btn btn_theme_shadow filters-buttons__reset">Reset filters</button>
                  <button class="btn btn_theme_shadow filters-buttons__copy">Copy</button>
                </div>
                <div id="categories" class="filters-content categories">
                  <h2 class="filters-content__title">Categories</h2>
                  <div class="filters-form">
                    <div class="filters-form__item">
                      <input class="filters-form__input" type="checkbox" id="smartphones">
                      <label class="filters-form__label" for="smartphones">Smartphones</label>
                      <p class="filters-form__value">0 / 0</p>
                    </div>
                    <div class="filters-form__item">
                      <input class="filters-form__input" type="checkbox" id="laptops">
                      <label class="filters-form__label" for="laptops">Laptops</label>
                      <p class="filters-form__value">0 / 0</p>
                    </div>
                    <div class="filters-form__item">
                      <input class="filters-form__input" type="checkbox" id="tablets">
                      <label class="filters-form__label" for="tablets">Tablets</label>
                      <p class="filters-form__value">0 / 0</p>
                    </div>
                    <div class="filters-form__item">
                      <input class="filters-form__input" type="checkbox" id="tv">
                      <label class="filters-form__label" for="tv">TV's</label>
                      <p class="filters-form__value">0 / 0</p>
                    </div>
                    <div class="filters-form__item">
                      <input class="filters-form__input" type="checkbox" id="watches">
                      <label class="filters-form__label" for="watches">Watches</label>
                      <p class="filters-form__value">0 / 0</p>
                    </div>
                  </div>
                </div>
                <div id="brands" class="filters-content">
                  <h2 class="filters-content__title">Brands</h2>
                  <div class="filters-form">
                    <div class="filters-form__item">
                      <input class="filters-form__input" type="checkbox" id="acer">
                      <label class="filters-form__label" for="acer">Acer</label>
                      <p class="filters-form__value">0 / 0</p>
                  </div>
                  <div class="filters-form__item">
                      <input class="filters-form__input" type="checkbox" id="apple">
                      <label class="filters-form__label" for="apple">Apple</label>
                      <p class="filters-form__value">0 / 0</p>
                  </div>
                  <div class="filters-form__item">
                    <input class="filters-form__input" type="checkbox" id="asus">
                    <label class="filters-form__label" for="asus">ASUS</label>
                    <p class="filters-form__value">0 / 0</p>
                  </div>
                  <div class="filters-form__item">
                    <input class="filters-form__input" type="checkbox" id="garmin">
                    <label class="filters-form__label" for="garmin">Garmin</label>
                    <p class="filters-form__value">0 / 0</p>
                  </div>
                    <div class="filters-form__item">
                      <input class="filters-form__input" type="checkbox" id="haier">
                      <label class="filters-form__label" for="haier">Haier</label>
                      <p class="filters-form__value">0 / 0</p>
                  </div>
                    <div class="filters-form__item">
                      <input class="filters-form__input" type="checkbox" id="hp">
                      <label class="filters-form__label" for="hp">hp</label>
                      <p class="filters-form__value">0 / 0</p>
                  </div>
                  <div class="filters-form__item">
                    <input class="filters-form__input" type="checkbox" id="huawei">
                    <label class="filters-form__label" for="huawei">HUAWEI</label>
                    <p class="filters-form__value">0 / 0</p>
                  </div>
                  <div class="filters-form__item">
                    <input class="filters-form__input" type="checkbox" id="lg">
                    <label class="filters-form__label" for="lg">LG</label>
                    <p class="filters-form__value">0 / 0</p>
                  </div>
                  <div class="filters-form__item">
                    <input class="filters-form__input" type="checkbox" id="realme">
                    <label class="filters-form__label" for="realme">Realme</label>
                    <p class="filters-form__value">0 / 0</p>
                  </div>
                  <div class="filters-form__item">
                    <input class="filters-form__input" type="checkbox" id="samsung">
                    <label class="filters-form__label" for="samsung">Samsung</label>
                    <p class="filters-form__value">0 / 0</p>
                  </div>
                </div>
              </div>
              <div id="price" class="filters-content filters-content_price">
                  <h2 class="filters-content__title">Price</h2>
                  <div class="price-content">
                    <p class="price-content__min">$ 0</p>
                    <p class="price-content__max">$ 100</p>
                  </div>
                  <div class="filters-range">
                    <input type="range" class="filters-range__input" min="0" max="100" value="0">
                    <input type="range" class="filters-range__input" min="0" max="100" value="100">
                  </div>
                </div>
                <div id="stock" class="filters-content filters-content_stock">
                  <h2 class="filters-content__title">Stock</h2>
                  <div class="stock-content">
                    <span class="stock-content__min">0</span>
                    <span class="stock-content__max">50</span>
                </div>
                <div class="filters-range">
                  <input type="range" class="filters-range__input" min="0" max="100" value="0">
                  <input type="range" class="filters-range__input" min="0" max="100" value="100">
                </div>
            </div>
          </div>
          <div class="products">
            <div class="products-header">
              <div class="sort">
                <label class="sort__label" for="sort-select">
                  <select name="sorts" class="sort__select" id="sort-select" required="required">
                      <option class="sort__item" value="" disabled="disabled" selected="selected">Sort by</option>
                      <option class="sort__item" value="1">Sort by price ASC</option>
                      <option class="sort__item" value="2">Sort by price DESC</option>
                      <option class="sort__item" value="3">Sort by rating ASC</option>
                      <option class="sort__item" value="4">Sort by rating DESC</option>
                      <option class="sort__item" value="5">Sort by discount ASC</option>
                      <option class="sort__item" value="6">Sort by discrount DESC</option>
                  </select>
                  <svg class="sort__icon">
                    <use xlink:href="#select-arrow-down"></use>
                    <symbol id="select-arrow-down" viewbox="0 0 10 6">
                      <polyline points="1 1 5 5 9 1"></polyline>
                    </symbol>
                  </svg>
                </label>
              </div>
              <p class="found-items">Items: 0</p>
              <div class="view-items">
                <button class="view-items__button view-items__button_active view-items__button_grid"></button>
                <button class="view-items__button view-items__button_list"></button>
              </div>
            </div>
            <hr class="products-header__line">
            <div class="products-content">
              <div class="products-item">
                <h3 class="products-item__title">iPhone</h3>
                <div class="products-item__wrapper">
                  <p class="products-item__category">Category: Smartphones</p>
                  <p class="products-item__brand">Brand: Apple</p>
                  <p class="products-item__price">Price: 1000$</p>
                  <p class="products-item__stock">Stock: 5</p>
                  <div class="products-item__buttons-wrapper">
                    <button class="products-item__button">Add to cart</button>
                    <button class="products-item__button">See More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

// const appearProducts = () => {
//   for (let i = 0; i < products.length; i++) {
//     const productsContainer = document.querySelector(".products");
//     const productItem = document.createElement("div");
//     productItem.className = "products-item";
//     productItem.style.backgroundImage = `url("https://raw.githubusercontent.com/MikhailStn/img/main/${
//       i + 1
//     }/1.jpg")`;
//     productsContainer?.append(productItem);
//     const productTitle = document.createElement("h3");
//     productTitle.className = "products-item__title";
//     productItem?.append(productTitle);
//     productTitle.innerHTML = products[i].title;
//     const productInfoWrapper = document.createElement("div");
//     productInfoWrapper.className = "product__info-wrapper";
//     productItem.append(productInfoWrapper);
//     const brandName = document.createElement("p");
//     brandName.className = "product__brand-name";
//     brandName.innerHTML = `Brand: ${products[i].brand}`;
//     const productPrice = document.createElement("p");
//     productPrice.innerHTML = `Price: ${products[i].price}$`;
//     productPrice.className = "product__price";
//     const productStock = document.createElement("p");
//     productStock.innerHTML = `Stock: ${products[i].stock}`;
//     productStock.className = "product__stock";
//     productInfoWrapper.append(brandName, productPrice, productStock);
//     const productsButtonsWrapper = document.createElement("div");
//     productsButtonsWrapper.className = "product__buttons-wrapper";
//     productInfoWrapper.append(productsButtonsWrapper);
//     const btnAddProduct = document.createElement("button");
//     const btnSeeMore = document.createElement("button");
//     btnAddProduct.className = "product__button";
//     btnSeeMore.className = "product__button";
//     btnAddProduct.innerHTML = "Add to cart";
//     btnSeeMore.innerHTML = "See more";
//     productsButtonsWrapper.append(btnAddProduct, btnSeeMore);
//   }
// };

// setTimeout(appearProducts, 1000);

// <label class="search__label" for="search__input">
// <img class="search__icon" src="${this.loupeIcon}" alt="Search Icon"
// </label>
