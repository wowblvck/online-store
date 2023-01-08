import Page from "../../core/templates/Page";
import ErrorSection from "../../core/components/Error/Error";

export default class ErrorPage extends Page {
  private error = new ErrorSection("section", "error", "main__error");

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
    this.container.append(this.error.render());
    return this.container;
  }
}
