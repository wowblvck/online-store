//Uploading images for main content
//Загрузка изображений для основного контента

/* Example: 
import smartphone from "./images/smartphone.png";

const images: ImagesData = {
  "smartphone": {
    name: "Smartphone Image",
    src: smartphone,
  },
};

Usage: images["smartphone"].src
*/

import cartLogo from "../../../assets/icons/cart-logo.svg";
import cartMain from "../../../assets/icons/cart-home.png";
import laptop from "../../../assets/images/laptop.png";
import error404 from "../../../assets/images/error404.png";

//Multimedia Icons
import camera from "../../../assets/icons/multimedia/camera.svg";
import laptopM from "../../../assets/icons/multimedia/laptop.svg";
import modem from "../../../assets/icons/multimedia/modem.svg";
import tablet from "../../../assets/icons/multimedia/tablet.svg";
import tv from "../../../assets/icons/multimedia/tv.svg";

// icons

import arrow_right from "../../../assets/icons/arrow_right.png";
import arrow_left from "../../../assets/icons/arrow_left.png";

import { ImagesData, MultimediaData, IconsData } from "../../interfaces/Images";

const images: ImagesData = {
  "cart-logo": {
    name: "Cart Logo Icon",
    src: cartLogo,
  },
  "cart-home": {
    name: "Cart Icon",
    src: cartMain,
  },
  "laptop-home": {
    name: "Laptop Image",
    src: laptop,
  },
  "error404-page": {
    name: "Error 404 Image",
    src: error404,
  },
};

const multimedia: Array<MultimediaData> = [
  {
    name: "Camera Icon",
    src: camera,
  },
  {
    name: "Laptop Icon",
    src: laptopM,
  },
  {
    name: "Modem Icon",
    src: modem,
  },
  {
    name: "Tablet Icon",
    src: tablet,
  },
  {
    name: "TV Icon",
    src: tv,
  },
];

const icons: Array<IconsData> = [
  {
    name: "Arrow left",
    src: arrow_left,
  },
  {
    name: "Arrow right",
    src: arrow_right,
  },
];

export { images, multimedia, icons };
