import Component from "../../templates/Component";

export default class Container extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  render = () => {
    return this.container;
  };
}
