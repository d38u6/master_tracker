export function parseMinutes(minutes) {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}min`;
}

export const DAILY = "daily",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
  YEARLY = "yearly";
export function createTimeFilter(filterName) {
  let minDate = 0;
  switch (filterName) {
    case DAILY:
      minDate = new Date(Date.now()).setHours(0, 0, 0, 0);
      break;
    case WEEKLY:
      const weekDay = new Date(2020, 1, 2).getDay() || 7;
      const today = new Date(Date.now()).setHours(0, 0, 0, 0);
      minDate = new Date(today - (weekDay - 1) * 24 * 60 * 60 * 1000);
      break;
    case MONTHLY:
      const firstDayOfMonth = new Date(Date.now()).setDate(1);
      minDate = new Date(firstDayOfMonth).setHours(0, 0, 0, 0);
      break;
    case YEARLY:
      const firstDayOfYear = new Date(Date.now()).setMonth(0, 1);
      minDate = new Date(firstDayOfYear).setHours(0, 0, 0, 0);
      break;
    default:
  }
  return (date) => date >= minDate && date <= Date.now();
}
