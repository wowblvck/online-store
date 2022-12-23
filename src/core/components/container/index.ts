import Component from "../../templates/components";

export default class Container extends Component {
  constructor(tagName: string, className: string, subClass?: string) {
    super(tagName, className, subClass);
  }

  render = () => {
    return this.container;
  };
}
