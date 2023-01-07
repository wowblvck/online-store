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

  const modalNameErr = createElementWithClass(
    "p",
    "modal__name-error"
  ) as HTMLParagraphElement;
  modalNameErr.textContent = "Error";
  modalNameErr.style.margin = "0";
  modalNameErr.style.color = "red";

  const modalPhone = createElementWithClass(
    "input",
    "modal__phone"
  ) as HTMLInputElement;
  modalPhone.placeholder = "Phone number";
  modalPhone.type = "tel";

  const modalPhoneErr = createElementWithClass(
    "p",
    "modal__phone-error"
  ) as HTMLParagraphElement;
  modalPhoneErr.textContent = "Error";
  modalPhoneErr.style.margin = "0";
  modalPhoneErr.style.color = "red";

  const modalAddress = createElementWithClass(
    "input",
    "modal__address"
  ) as HTMLInputElement;
  modalAddress.placeholder = "Delivery address";
  modalAddress.type = "Text";

  const modalAddressErr = createElementWithClass(
    "p",
    "modal__address-error"
  ) as HTMLParagraphElement;
  modalAddressErr.textContent = "Error";
  modalAddressErr.style.margin = "0";
  modalAddressErr.style.color = "red";

  const modalEmail = createElementWithClass(
    "input",
    "modal__email"
  ) as HTMLInputElement;
  modalEmail.placeholder = "E-mail";
  modalEmail.type = "email";

  const modalEmailErr = createElementWithClass(
    "p",
    "modal__email-error"
  ) as HTMLParagraphElement;
  modalEmailErr.textContent = "Error";
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
  cardLogo.src = images["card-logo"].src;

  const cardNumberInput = createElementWithClass(
    "input",
    "modal__credit-card-number"
  ) as HTMLInputElement;
  cardNumberInput.placeholder = "Card number";

  const cardNumberError = createElementWithClass(
    "span",
    "modal__credit-card-error"
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
    "modal__credit-card-date-error"
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
    "modal__credit-card-date-error"
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
    modalPhone,
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
