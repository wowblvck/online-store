interface ImagesData {
  [key: string]: {
    name: string;
    src: string;
  };
}

interface MultimediaData {
  name: string;
  src: string;
}

interface IconsData {
  name: string;
  src: string;
}

type ImageMap = { [key: string]: string };

export { ImagesData, MultimediaData, IconsData, ImageMap };
