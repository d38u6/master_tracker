import shortid from "shortid";

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandTime() {
  return random(15, 180);
}

function getRandomDate() {
  const START_DATE = new Date(2020, 0, 1).getTime();
  const END_DATE = Date.now();
  return random(START_DATE, END_DATE);
}

export function generateRecord(categoryId, subjectId) {
  return {
    id: shortid.generate(),
    categoryId,
    subjectId,
    date: getRandomDate(),
    value: getRandTime(),
  };
}

export function* generateRecords(catId, subId, count) {
  for (let i = 0; i < count; i++) {
    yield generateRecord(catId, subId);
  }
}
