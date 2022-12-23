//Function: creates an element and assigns classes
//Функция: создает элемент и присвает классы
//Example: createElementWithClass("div", "nav", "container__nav")
const createElementWithClass = (elemName: string, ...args: string[]) => {
  const node = document.createElement(elemName);
  node.classList.add(...args);
  return node;
};

export { createElementWithClass };
