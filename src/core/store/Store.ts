import { BehaviorSubject } from "rxjs";
import { ProductCategories, ProductData } from "../interfaces/Products";
import { State } from "../interfaces/State";

const DEFAULT_STATE: State = {
  products: [],
  cart: {
    products: {},
  },
  categories: [],
  filterProducts: [],
  searchedProducts: [],
};

class Store {
  static isExits = false;
  static instance: Store;

  private state = DEFAULT_STATE;
  public $state = new BehaviorSubject<State>(this.state);
  private loaded = false;

  constructor() {
    if (Store.isExits) {
      return Store.instance;
    }
    Store.isExits = true;
    Store.instance = this;

    this.$state.subscribe((state: State) => (this.state = state));
  }

  update = (state: Partial<State> = {}) => {
    this.$state.next({
      ...this.state,
      ...state,
    });
  };

  get Products() {
    return this.state.products;
  }

  get Categories() {
    return this.state.categories;
  }

  set Categories(categories: ProductCategories[]) {
    this.state.categories = categories;
    localStorage.setItem(
      "filters-categories",
      JSON.stringify(this.state.categories)
    );
  }

  get Loaded() {
    return this.loaded;
  }

  set Loaded(state: boolean) {
    this.loaded = state;
  }

  get SearchedProducts() {
    return this.state.searchedProducts ?? [];
  }

  set SearchedProducts(products: ProductData[]) {
    this.state.searchedProducts = products;
  }

  get CartProducts() {
    return this.state.cart;
  }

  get FilterProducts() {
    return this.state.filterProducts ?? [];
  }

  set FilterProducts(products: ProductData[]) {
    products.forEach((product) => {
      const index = this.state.filterProducts.indexOf(product);
      if (index !== -1) {
        this.state.filterProducts.splice(index, 1);
      } else {
        this.state.filterProducts.push(product);
      }
    });
    if (this.state.filterProducts.length) {
      localStorage.setItem(
        "filter-products",
        JSON.stringify(this.state.filterProducts)
      );
    } else {
      localStorage.removeItem("filter-products");
    }
  }
}

export const store = new Store();
