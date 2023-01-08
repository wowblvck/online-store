import { BehaviorSubject } from "rxjs";
import { ProductData } from "../interfaces/Products";
import { State } from "../interfaces/State";

const DEFAULT_STATE: State = {
  products: [],
  cart: {
    products: {},
  },
  categories: [],
  filterProducts: [],
};

class Store {
  static isExits = false;
  static instance: Store;

  private state = DEFAULT_STATE;
  public $state = new BehaviorSubject<State>(this.state);
  private loaded = false;
  private filterProducts: ProductData[] = [];

  constructor() {
    if (Store.isExits) {
      return Store.instance;
    }
    Store.isExits = true;
    Store.instance = this;

    this.$state.subscribe((state: State) => (this.state = state));
  }

  update = (state: Partial<State> = {}) => {
    this.$state.next({ ...this.state, ...state });
  };

  get Products() {
    return this.state.products;
  }

  get Categories() {
    return this.state.categories;
  }

  get Loaded() {
    return this.loaded;
  }

  set Loaded(state: boolean) {
    this.loaded = state;
  }

  get FilterProducts() {
    return this.filterProducts;
  }

  set FilterProducts(products: ProductData[]) {
    products.forEach((product) => {
      const index = this.filterProducts.indexOf(product);
      if (index === -1) {
        this.filterProducts.push(product);
      } else {
        this.filterProducts.splice(index, 1);
      }
    });
    console.log(this.filterProducts);
    // localStorage.setItem(
    //   "filter-products",
    //   JSON.stringify(this.filterProducts)
    // );
  }
}

export const store = new Store();
