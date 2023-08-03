import { BehaviorSubject } from "rxjs";
import {
  ProductBrands,
  ProductCategories,
  ProductData,
  SortState,
} from "../interfaces/Products";
import { State } from "../interfaces/State";

const DEFAULT_STATE: State = {
  products: [],
  cart: {
    products: {},
  },
  sortMethod: { name: "", value: 0 },
  stateCategories: [],
  stateBrands: [],
  filterProducts: [],
  filterBrands: [],
  filterCategories: [],
  filterSearch: "",
  price: { minPrice: 0, maxPrice: 0 },
  stock: { minStock: 0, maxStock: 0 },
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

  updatePrice = () => {
    if (this.state.price.minPrice && this.state.price.maxPrice) {
      localStorage.setItem("filteredPrice", JSON.stringify(this.state.price));
    }
  };

  updateStock = () => {
    if (this.state.stock.minStock && this.state.stock.maxStock) {
      localStorage.setItem("filteredStock", JSON.stringify(this.state.stock));
    }
  };

  get SortState() {
    return this.state.sortMethod;
  }

  set SortState(method: SortState) {
    this.state.sortMethod.name = method.name;
    this.state.sortMethod.value = method.value;
    if (method) {
      localStorage.setItem(
        "sortMethod",
        JSON.stringify({
          name: this.state.sortMethod.name,
          value: this.state.sortMethod.value,
        })
      );
    }
  }

  get MinPrice() {
    return this.state.price.minPrice;
  }

  set MinPrice(value: number) {
    this.state.price.minPrice = value;
  }

  get MaxPrice() {
    return this.state.price.maxPrice;
  }

  set MaxPrice(value: number) {
    this.state.price.maxPrice = value;
  }

  get MinStock() {
    return this.state.stock.minStock;
  }

  set MinStock(value: number) {
    this.state.stock.minStock = value;
  }

  get MaxStock() {
    return this.state.stock.maxStock;
  }

  set MaxStock(value: number) {
    this.state.stock.maxStock = value;
  }

  get StateBrands() {
    return this.state.stateBrands;
  }

  set StateBrands(brands: ProductBrands[]) {
    this.state.stateBrands = brands;
    localStorage.setItem("stateBrands", JSON.stringify(this.state.stateBrands));
  }

  get StateCategories() {
    return this.state.stateCategories;
  }

  set StateCategories(categories: ProductCategories[]) {
    this.state.stateCategories = categories;
    localStorage.setItem(
      "stateCategories",
      JSON.stringify(this.state.stateCategories)
    );
  }

  get StateSearch() {
    return this.state.filterSearch;
  }

  set StateSearch(value: string) {
    this.state.filterSearch = value;
    if (this.state.filterSearch.length) {
      localStorage.setItem("filteredSearch", this.state.filterSearch);
    } else {
      localStorage.removeItem("filteredSearch");
    }
  }

  get Products() {
    return this.state.products;
  }

  get Loaded() {
    return this.loaded;
  }

  set Loaded(state: boolean) {
    this.loaded = state;
  }

  get CartProducts() {
    return this.state.cart;
  }

  get FilterProducts() {
    return this.state.filterProducts;
  }

  set FilterProducts(products: ProductData[]) {
    this.state.filterProducts = products;
    if (this.state.filterProducts.length) {
      localStorage.setItem(
        "filteredProducts",
        JSON.stringify(this.state.filterProducts)
      );
    } else {
      localStorage.removeItem("filteredProducts");
    }
  }

  get FiltersBrands() {
    return this.state.filterBrands;
  }

  set FiltersBrands(brands: string[]) {
    this.state.filterBrands = brands;
    if (this.state.filterBrands.length) {
      localStorage.setItem(
        "filtersBrands",
        JSON.stringify(this.state.filterBrands)
      );
    } else {
      localStorage.removeItem("filtersBrands");
    }
  }

  get FiltersCategories() {
    return this.state.filterCategories;
  }

  set FiltersCategories(categories: string[]) {
    this.state.filterCategories = categories;
    if (this.state.filterCategories.length) {
      localStorage.setItem(
        "filtersCategories",
        JSON.stringify(this.state.filterCategories)
      );
    } else {
      localStorage.removeItem("filtersCategories");
    }
  }
}

export const store = new Store();
