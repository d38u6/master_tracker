import itImage from "Assets/image/categories/coding2.png";
import codingImage from "Assets/image/categories/coding.png";
import defaultImage from "Assets/image/categories/default.png";
import { generateRecords, generateRecord } from "Utility/recordsGenerator";
import timeChartMenuItems from "Containers/Category/Charts/TimeChart/menuItems";
import goalChartMenuItems from "Containers/Category/Charts/GoalChart/menuItems";

const isTest = process.env.NODE_ENV === "test";

export const menuItems = timeChartMenuItems;

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
  id: "0",
  position: 1,
  categoryId: "0",
  title: "Dziennik Uczuć",
  summaryTime: 21325,
};

export const subTwo = {
  id: "1",
  position: 2,
  categoryId: "0",
  title: "Master Tracker",
  summaryTime: 215,
};

export const subThree = {
  id: "2",
  position: 3,
  categoryId: "0",
  title: "Subject three",
  summaryTime: 515,
};

export const subFour = {
  id: "3",
  position: 4,
  categoryId: "0",
  title: "Subject four",
  summaryTime: 115,
};

export const subjects = [
  ...[subOne, subTwo, subFour, subThree].map(({ summaryTime, ...rest }) => ({
    ...rest,
  })),
  ...[subOne, subTwo].map(({ summaryTime, ...rest }) => ({
    ...rest,
    categoryId: "1",
  })),
];

export const subjectFormConf = {
  titleConf,
  moveUp: isTest ? jest.fn() : null,
  moveDown: isTest ? jest.fn() : null,
  onApplyClick: isTest ? jest.fn() : null,
  onRemoveClick: isTest ? jest.fn() : null,
};

export const record = generateRecord("1", "1");

export const records = [
  ...generateRecords("1", "0", 10),
  ...generateRecords("1", "1", 15),
  ...generateRecords("2", "0", 15),
  ...generateRecords("3", "1", 15),
];

export const widgetProps = {
  name: "Test name",
  menuItems,
  selectItem: isTest ? jest.fn() : null,
};

export const donutProgressBarConf = {
  value: 1235,
  goal: 2000,
  diff: 100,
};

export const timeChartData = [
  { time: new Date(2019, 4, 20).getTime(), value: 25 },
  { time: new Date(2019, 7, 12).getTime(), value: 125 },
  { time: new Date(2020, 8, 2).getTime(), value: 205 },
];

export const subjectsWithSummaryTime = subjects.map((s) => ({
  ...s,
  summaryTime: Math.floor(Math.random() * 100),
}));

export const goalChartTypesOption = goalChartMenuItems.map(
  ({ id, caption }) => ({ id, value: id, caption })
);
export const timeChartTypesOption = timeChartMenuItems.map(
  ({ id, caption }) => ({ id, value: id, caption })
);
