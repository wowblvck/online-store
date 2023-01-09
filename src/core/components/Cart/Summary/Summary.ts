import { AppComponent } from "../../../interfaces/AppComponent";
import { cartModel } from "../../../models/CartModel";

class Summary implements AppComponent {
  addEvents = () => {
    const sumBtn = document.querySelector(".summary__button");
    sumBtn?.addEventListener("click", () => {
      const modal = document.querySelector(".modal__wrapper") as HTMLDivElement;
      modal.style.display = "flex";
    });
  };

  render = () => {
    return `
      <div class="summary__container">
        <div class="summary__header">
          <h2 class="summary__title">SUMMARY</h2>
        </div>
        <hr class="summary__line">
        <div class="summary__main">
          <p class="summary__products-num">Products: ${cartModel.getTotalAmount()}</p>
          <div class="summary__total-container">
            <p class="summary__total-wrapper">
              <span class="summary__total-subtitle">Total:</span>
              <span class="summary__total">${cartModel.getTotalSummary()}$</span>
            </p>
          </div>
          <div class="summary__discounts">
            <input class="summary__input" placeholder="Enter promo code (Test: 'RS', 'EPM')">
            <div class="summary__discount-item">
              <span class="summary__discount-info">Rolling Scopes School - 10%</span>
              <button class="summary__discount-button">Add</button>
            </div>
            <div class="summary__discount-item">
              <span class="summary__discount-info">EPAM Systems - 10%</span>
              <button class="summary__discount-button">Add</button>
            </div>
          </div>
          <button class="summary__button">BUY NOW</button>
        </div>
      </div>
    `;
  };
}

export { Summary };
