import Page from "../../core/templates/page";
import Welcome from "./welcome";

class MainPage extends Page {
  static TextObject = {
    Title: "Home | Online Store",
    Description: "Home page Online Store",
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    this.updateTitle(MainPage.TextObject.Title);
    this.updateDescription(MainPage.TextObject.Description);
    const welcome = new Welcome("section", "welcome", "main");
    this.container.append(welcome.render());
    return this.container;
  }
}

export default MainPage;
