//Function: creates an element and assigns classes
//Функция: создает элемент и присвает классы
//Example: createElementWithClass("div", "nav", "container__nav")

import { ImageMap } from "../interfaces/Images";
import { ProductData } from "../interfaces/Products";

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

function toggleObjects(array: ProductData[], objects: ProductData[]) {
  const toRemove = array.filter((a) => !objects.some((o) => o.id === a.id));
  const toAdd = objects.filter((o) => !array.some((a) => a.id === o.id));
  return array.filter((a) => toRemove.indexOf(a) === -1).concat(toAdd);
}

export { createElementWithClass, importAll, toggleObjects };
