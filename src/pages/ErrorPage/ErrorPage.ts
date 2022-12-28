import Page from "../../core/templates/Page";
import Error from "../../core/components/Error/Error";

export default class ErrorPage extends Page {
  static TextObject = {
    Title: "Oops! 404",
    Description: "Page error: 404",
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    this.updateTitle(ErrorPage.TextObject.Title);
    this.updateDescription(ErrorPage.TextObject.Description);
    const error = new Error("section", "error", "main__error");
    this.container.append(error.render());
    return this.container;
  }
}
