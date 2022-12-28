export default abstract class Component {
  container: HTMLElement;

  constructor(tagName: string, className: string, ...subClass: string[]) {
    this.container = document.createElement(tagName);
    this.container.className = className;
    this.container.classList.add(...subClass);
  }

  render = () => {
    return this.container;
  };
}
