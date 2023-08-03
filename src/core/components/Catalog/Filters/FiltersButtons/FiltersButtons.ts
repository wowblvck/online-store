import { store } from "../../../../store/Store";
import Component from "../../../../templates/Component";
import Button from "../../../Button/Button";
import ProductsList from "../../../ProductsList/ProductsList";
import BrandsList from "../Brands/BrandsList/BrandsList";
import CategoriesList from "../Categories/CategoriesList/CategoriesList";

class FiltersButtons extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  createFilterButtons = () => {
    const btnReset = new Button(
      "button",
      "btn",
      "btn_theme_shadow",
      "filters-buttons__reset"
    );
    btnReset.render().textContent = "Reset filters";

    const btnCopy = new Button(
      "button",
      "btn",
      "btn_theme_shadow",
      "filters-buttons__copy"
    );
    btnCopy.render().textContent = "Copy";

    this.container.append(btnReset.render(), btnCopy.render());
  };

  addEvents = () => {
    const button = document.querySelector(".filters-buttons__reset");
    if (!button) throw new Error("Button reset filters not found");
    button.addEventListener("click", () => {
      store.StateCategories.forEach((el) => {
        el.state = false;
        el.stock = el.amount;

        localStorage.setItem(
          "stateCategories",
          JSON.stringify(store.StateCategories)
        );

        store.FiltersCategories = [];

        const categoriesListWrapper = document.getElementById(
          "categories"
        ) as HTMLDivElement;
        const categoriesList = new CategoriesList();
        if (categoriesListWrapper) {
          categoriesListWrapper.innerHTML = categoriesList.render();
          categoriesList.addEvents();
        }
      });

      store.StateBrands.forEach((el) => {
        el.state = false;
        el.stock = el.amount;

        localStorage.setItem("stateBrands", JSON.stringify(store.StateBrands));

        store.FiltersBrands = [];

        const brandsListWrapper = document.getElementById(
          "brands"
        ) as HTMLDivElement;
        const brandsList = new BrandsList();
        if (brandsListWrapper) {
          brandsListWrapper.innerHTML = brandsList.render();
          brandsList.addEvents();
        }
      });

      const searchInput = document.querySelector(
        ".search__input"
      ) as HTMLInputElement;
      if (searchInput) {
        searchInput.value = "";
        searchInput.placeholder = "Name, brand or category";
        store.StateSearch = "";
      }

      const minPriceInput = document.querySelector(
        ".filters-range__input_min-price"
      ) as HTMLInputElement;
      minPriceInput.max = Math.max(
        ...store.Products.map((product) => product.price)
      ).toString();
      minPriceInput.value = Math.min(
        ...store.Products.map((product) => product.price)
      ).toString();
      store.MinPrice = Number(minPriceInput.value);
      const priceContentMin = document.querySelector(
        ".price-content__min"
      ) as HTMLParagraphElement;
      priceContentMin.textContent = `$${store.MinPrice}`;

      const maxPriceInput = document.querySelector(
        ".filters-range__input_max-price"
      ) as HTMLInputElement;
      maxPriceInput.min = Math.min(
        ...store.Products.map((product) => product.price)
      ).toString();
      maxPriceInput.value = Math.max(
        ...store.Products.map((product) => product.price)
      ).toString();
      store.MaxPrice = Number(maxPriceInput.value);
      const priceContentMax = document.querySelector(
        ".price-content__max"
      ) as HTMLParagraphElement;
      priceContentMax.textContent = `$${store.MaxPrice}`;
      store.updatePrice();

      const minStockInput = document.querySelector(
        ".filters-range__input_min-stock"
      ) as HTMLInputElement;
      minStockInput.max = Math.max(
        ...store.Products.map((product) => product.stock)
      ).toString();
      minStockInput.value = Math.min(
        ...store.Products.map((product) => product.stock)
      ).toString();
      store.MinStock = Number(minStockInput.value);
      const stockContentMin = document.querySelector(
        ".stock-content__min"
      ) as HTMLParagraphElement;
      stockContentMin.textContent = `${store.MinStock}`;

      const maxStockInput = document.querySelector(
        ".filters-range__input_max-stock"
      ) as HTMLInputElement;
      maxStockInput.min = Math.min(
        ...store.Products.map((product) => product.stock)
      ).toString();
      maxStockInput.value = Math.max(
        ...store.Products.map((product) => product.stock)
      ).toString();
      store.MaxStock = Number(maxStockInput.value);
      const stockContentMax = document.querySelector(
        ".stock-content__max"
      ) as HTMLParagraphElement;
      stockContentMax.textContent = `${store.MaxStock}`;
      store.updateStock();

      store.FilterProducts = [];

      const wrapper = document.querySelector(
        ".products-content"
      ) as HTMLDivElement;

      const productList = new ProductsList();
      if (wrapper) {
        wrapper.innerHTML = productList.render();
        productList.addEvents();
      }
    });
  };

  render = () => {
    this.createFilterButtons();
    return this.container;
  };
}

export default FiltersButtons;
