import Component from "../../../templates/Component";
import { createElementWithClass } from "../../../utils/functions";
// import { totalSum } from "../../ProductsList/ProductsList";

export default class Total extends Component {
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
  }

  createTotal = () => {
    const totalSubtitle = createElementWithClass(
      "span",
      "total__subtitle"
    ) as HTMLSpanElement;
    const totalValue = createElementWithClass(
      "span",
      "total__value"
    ) as HTMLSpanElement;
    totalSubtitle.textContent = "Total:";
    totalValue.textContent = "00.0$";
    this.container.append(totalSubtitle, totalValue);
  };

  render = () => {
    this.createTotal();
    return this.container;
  };
}

export const updateTotal = () => {
  const totalVal = document.querySelector(".total__value") as HTMLSpanElement;
  totalVal.textContent = `${localStorage.getItem("total")}.00$`;
  const totalWrapper = document.querySelector(".total") as HTMLDivElement;
  if (totalVal.textContent == "null.00$") {
    totalWrapper.style.opacity = "0";
    totalWrapper.style.visibility = "hidden";
  } else if (totalVal.textContent == "0.00$") {
    totalWrapper.style.opacity = "0";
    totalWrapper.style.visibility = "hidden";
  } else {
    totalWrapper.style.opacity = "1";
    totalWrapper.style.visibility = "visible";
  }
};
