import { createElementWithClass } from "../../../utils/functions";
import { images } from "../../../data/images/images";
import { PageIds } from "../../../interfaces/Page";
import { cartArray } from "../../ProductsList/ProductsList";
import Component from "../../../templates/Component";
import Container from "../../Container/Container";
import { updateTotal } from "../../Header/Total/Total";

class Modal extends Component {
  private subContainer: Container;
  constructor(tagName: string, className: string, ...subClass: string[]) {
    super(tagName, className, ...subClass);
    this.subContainer = new Container("form", "modal__form");
  }

  private createBackground = () => {
    const bg = createElementWithClass("div", "modal__bg") as HTMLDivElement;
    bg.addEventListener("click", () => {
      this.container.style.opacity = "0";
      this.container.style.visibility = "hidden";
    });
    this.container.append(bg);
  };

  createTitle = () => {
    const modalTitle = createElementWithClass(
      "h2",
      "modal-window__title"
    ) as HTMLTitleElement;
    modalTitle.textContent = "Personal details";
    this.subContainer.render().append(modalTitle);
    this.container.append(this.subContainer.render());
  };

  private createName = () => {
    const modalName = createElementWithClass(
      "input",
      "modal__name"
    ) as HTMLInputElement;
    modalName.placeholder = "Name";
    modalName.type = "text";
    modalName.addEventListener("input", () => {
      const val = modalName.value.split(" ");
      if (val.length == 2) {
        for (let i = 0; i < val.length; i++) {
          if (val[i].length >= 3) {
            modalNameErr.style.opacity = "0";
            modalNameErr.style.visibility = "hidden";
            modalName.style.border = "1px solid gray";
            modalNameErr.removeAttribute("id");
            modalNameErr.setAttribute("id", "success");
          } else {
            modalNameErr.style.opacity = "1";
            modalNameErr.style.visibility = "visible";
            modalName.style.border = "1px solid red";
            modalNameErr.removeAttribute("id");
            modalNameErr.setAttribute("id", "error");
          }
        }
      } else {
        modalNameErr.style.opacity = "1";
        modalNameErr.style.visibility = "visible";
        modalName.style.border = "1px solid red";
        modalNameErr.removeAttribute("id");
        modalNameErr.setAttribute("id", "error");
      }
    });

    const modalNameErr = createElementWithClass(
      "p",
      "modal__name-error",
      "error"
    ) as HTMLParagraphElement;
    modalNameErr.textContent = "Error: enter first and last name";
    modalNameErr.style.margin = "0";
    modalNameErr.style.color = "red";

    this.subContainer.render().append(modalName, modalNameErr);
    this.container.append(this.subContainer.render());
  };

  private createPhone = () => {
    const modalPhoneWrapper = createElementWithClass(
      "div",
      "modal__phone-wrapper"
    ) as HTMLDivElement;

    const modalPhone = createElementWithClass(
      "input",
      "modal__phone"
    ) as HTMLInputElement;
    modalPhone.setAttribute("id", "phone");
    const modalPhoneLabel = createElementWithClass(
      "label",
      "modal__phone-label"
    ) as HTMLLabelElement;
    modalPhoneLabel.setAttribute("for", "phone");
    modalPhoneLabel.textContent = "+";
    modalPhoneWrapper.append(modalPhone, modalPhoneLabel);
    modalPhone.placeholder = "Phone number";
    modalPhone.type = "number";

    modalPhone.addEventListener("input", () => {
      const val = modalPhone.value;
      if (val.length >= 10) {
        modalPhoneErr.style.opacity = "0";
        modalPhoneErr.style.visibility = "hidden";
        modalPhone.style.border = "1px solid gray";
        modalPhoneErr.removeAttribute("id");
        modalPhoneErr.setAttribute("id", "success");
      } else {
        modalPhoneErr.style.opacity = "1";
        modalPhoneErr.style.visibility = "visible";
        modalPhone.style.border = "1px solid red";
        modalPhoneErr.removeAttribute("id");
        modalPhoneErr.setAttribute("id", "error");
      }
    });

    const modalPhoneErr = createElementWithClass(
      "p",
      "modal__phone-error",
      "error"
    ) as HTMLParagraphElement;
    modalPhoneErr.textContent = "Error: should include at least 9 numbers";
    modalPhoneErr.style.margin = "0";
    modalPhoneErr.style.color = "red";

    this.subContainer.render().append(modalPhoneWrapper, modalPhoneErr);
    this.container.append(this.subContainer.render());
  };

  private createAddress = () => {
    const modalAddress = createElementWithClass(
      "input",
      "modal__address"
    ) as HTMLInputElement;
    modalAddress.placeholder = "Delivery address";
    modalAddress.type = "Text";
    modalAddress.addEventListener("input", () => {
      const val = modalAddress.value.split(" ");
      if (val.length >= 3) {
        for (let i = 0; i < val.length; i++) {
          if (val[i].length >= 5) {
            modalAddressErr.style.opacity = "0";
            modalAddressErr.style.visibility = "hidden";
            modalAddress.style.border = "1px solid gray";
            modalAddressErr.removeAttribute("id");
            modalAddressErr.setAttribute("id", "success");
          } else {
            modalAddressErr.style.opacity = "1";
            modalAddressErr.style.visibility = "visible";
            modalAddress.style.border = "1px solid red";
            modalAddressErr.removeAttribute("id");
            modalAddressErr.setAttribute("id", "error");
          }
        }
      } else {
        modalAddressErr.style.opacity = "1";
        modalAddressErr.style.visibility = "visible";
        modalAddress.style.border = "1px solid red";
        modalAddressErr.removeAttribute("id");
        modalAddressErr.setAttribute("id", "error");
      }
    });

    const modalAddressErr = createElementWithClass(
      "p",
      "modal__address-error",
      "error"
    ) as HTMLParagraphElement;
    modalAddressErr.textContent = "Error: should contain correct address";
    modalAddressErr.style.margin = "0";
    modalAddressErr.style.color = "red";

    this.subContainer.render().append(modalAddress, modalAddressErr);
    this.container.append(this.subContainer.render());
  };

  private createEmail = () => {
    const modalEmail = createElementWithClass(
      "input",
      "modal__email"
    ) as HTMLInputElement;
    modalEmail.placeholder = "E-mail";
    modalEmail.type = "email";
    modalEmail.addEventListener("input", () => {
      const val = modalEmail.value.split(" ");
      if (val.length == 1) {
        for (let i = 0; i < val[0].length; i++) {
          if (val[0][i].includes("@") && val[0].length >= 5) {
            modalEmailErr.style.opacity = "0";
            modalEmailErr.style.visibility = "hidden";
            modalEmail.style.border = "1px solid gray";
            modalEmailErr.removeAttribute("id");
            modalEmailErr.setAttribute("id", "success");
          } else if (val[0].length < 5) {
            modalEmailErr.style.opacity = "1";
            modalEmailErr.style.visibility = "visible";
            modalEmail.style.border = "1px solid red";
            modalEmailErr.removeAttribute("id");
            modalEmailErr.setAttribute("id", "error");
          }
        }
      } else {
        modalEmailErr.style.opacity = "1";
        modalEmailErr.style.visibility = "visible";
        modalEmail.style.border = "1px solid red";
        modalEmailErr.removeAttribute("id");
        modalEmailErr.setAttribute("id", "error");
      }
    });

    const modalEmailErr = createElementWithClass(
      "p",
      "modal__email-error",
      "error"
    ) as HTMLParagraphElement;
    modalEmailErr.textContent = "Error: should contain correct email";
    modalEmailErr.style.margin = "0";
    modalEmailErr.style.color = "red";

    this.subContainer.render().append(modalEmail, modalEmailErr);
    this.container.append(this.subContainer.render());
  };

  private createCard = () => {
    const modalTitleBankCard = createElementWithClass(
      "h2",
      "modal-window__title"
    ) as HTMLTitleElement;
    modalTitleBankCard.textContent = "Credit card";

    const creditCardWrappper = createElementWithClass(
      "div",
      "modal__credit-card-wrapper"
    ) as HTMLDivElement;

    const creditCardNumberContainer = createElementWithClass(
      "div",
      "modal__credit-card-number-container"
    );
    const cardLogo = createElementWithClass(
      "img",
      "modal__credit-card-number-logo"
    ) as HTMLImageElement;
    cardLogo.setAttribute("src", `${images["card-logo"].src}`);

    const cardNumberInput = createElementWithClass(
      "input",
      "modal__credit-card-number"
    ) as HTMLInputElement;
    cardNumberInput.placeholder = "Card number";
    cardNumberInput.type = "number";
    cardNumberInput.addEventListener("input", () => {
      const val = cardNumberInput.value;
      if (val[0] == "4") {
        cardLogo.removeAttribute("src");
        cardLogo.setAttribute("src", `${images["visa-card"].src}`);
      } else if (val[0] == "5") {
        cardLogo.removeAttribute("src");
        cardLogo.setAttribute("src", `${images["master-card"].src}`);
      } else if (val[0] == "6") {
        cardLogo.removeAttribute("src");
        cardLogo.setAttribute("src", `${images["american-express"].src}`);
      } else {
        cardLogo.removeAttribute("src");
        cardLogo.setAttribute("src", `${images["card-logo"].src}`);
      }
      if (val.length == 16) {
        cardNumberError.style.opacity = "0";
        cardNumberError.style.visibility = "hidden";
        cardNumberInput.style.border = "1px solid gray";
        cardNumberError.removeAttribute("id");
        cardNumberError.setAttribute("id", "success");
      } else {
        cardNumberError.style.opacity = "1";
        cardNumberError.style.visibility = "visible";
        cardNumberInput.style.border = "1px solid red";
        cardNumberError.removeAttribute("id");
        cardNumberError.setAttribute("id", "error");
      }
    });

    const cardNumberError = createElementWithClass(
      "span",
      "modal__credit-card-error",
      "error"
    ) as HTMLSpanElement;
    cardNumberError.textContent = "Error";
    cardNumberError.style.margin = "0";
    cardNumberError.style.color = "red";

    creditCardNumberContainer.append(
      cardLogo,
      cardNumberInput,
      cardNumberError
    );

    const cardDateCvvContainer = createElementWithClass(
      "div",
      "modal__credit-card-date-cvv"
    ) as HTMLDivElement;

    const cardDateInput = createElementWithClass(
      "input",
      "modal__credit-card-date"
    ) as HTMLInputElement;
    cardDateInput.placeholder = "Valid Thru";
    cardDateInput.maxLength = 5;
    cardDateInput.addEventListener("input", () => {
      const val = cardDateInput.value;
      if (val.length == 2) {
        cardDateInput.value = `${val}/`;
      }
      if (val.length == 3) {
        cardDateInput.value = `${val[0] + val[1]}`;
      }
      if (Number(val[0] + val[1]) > 12) {
        cardDateInputError.style.opacity = "1";
        cardDateInputError.style.visibility = "visible";
        cardDateInput.style.border = "1px solid red";
        cardDateInputError.removeAttribute("id");
        cardDateInputError.setAttribute("id", "success");
      } else if (val.length < 5) {
        cardDateInputError.style.opacity = "1";
        cardDateInputError.style.visibility = "visible";
        cardDateInput.style.border = "1px solid red";
        cardDateInputError.removeAttribute("id");
        cardDateInputError.setAttribute("id", "error");
      } else {
        cardDateInputError.style.opacity = "0";
        cardDateInputError.style.visibility = "hidden";
        cardDateInput.style.border = "1px solid gray";
        cardDateInputError.removeAttribute("id");
        cardDateInputError.setAttribute("id", "success");
      }
      for (let i = 0; i < val.length; i++) {
        if (val[i].match(/[a-z]/i)) {
          cardDateInputError.style.opacity = "1";
          cardDateInputError.style.visibility = "visible";
          cardDateInput.style.border = "1px solid red";
          cardDateInputError.removeAttribute("id");
          cardDateInputError.setAttribute("id", "error");
        }
      }
    });

    const cardDateInputError = createElementWithClass(
      "span",
      "modal__credit-card-date-error",
      "error"
    ) as HTMLSpanElement;
    cardDateInputError.textContent = "Error";
    cardDateInputError.style.color = "red";

    const cardCvvInput = createElementWithClass(
      "input",
      "modal__credit-card-cvv"
    ) as HTMLInputElement;
    cardCvvInput.placeholder = "CVV";
    cardCvvInput.type = "number";
    cardCvvInput.addEventListener("input", () => {
      const val = cardCvvInput.value;
      if (val.length != 3) {
        cardCvvInputError.style.opacity = "1";
        cardCvvInputError.style.visibility = "visible";
        cardCvvInput.style.border = "1px solid red";
        cardCvvInputError.removeAttribute("id");
        cardCvvInputError.setAttribute("id", "error");
      } else {
        cardCvvInputError.style.opacity = "0";
        cardCvvInputError.style.visibility = "hidden";
        cardCvvInput.style.border = "1px solid gray";
        cardCvvInputError.removeAttribute("id");
        cardCvvInputError.setAttribute("id", "success");
      }
    });

    const cardCvvInputError = createElementWithClass(
      "span",
      "modal__credit-card-date-error",
      "error"
    ) as HTMLSpanElement;
    cardCvvInputError.textContent = "Error";
    cardCvvInputError.style.color = "red";

    cardDateCvvContainer.append(
      cardDateInput,
      cardDateInputError,
      cardCvvInput,
      cardCvvInputError
    );
    creditCardWrappper.append(creditCardNumberContainer, cardDateCvvContainer);

    this.subContainer.render().append(modalTitleBankCard, creditCardWrappper);
    this.container.append(this.subContainer.render());
  };

  private createButtons = () => {
    const modalCommonErr = createElementWithClass(
      "p",
      "modal__common-error",
      "error"
    ) as HTMLParagraphElement;
    modalCommonErr.textContent = "Error: all fields must be filled";
    modalCommonErr.style.margin = "0";
    modalCommonErr.style.color = "red";

    const buttonConfirm = createElementWithClass(
      "div",
      "modal__button-confirm"
    ) as HTMLButtonElement;
    buttonConfirm.textContent = "CONFIRM";
    buttonConfirm.addEventListener("click", () => {
      const errors = document.querySelectorAll(".error");
      let counter = 0;
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].getAttribute("id") == "success") {
          counter++;
        }
      }
      if (counter == 7) {
        modalCommonErr.style.opacity = "0";
        modalCommonErr.style.visibility = "hidden";
        popupBg.style.opacity = "1";
        popupBg.style.visibility = "visible";
        popup.style.opacity = "1";
        popup.style.visibility = "visible";
        for (let i = 0; i < 200; i++) {
          cartArray.pop();
        }
        for (let i = 0; i < 20; i++) {
          localStorage.setItem(`add-buttons-value${i}`, "Add to cart");
        }
        localStorage.setItem("total", "0");
        updateTotal();
        const productCounter = document.querySelector(
          ".products-count"
        ) as HTMLParagraphElement;
        localStorage.setItem("product-in-cart", "0");
        productCounter.textContent = `${localStorage.getItem(
          "product-in-cart"
        )}`;
        setTimeout(() => {
          location.href = `#${PageIds.MainPage}`;
        }, 3000);
      } else {
        modalCommonErr.style.opacity = "1";
        modalCommonErr.style.visibility = "visible";
        setTimeout(() => {
          modalCommonErr.style.opacity = "0";
          modalCommonErr.style.visibility = "hidden";
        }, 2000);
      }
    });

    const popupBg = createElementWithClass(
      "div",
      "modal__popup-bg"
    ) as HTMLDivElement;
    const popup = createElementWithClass(
      "div",
      "modal__popup"
    ) as HTMLDivElement;
    const successLogo = createElementWithClass(
      "img",
      "modal__popup-logo"
    ) as HTMLImageElement;
    successLogo.setAttribute("src", `${images["success-logo"].src}`);
    const successText = createElementWithClass(
      "p",
      "modal__popup-text"
    ) as HTMLParagraphElement;
    successText.textContent = "Payment accepted";

    popup.append(successLogo, successText);

    this.subContainer.render().append(modalCommonErr, buttonConfirm);
    this.container.append(popupBg, popup);
  };

  addEvents = () => {
    const bg = document.querySelector(".modal__bg") as HTMLDivElement;
    bg.addEventListener("click", () => {
      const modal = document.querySelector(".modal__wrapper") as HTMLDivElement;
      modal.style.display = "none";
    });
  };

  render = () => {
    this.createBackground();
    this.createTitle();
    this.createName();
    this.createPhone();
    this.createAddress();
    this.createEmail();
    this.createCard();
    this.createButtons();
    return this.container;
  };
}

export { Modal };
