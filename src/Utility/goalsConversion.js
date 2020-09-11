import { getHours, getMinutes } from "Utility/time";

export function mapGoalsObjectToArray(goals) {
  return Object.entries(goals).map(([name, value]) => ({
    id: name,
    hours: getHours(value),
    minutes: getMinutes(value),
  }));
}

export function reduceGoalsArrayToObject(goals) {
  return goals.reduce((pv, { id, hours, minutes }) => {
    pv[id] = hours * 60 + minutes;
    return pv;
  }, {});
}
