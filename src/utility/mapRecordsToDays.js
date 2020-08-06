export default (records) => {
  const days = [];
  for (let { date, value } of records) {
    const dayDate = new Date(date).setHours(0, 0, 0, 0);
    const dayIndex = days.findIndex(({ date }) => date === dayDate);

    if (dayIndex < 0) {
      days.push({ date: dayDate, value });
    } else {
      days[dayIndex].value += value;
    }
  }
  return days;
};
