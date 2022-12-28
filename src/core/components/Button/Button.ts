import Component from "../../templates/Component";

class Button extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  render = () => {
    return this.container;
  };
}

export default Button;
