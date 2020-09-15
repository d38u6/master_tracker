import shortid from "shortid";
import categories from "./categories";
import subjects from "./subjects";

const codingCategory = categories.find(({ title }) => title === "Coding");
const codingSubjects = subjects.filter(
  ({ categoryId }) => categoryId === codingCategory.id
);
const schoolCategory = categories.find(({ title }) => title === "School");
const soccerCategory = categories.find(({ title }) => title === "Soccer");

const lessonPlan = [
  {
    day: 1,
    lessons: [
      { subId: "Z2XmI9u7K", time: 120 },
      { subId: "wGTNKFE_A", time: 100 },
      { subId: "BVB3bRxJj", time: 100 },
    ],
  },
  {
    day: 2,
    lessons: [
      { subId: "Z2XmI9u7K", time: 180 },
      { subId: "B-rfQH5Ay", time: 60 },
      { subId: "pwUb1dGB5", time: 60 },
    ],
  },
  {
    day: 3,
    lessons: [
      { subId: "Z2XmI9u7K", time: 60 },
      { subId: "B-rfQH5Ay", time: 120 },
      { subId: "pwUb1dGB5", time: 60 },
      { subId: "BVB3bRxJj", time: 60 },
      { subId: "wGTNKFE_A", time: 30 },
    ],
  },
  {
    day: 4,
    lessons: [
      { subId: "Z2XmI9u7K", time: 45 },
      { subId: "B-rfQH5Ay", time: 60 },
      { subId: "pwUb1dGB5", time: 120 },
      { subId: "wGTNKFE_A", time: 45 },
    ],
  },
  {
    day: 5,
    lessons: [
      { subId: "Z2XmI9u7K", time: 30 },
      { subId: "B-rfQH5Ay", time: 100 },
      { subId: "wGTNKFE_A", time: 30 },
      { subId: "BVB3bRxJj", time: 100 },
    ],
  },
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function* create365days() {
  const today = new Date(Date.now()).setHours(0, 0, 0, 0);
  const yearAgo = today - 365 * 24 * 60 * 60 * 1000;

  for (let date = yearAgo; date <= today; date += 24 * 60 * 60 * 1000) {
    yield date;
  }
}
const days = [...create365days()];

function isWeekend(date) {
  const day = new Date(date).getDay();
  return Boolean(day === 6 || day === 0);
}

function createReocrd(cat, sub, time, date) {
  return {
    id: shortid.generate(),
    categoryId: cat,
    subjectId: sub,
    date: date,
    value: time,
  };
}

function createCodingRecords(date) {
  const hours = random(0, isWeekend(date) ? 9 : 5);
  const subjectIndex = random(0, codingSubjects.length);

  return hours > 0 && hours < 2
    ? [
        createReocrd(
          codingCategory.id,
          codingSubjects[subjectIndex].id,
          hours * 60,
          date
        ),
        ...createCodingRecords(date),
      ]
    : [
        createReocrd(
          codingCategory.id,
          codingSubjects[subjectIndex].id,
          hours * 60,
          date
        ),
      ];
}

function createSchoolRecords(date) {
  const weekDay = new Date(date).getDay();
  const leave = random(0, 14);
  if (leave === 0) return [];
  return (
    lessonPlan
      .find(({ day }) => day === weekDay)
      ?.lessons.map((le) =>
        createReocrd(schoolCategory.id, le.subId, le.time, date)
      ) || []
  );
}

function createSoccerRecords(date) {
  const day = new Date(date).getDay();
  const leave = random(0, 10);
  if (leave === 0) return [];
  switch (day) {
    case 2:
      return [
        createReocrd(soccerCategory.id, "hxCvP1B_a", 90, date),
        createReocrd(soccerCategory.id, "FarkQgn2b", 30, date),
      ];
    case 5:
      return [
        createReocrd(soccerCategory.id, "hxCvP1B_a", 60, date),
        createReocrd(soccerCategory.id, "WnxP_PEhe", 30, date),
        createReocrd(soccerCategory.id, "FarkQgn2b", 30, date),
      ];
    default:
      return [];
  }
}

function createRecords(date) {
  return [
    ...createCodingRecords(date),
    ...createSchoolRecords(date),
    ...createSoccerRecords(date),
  ];
}

export function generateRecords() {
  let records = [];

  for (let day of days) {
    records = [...records, ...createRecords(day)];
  }
  return records;
}
