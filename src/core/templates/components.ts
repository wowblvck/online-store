export default abstract class Component {
  protected container: HTMLElement;

  constructor(tagName: string, className: string, subClass?: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
    if (subClass) {
      this.container.classList.add(`${subClass}__${this.container.className}`);
    }
  }

  render = () => {
    return this.container;
  };
}
