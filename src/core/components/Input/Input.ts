import Component from "../../templates/Component";

class Input extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  render = () => {
    return this.container as HTMLInputElement;
  };
}

export default Input;
