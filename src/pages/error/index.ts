import Page from "../../core/templates/page";
import Error from "./error";

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
    const error = new Error("section", "error", "main");
    this.container.append(error.render());
    return this.container;
  }
}
