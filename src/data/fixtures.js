import itImage from "../assets/image/categories/it.jpg";
import codingImage from "../assets/image/categories/coding.jpg";
import defaultImage from "../assets/image/categories/default.jpg";

export const categoryOne = {
  id: "1",
  imageSrc: itImage,
  title: "Programowanie",
  desc: "Nauka kodzenia i wszystko co z nią związane",
  time: 1235489,
};

export const categoryTwo = {
  id: "2",
  imageSrc: codingImage,
  title: "Programowanie",
  desc: "Nauka kodzenia i wszystko co z nią związane",
  time: 1235489,
};

export const categoryThree = {
  id: "3",
  imageSrc: defaultImage,
  title: "Programowanie",
  desc: "Nauka kodzenia i wszystko co z nią związane",
  time: 1235489,
};

export const categoryFour = {
  id: "4",
  imageSrc: defaultImage,
  title: "Programowanie",
  desc: "Nauka kodzenia i wszystko co z nią związane",
  time: 1235489,
};

export const categories = [
  categoryOne,
  categoryTwo,
  categoryThree,
  categoryFour,
];

export const titleConf = {
  value: "Test Title Input Value ",
  onChange: jest.fn(),
};
export const descConf = {
  value: "Test Description area Value",
  onChange: jest.fn(),
};
export const imageConf = {
  src: "testImageSource.png",
  onChange: jest.fn(),
};
export const categoryFormConf = {
  titleConf,
  descConf,
  imageConf,
  onSaveClick: jest.fn(),
  onRemoveClick: jest.fn(),
};

export const theme = {
  bg: "dark",
  text: "light",
};
