import { createElementWithClass } from "../../utils/functions";
import { images } from "../../data/images/images";

export const createModal = () => {
  const modalWrapper = createElementWithClass(
    "div",
    "modal__wrapper"
  ) as HTMLDivElement;

  const bg = createElementWithClass("div", "modal__bg") as HTMLDivElement;
  bg.addEventListener("click", () => {
    modalWrapper.style.display = "none";
  });

  const modalForm = createElementWithClass(
    "form",
    "modal__form"
  ) as HTMLFormElement;

  const modalTitle = createElementWithClass(
    "h2",
    "modal-window__title"
  ) as HTMLTitleElement;
  modalTitle.textContent = "Personal details";

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
        } else {
          modalNameErr.style.opacity = "1";
          modalNameErr.style.visibility = "visible";
          modalName.style.border = "1px solid red";
        }
      }
    } else {
      modalNameErr.style.opacity = "1";
      modalNameErr.style.visibility = "visible";
      modalName.style.border = "1px solid red";
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
    } else {
      modalPhoneErr.style.opacity = "1";
      modalPhoneErr.style.visibility = "visible";
      modalPhone.style.border = "1px solid red";
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
        } else {
          modalAddressErr.style.opacity = "1";
          modalAddressErr.style.visibility = "visible";
          modalAddress.style.border = "1px solid red";
        }
      }
    } else {
      modalAddressErr.style.opacity = "1";
      modalAddressErr.style.visibility = "visible";
      modalAddress.style.border = "1px solid red";
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
        } else if (val[0].length < 5) {
          modalEmailErr.style.opacity = "1";
          modalEmailErr.style.visibility = "visible";
          modalEmail.style.border = "1px solid red";
        }
      }
    } else {
      modalEmailErr.style.opacity = "1";
      modalEmailErr.style.visibility = "visible";
      modalEmail.style.border = "1px solid red";
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
    } else {
      cardNumberError.style.opacity = "1";
      cardNumberError.style.visibility = "visible";
      cardNumberInput.style.border = "1px solid red";
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

  creditCardNumberContainer.append(cardLogo, cardNumberInput, cardNumberError);

  const cardDateCvvContainer = createElementWithClass(
    "div",
    "modal__credit-card-date-cvv"
  ) as HTMLDivElement;

  const cardDateInput = createElementWithClass(
    "input",
    "modal__credit-card-date"
  ) as HTMLInputElement;
  cardDateInput.placeholder = "Valid Thru";

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

  const buttonConfirm = createElementWithClass(
    "button",
    "modal__button-confirm"
  ) as HTMLButtonElement;
  buttonConfirm.textContent = "CONFIRM";

  modalForm.append(
    modalTitle,
    modalName,
    modalNameErr,
    modalPhoneWrapper,
    modalPhoneErr,
    modalAddress,
    modalAddressErr,
    modalEmail,
    modalEmailErr,
    modalTitleBankCard,
    creditCardWrappper,
    buttonConfirm
  );
  modalWrapper.append(bg, modalForm);
  return modalWrapper;
};
