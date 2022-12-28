abstract class Page {
  protected container: HTMLElement;
  static TextObject = {};

  constructor(id: string) {
    this.container = document.createElement("main");
    // this.container.id = id;
    this.container.className = id;
  }

  protected updateTitle(text: string) {
    document.title = text;
    return document.title;
  }

  protected updateDescription(text: string) {
    return document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", text);
  }

  render() {
    return this.container;
  }
}

export default Page;
