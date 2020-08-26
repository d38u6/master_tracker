export function getMinutes(minutes) {
  return minutes % 60;
}

export function getHours(minutes) {
  return Math.floor(minutes / 60);
}
export function parseMinutes(minutes) {
  return `${getHours(minutes)}h ${getMinutes(minutes)}min`;
}

export const THIS_DAY = "THIS_DAY",
  THIS_WEEK = "THIS_WEEK",
  THIS_MONTH = "THIS_MONTH",
  THIS_YEAR = "THIS_YEAR",
  LAST_DAYS = "LAST_DAYS";

function defineDate({ name, numbOfDays }) {
  switch (name) {
    case THIS_DAY:
      return new Date(Date.now()).setHours(0, 0, 0, 0);
    case THIS_WEEK:
      const weekDay = new Date(Date.now()).getDay() || 7;
      const today = new Date(Date.now()).setHours(0, 0, 0, 0);
      return new Date(today - (weekDay - 1) * 24 * 60 * 60 * 1000).getTime();
    case THIS_MONTH:
      const firstDayOfMonth = new Date(Date.now()).setDate(1);
      return new Date(firstDayOfMonth).setHours(0, 0, 0, 0);
    case THIS_YEAR:
      const firstDayOfYear = new Date(Date.now()).setMonth(0, 1);
      return new Date(firstDayOfYear).setHours(0, 0, 0, 0);
    case LAST_DAYS:
      return (
        new Date(Date.now()).setHours(0, 0, 0, 0) -
        (numbOfDays - 1 || 0) * 24 * 60 * 60 * 1000
      );
    default:
      return 0;
  }
}

export function createTimeFilter(filter) {
  const filterDate = defineDate(filter);
  const dateNow = Date.now();
  return (date) => date >= filterDate && date <= dateNow;
}

export function* createDays(filter) {
  for (
    let date = defineDate(filter);
    date <= new Date(Date.now()).setHours(0, 0, 0, 0);
    date += 24 * 60 * 60 * 1000
  ) {
    yield date;
  }
}
