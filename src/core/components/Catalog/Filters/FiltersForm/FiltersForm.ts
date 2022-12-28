import Component from "../../../../templates/Component";

class FiltersForm extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  render = () => {
    return this.container;
  };
}

export default FiltersForm;
