import itImage from "../assets/image/categories/it.jpg";
import codingImage from "../assets/image/categories/coding.jpg";
import defaultImage from "../assets/image/categories/default.jpg";
import { generateRecords, generateRecord } from "../utility/recordsGenerator";
import timeChartMenuItems from "../containers/Category/Charts/TimeChart/menuItems";
import goalChartMenuItems from "../containers/Category/Charts/GoalChart/menuItems";

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
  categoryId: "0",
  title: "Dziennik Uczuć",
  summaryTime: 21325,
};

export const subTwo = {
  id: "1",
  categoryId: "0",
  title: "Master Tracker",
  summaryTime: 215,
};

export const subjects = [
  ...[subOne, subTwo].map(({ summaryTime, ...rest }) => ({
    ...rest,
  })),
  ...[subOne, subTwo].map(({ summaryTime, ...rest }) => ({
    ...rest,
    categoryId: "1",
  })),
];

export const subjectFormConf = {
  titleConf,
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

export const circleProgressBarConf = {
  value: 1235,
  goalValue: 2000,
  diff: 100,
};

export const timeChartConf = {
  axes: [
    { primary: true, type: "time", position: "bottom" },
    { type: "linear", position: "left" },
  ],
  data: [
    [
      [1, 10],
      [2, 10],
      [3, 10],
    ],
  ],
};

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
