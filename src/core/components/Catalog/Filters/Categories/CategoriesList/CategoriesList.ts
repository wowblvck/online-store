import { AppComponent } from "../../../../../interfaces/AppComponent";
import { ProductCategories } from "../../../../../interfaces/Products";
import { store } from "../../../../../store/Store";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

class CategoriesList implements AppComponent {
  private loading = !store.Loaded ? true : false;
  private error: Error | null = null;
  private static categories: ProductCategories[] = [];
  private static categoriesComponents: CategoriesItem[] = [];

  constructor() {
    if (!store.Loaded) {
      store.$state.subscribe(({ stateCategories }) => {
        if (stateCategories.length && this.loading === true) {
          this.loading = false;
          this.error = null;
          CategoriesList.categories = stateCategories;
          CategoriesList.categoriesComponents = CategoriesList.categories
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(
              (category) =>
                new CategoriesItem(
                  category.name,
                  category.state,
                  category.amount,
                  category.stock
                )
            );
        }
      });
    } else {
      CategoriesList.categories = store.StateCategories;
      CategoriesList.categoriesComponents = CategoriesList.categories
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(
          (category) =>
            new CategoriesItem(
              category.name,
              category.state,
              category.amount,
              category.stock
            )
        );
    }
  }

  addEvents() {
    CategoriesList.categoriesComponents.forEach((category) => {
      category.addEvents();
    });
  }

  render = () => {
    return `
      ${
        this.loading
          ? `<div class="lds-ring lds-ring_view_small"><div></div><div></div><div></div><div></div></div>`
          : ""
      }
      ${this.error ? `${this.error.message}` : ""}
      ${CategoriesList.categoriesComponents
        .map((category) => {
          return category.render();
        })
        .join("")}
    `;
  };
}

export default CategoriesList;
