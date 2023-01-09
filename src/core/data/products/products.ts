import { ProductData } from "../../interfaces/Products";

import { ImageMap } from "../../interfaces/Images";
import { importAll } from "../../utils/functions";

const images: ImageMap = importAll(require.context("./images", true, /\.jpg/));

export const productsInfo: ProductData[] = [
  {
    id: 0,
    title: "iPhone 11",
    category: "smartphone",
    description:
      "Nothing extra. Only the most. The dual camera system will not leave any of your friends behind the scenes. iPhone fast processor and powerful battery let you get more done and spend less time recharging. And the highest video quality on iPhone means your stories are even more vivid and detailed.",
    price: 670,
    stock: 15,
    brand: "Apple",
    images: [images["1/1.jpg"], images["1/2.jpg"]],
  },
  {
    id: 1,
    title: "iPhone 12",
    category: "smartphone",
    description:
      "It's an iPhone 12. Gorgeous, vibrant 6.1-inch Super Retina XDR display. Ceramic Shield front panel, with which the risk of damage to the display if dropped 4 times lower. Stunning low-light performance with Night Mode on all cameras. Filming, editing and playback of cinematic quality video in the Dolby Vision standard. Powerful A14 Bionic processor. And MagSafe accessories that attach instantly and provide faster wireless charging. In other words, bright discoveries await you.",
    price: 830,
    stock: 11,
    brand: "Apple",
    images: [images["2/1.jpg"], images["2/2.jpg"]],
  },
  {
    id: 2,
    title: "iPhone 13",
    category: "smartphone",
    description:
      "iPhone 13. The most advanced dual camera system on iPhone. The Cinema Effect mode turns the video into a real movie. Super fast A15 Bionic chip. Tireless battery. Rugged housing. And an even brighter Super Retina XDR display.",
    price: 1020,
    stock: 19,
    brand: "Apple",
    images: [images["3/1.jpg"], images["3/2.jpg"]],
  },
  {
    id: 3,
    title: "HUAWEI nova Y70",
    category: "smartphone",
    description:
      "The HUAWEI nova Y70 smartphone is equipped with a large 6.75-inch display. At the top of this panel there is a small cutout for the front 8-megapixel camera. On the back, there is a triple camera setup with a 48-megapixel main sensor, a 5-megapixel wide-angle lens, and a 2-megapixel sensor for depth information. A feature of the model is a powerful rechargeable battery with a capacity of 6000 mAh with support for 22.5-watt charging.",
    price: 200,
    stock: 18,
    brand: "HUAWEI",
    images: [images["4/1.jpg"], images["4/2.jpg"]],
  },
  {
    id: 4,
    title: "HUAWEI nova 9 SE",
    category: "smartphone",
    description:
      "Based on the Snapdragon 680 SoC, Huawei Nova 9 SE features a 6.78-inch IPS LCD with a hole in the center top. The screen has Full HD+ resolution (1080 x 2388 pixels), 90Hz refresh rate and 240Hz touch sampling rate. On the front of the Nova 9 SE is a 16-megapixel camera. The rear panel has a 108MP main camera, which is paired with an 8MP ultra-wide-angle module, a 2MP depth sensor, and a 2MP macro camera.",
    price: 330,
    stock: 21,
    brand: "HUAWEI",
    images: [images["5/1.jpg"], images["5/2.jpg"]],
  },
  {
    id: 5,
    title: "Samsung Galaxy A73",
    category: "smartphone",
    description:
      'Powered by the Snapdragon 778G 5G processor, the Samsung Galaxy A73 expands your multimedia experience with top-notch gaming, professional shooting, and advanced AI technology for enhanced performance. The RAM Plus feature provides additional virtual RAM. The FHD+ Super AMOLED Plus display is mesmerizing. With a wide 6.7" Infinity-O display and a 108MP ultra-wide-angle camera, shots are astonishingly realistic',
    price: 560,
    stock: 24,
    brand: "Samsung",
    images: [images["6/1.jpg"], images["6/2.jpg"]],
  },
  {
    id: 6,
    title: "Samsung Galaxy Z Flip3",
    category: "smartphone",
    description:
      "The Samsung Galaxy Z Flip3 smartphone is a full-sized smartphone, the diagonal of which is only 4.2 inches when folded. It can easily fit even in a small pocket. With an external 1.9-inch screen, you can check messages, take photos, play music and more without opening your phone. When unfolded, the Galaxy Z Flip3 is a perfect smartphone in every way with a 6.7-inch Infinity Flex screen. With Flex Mode, Galaxy Z Flip3 lets you take selfies, watch videos, make video calls and more hands-free.",
    price: 1200,
    stock: 14,
    brand: "Samsung",
    images: [images["7/1.jpg"], images["7/2.jpg"]],
  },
  {
    id: 7,
    title: "Acer Extensa 15",
    category: "laptop",
    description:
      "This laptop is designed for those who want a reliable and productive computing device with the most requested functionality. This model fully satisfies these requirements. Reliable storage gives you long-term storage options for the virtual information you need. The device is equipped with a webcam and microphone, thanks to which you can organize video conferences with business partners and work colleagues.",
    price: 555,
    stock: 6,
    brand: "Acer",
    images: [images["8/1.jpg"], images["8/2.jpg"]],
  },
  {
    id: 8,
    title: "ASUS Laptop 15",
    category: "laptop",
    description:
      "ASUS X515 is a versatile entry-level laptop that combines stylish design with cutting-edge technology. It offers the user all the power of an Intel Core i3 processor coupled with an integrated Intel graphics card and 8 GB DDR4-2400 RAM. The laptop features an anti-glare NanoEdge thin bezel display with wide (178°) viewing angles, and a traditional 1TB hard drive for file storage.",
    price: 650,
    stock: 4,
    brand: "ASUS",
    images: [images["9/1.jpg"], images["9/2.jpg"]],
  },
  {
    id: 9,
    title: "ASUS ExpertBook P1",
    category: "laptop",
    description:
      "This laptop is designed for those who want to get a high-quality and productive computer device with the most requested functionality. This model fully satisfies these requirements. Reliable storage gives you long-term storage options for the virtual information you need. The device is equipped with a webcam and microphone, thanks to which you can organize video conferences with business partners and work colleagues.",
    price: 740,
    stock: 6,
    brand: "ASUS",
    images: [images["10/1.jpg"], images["10/2.jpg"]],
  },
  {
    id: 10,
    title: "HP 255 Laptop",
    category: "laptop",
    description:
      "Stay connected with this full-featured HP 255 Notebook PC with a redesigned, lightweight design that's easy to take anywhere. Powered by AMD Ryzen processors, this laptop comes with all the collaboration tools you need to tackle any task.",
    price: 740,
    stock: 6,
    brand: "HP",
    images: [images["11/1.jpg"], images["11/2.jpg"]],
  },
  {
    id: 11,
    title: "Samsung Galaxy Tab A8",
    category: "tablet",
    description:
      "Tablet Samsung Galaxy Tab A8 LTE provides the ability to make phone calls using the built-in GSM module. Mobile connection also guarantees high-speed interaction with the Internet. Fast loading of Internet pages (including those containing videos) is supported by the 4G standard. The tablet also works on 3G networks. You can use Wi-Fi connection at home and in public places.",
    price: 250,
    stock: 9,
    brand: "Samsung",
    images: [images["12/1.jpg"], images["12/2.jpg"]],
  },
  {
    id: 12,
    title: "Realme Pad",
    category: "tablet",
    description:
      'Realme Pad is designed to quickly solve any of your tasks. Enjoy crisp operation and a stylish all-metal design. With a thin and light body, you can comfortably enjoy games and watch your favorite videos for a long time. Realme Pads 10.4" slim bezel display gives you an immersive gaming experience, while its 2000 x 1200 resolution lets you watch your favorite movies in high quality.',
    price: 310,
    stock: 11,
    brand: "Realme",
    images: [images["13/1.jpg"], images["13/2.jpg"]],
  },
  {
    id: 13,
    title: "HUAWEI MatePad Pro",
    category: "tablet",
    description:
      "HUAWEI MatePad Pro is equipped with a 2560x1600 pixel OLED display with a 16:10 aspect ratio, 274 ppi density and 120Hz frequency. This 10-bit panel has perfect color calibration. The tablet uses a graphene cooling system and a vapor chamber. The tablet is equipped with 8 GB of RAM and 256 GB of flash memory. There are Wi-Fi 6 (ax) and Bluetooth 5.2 modules with AAC and LDAC for sound. The USB-C port provides 3.1 Gen 1 speed.",
    price: 695,
    stock: 3,
    brand: "HUAWEI",
    images: [images["14/1.jpg"], images["14/2.jpg"]],
  },
  {
    id: 14,
    title: "Apple Watch Series 7",
    category: "watches",
    description:
      "Show maximum. Large advanced display. Powerful innovation for health care. Faster Charging: Up to 33% faster. The larger display changes everything. It brings even more benefits, because the information on the screen is better visible and the watch is much more convenient to use. The Series 7 brings the biggest and brightest ideas to life. The effect of a smoothly curved silhouette is created due to the refraction of light along the edges of the display, due to which the glass and the body visually form an almost continuous surface.",
    price: 465,
    stock: 6,
    brand: "Apple",
    images: [images["15/1.jpg"], images["15/2.jpg"]],
  },
  {
    id: 15,
    title: "Garmin Venu Sq 2",
    category: "watches",
    description:
      "The battery of the device provides up to 11 days of work in smart watch mode and up to 26 hours in GPS mode. This means you dont have to charge your watch every day before bed, and you can get health information 24 hours a day, 7 days a week. The attractive design of the Venu Sq 2 smart watch is suitable for any outfit and any situation. You can also use the Your Watch setting. your way. (Your watch. Your way). With a bright AMOLED display and an optional always-on screen mode, you can see all the information you need at a glance. The device includes durable Corning Glass 3 glass, a lightweight aluminum bezel around the screen and a comfortable silicone strap. This smartwatch is just made for your active lifestyle.",
    price: 480,
    stock: 3,
    brand: "Garmin",
    images: [images["16/1.jpg"], images["16/2.jpg"]],
  },
  {
    id: 16,
    title: "LED LG 50NANO829QB",
    category: "TV",
    description:
      "Enjoy video games on the big screen. Full immersion in video games thanks to all the necessary technologies for gaming.",
    price: 1240,
    stock: 3,
    brand: "LG",
    images: [images["17/1.jpg"], images["17/2.jpg"]],
  },
  {
    id: 17,
    title: "LED Polarline 58PU55STC-SM",
    category: "TV",
    description:
      '58" (147 cm) LED TV Polarline 58PU55STC-SM will be an excellent choice for watching your favorite movies and TV shows at home with family or friends. This model has a large diagonal and uses a matrix with good color reproduction and a resolution of 3840x2160 pixels, which, together The TV also supports HDR technology, which enhances the picture in complex scenes that combine bright and dark elements.All this, together with thin bezels, will allow you to fully enjoy what is happening on the screen.',
    price: 480,
    stock: 4,
    brand: "Polarline",
    images: [images["18/1.jpg"], images["18/2.jpg"]],
  },
  {
    id: 18,
    title: "LED Haier 55 Smart TV DX2",
    category: "TV",
    description:
      "Haier TV is equipped with a screen with a diagonal of 140 cm. Model Haier 55 Smart TV DX2 has a screen with a resolution of 3840 × 2160 (4K UltraHD), Smart TV support, Android operating system, surround sound.",
    price: 620,
    stock: 2,
    brand: "Haier",
    images: [images["19/1.jpg"], images["19/2.jpg"]],
  },
  {
    id: 19,
    title: "LED LG 43UQ81009LC",
    category: "TV",
    description:
      "Crystal clear 4K resolution. LG UHD TVs give you an unforgettable viewing experience. Enjoy vibrant colors and incredible detail on Real 4K TVs.",
    price: 820,
    stock: 5,
    brand: "LG",
    images: [images["20/1.jpg"], images["20/2.jpg"]],
  },
];
