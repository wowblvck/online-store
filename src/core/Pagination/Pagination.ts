export const sortProducts = () => {
  const productsInCart = document.querySelectorAll(".cart__products-item");
  productsInCart.forEach((el) => el.removeAttribute("id"));
  for (let i = 0; i < productsInCart.length; i++) {
    productsInCart[i].removeAttribute("style");
  }
  const input = document.querySelector(
    ".cart__limit-input"
  ) as HTMLInputElement;
  const inputVal = Number(input.value);
  if (inputVal.toString.length < 4 && inputVal != 0) {
    const btns = document.querySelectorAll(".cart__pages-arrow");
    btns.forEach((el) => el.removeAttribute("style"));
    const currentPage = document.querySelector(
      ".pages__current"
    ) as HTMLSpanElement;
    currentPage.textContent = "1";

    if (inputVal > 0) {
      const commonPages = document.querySelector(
        ".pages__common"
      ) as HTMLSpanElement;
      if (
        Math.trunc(productsInCart.length / inputVal) ==
        productsInCart.length / inputVal
      ) {
        commonPages.textContent = `${Math.trunc(
          productsInCart.length / inputVal
        )}`;
      } else {
        commonPages.textContent = `${
          Math.trunc(productsInCart.length / inputVal) + 1
        }`;
      }
      for (let i = 0; i < productsInCart.length; i++) {
        for (let y = 1; y <= Number(commonPages.textContent); y++) {
          for (let j = inputVal * y; j < inputVal * y + inputVal; j++) {
            if (productsInCart[j - inputVal]) {
              productsInCart[j - inputVal].setAttribute("id", `page-id-${y}`);
            }
          }
        }
      }
      for (let i = 0; i < productsInCart.length; i++) {
        if (
          productsInCart[i].getAttribute("id") !=
          `page-id-${currentPage.textContent}`
        ) {
          productsInCart[i].setAttribute("style", "display: none");
        }
      }
    }
  } else if (inputVal == 0) {
    const commonPages = document.querySelector(
      ".pages__common"
    ) as HTMLSpanElement;
    commonPages.textContent = "1";
    const currentPage = document.querySelector(
      ".pages__current"
    ) as HTMLSpanElement;
    currentPage.textContent = "1";
    const btns = document.querySelectorAll(".cart__pages-arrow");
    btns.forEach((el) => el.setAttribute("style", "pointer-events: none"));
  }
};

export const goNextPage = () => {
  const productsInCart = document.querySelectorAll(".cart__products-item");
  const commonPages = document.querySelector(
    ".pages__common"
  ) as HTMLSpanElement;
  const currentPage = document.querySelector(
    ".pages__current"
  ) as HTMLSpanElement;
  if (Number(currentPage.textContent) < Number(commonPages.textContent)) {
    currentPage.textContent = (Number(currentPage.textContent) + 1).toString();
  }
  for (let i = 0; i < productsInCart.length; i++) {
    if (
      productsInCart[i].getAttribute("id") ==
      `page-id-${currentPage.textContent}`
    ) {
      productsInCart[i].removeAttribute("style");
    } else {
      productsInCart[i].setAttribute("style", "display: none");
    }
  }
};

export const goPrevPage = () => {
  const productsInCart = document.querySelectorAll(".cart__products-item");
  const currentPage = document.querySelector(
    ".pages__current"
  ) as HTMLSpanElement;

  if (Number(currentPage.textContent) != 1) {
    currentPage.textContent = (Number(currentPage.textContent) - 1).toString();
  }

  for (let i = 0; i < productsInCart.length; i++) {
    if (
      productsInCart[i].getAttribute("id") ==
      `page-id-${currentPage.textContent}`
    ) {
      productsInCart[i].removeAttribute("style");
    } else {
      productsInCart[i].setAttribute("style", "display: none");
    }
  }
};
