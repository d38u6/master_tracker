import itImage from "../assets/image/categories/it.jpg";
import codingImage from "../assets/image/categories/coding.jpg";
import defaultImage from "../assets/image/categories/default.jpg";

const isTest = process.env.NODE_ENV === "test";

export const images = [itImage, codingImage, defaultImage].map((src, i) => ({
  src,
  active: i === 0,
}));

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
  onChange: isTest ? jest.fn() : null,
};
export const descConf = {
  value: "Test Description area Value",
  onChange: isTest ? jest.fn() : null,
};
export const imageConf = {
  src: "testImageSource.png",
  onChange: isTest ? jest.fn() : null,
};
export const categoryFormConf = {
  titleConf,
  descConf,
  imageConf,
  onApplyClick: isTest ? jest.fn() : null,
  onRemoveClick: isTest ? jest.fn() : null,
};

export const theme = {
  bg: "dark",
  text: "light",
};

export const subOne = {
  id: "sub0",
  categoryId: "0",
  title: "Dziennik Uczuć",
  summaryTime: "50h 35min",
};

export const subTwo = {
  id: "sub1",
  categoryId: "0",
  title: "Master Tracker",
  summaryTime: "15h 35min",
};

export const subjects = [subOne, subTwo];

export const subjectFormConf = {
  titleConf,
  onApplyClick: isTest ? jest.fn() : null,
  onRemoveClick: isTest ? jest.fn() : null,
};
