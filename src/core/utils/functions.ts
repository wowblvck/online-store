//Function: creates an element and assigns classes
//Функция: создает элемент и присвает классы
//Example: createElementWithClass("div", "nav", "container__nav")

import { ImageMap } from "../interfaces/Images";

const createElementWithClass = (elemName: string, ...args: string[]) => {
  const node = document.createElement(elemName);
  node.classList.add(...args);
  return node;
};

function importAll(r: __WebpackModuleApi.RequireContext): ImageMap {
  const images: ImageMap = {};
  r.keys().forEach((item: string) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export { createElementWithClass, importAll };
