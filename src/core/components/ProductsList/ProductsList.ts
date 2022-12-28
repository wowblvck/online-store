import ProductItem from "../ProductItem/ProductItem";
import { productModel } from "../../models/ProductsModel";
import ProductData from "../../interfaces/Products";
import { store } from "../../store/Store";

export default class ProductsList {
  private loading = false;
  private error: Error | null = null;
  private products: ProductData[] = [];
  constructor() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    this.loading = true;
    productModel
      .getProducts()
      .then((products: ProductData[]) => {
        this.products = products;
      })
      .catch((error) => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
        store.$render.next(null);
      });
  };

  render = () => {
    return `
      ${
        this.loading
          ? `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
          : ""
      }
      ${this.error ? `${this.error.message}` : ""}
      ${this.products
        .map((product: ProductData) => new ProductItem(product))
        .map((el: ProductItem) => el.render().outerHTML)
        .join("")}
    `;
  };
}
