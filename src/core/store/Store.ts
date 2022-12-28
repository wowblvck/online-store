import { BehaviorSubject } from "rxjs";

class Store {
  static isExits = false;
  static instance: Store;

  public $render = new BehaviorSubject(null);

  constructor() {
    if (Store.isExits) {
      return Store.instance;
    }
    Store.isExits = true;
    Store.instance = this;
  }
}

export const store = new Store();
