import { ProductData } from "../interfaces/Products";
import { store } from "../store/Store";

class CartModel {
  static isExist = false;
  static instance: CartModel;
  constructor() {
    if (CartModel.isExist) {
      return CartModel.instance;
    }
    CartModel.isExist = true;
    CartModel.instance = this;
  }

  addProduct(product: ProductData): void {
    store.update({
      cart: {
        products: {
          ...store.CartProducts.products,
          [product.id]: {
            amount: (store.CartProducts.products[product.id]?.amount || 0) + 1,
            product,
          },
        },
      },
    });
  }

  removeProduct(product: ProductData): void {
    if (this.checkProduct(product)) {
      const products = { ...store.CartProducts.products };
      const productAmount = products[product.id].amount;
      if (productAmount > 1) {
        products[product.id].amount = productAmount - 1;
      } else {
        delete products[product.id];
      }
      store.update({
        cart: {
          products,
        },
      });
    }
  }

  getTotalAmount = (): number => {
    return Object.values(store.CartProducts.products).reduce(
      (total, item) => total + item.amount,
      0
    );
  };

  getTotalSummary = (): number => {
    return Object.values(store.CartProducts.products).reduce(
      (total, item) => total + item.product.price,
      0
    );
  };

  checkProduct(product: ProductData): boolean {
    return product.id in store.CartProducts.products;
  }
}

export const cartModel = new CartModel();
