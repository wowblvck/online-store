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
      store.$state.subscribe(({ categories }) => {
        if (categories.length && this.loading === true) {
          this.loading = false;
          this.error = null;
          CategoriesList.categories = categories;
          CategoriesList.categoriesComponents = CategoriesList.categories.map(
            (category) => new CategoriesItem(category.name, category.state)
          );
        }
      });
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
      ${CategoriesList.categoriesComponents
        .map((category) => {
          return category.render();
        })
        .join("")}
    `;
  };
}

export default CategoriesList;
