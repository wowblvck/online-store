import { BehaviorSubject } from "rxjs";
import { State } from "../interfaces/State";

const DEFAULT_STATE: State = {
  products: [],
  cart: {
    products: {},
  },
};

class Store {
  static isExits = false;
  static instance: Store;

  private state = DEFAULT_STATE;
  public $state = new BehaviorSubject<State>(this.state);

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
}

export const store = new Store();
