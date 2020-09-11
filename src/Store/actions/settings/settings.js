import {
  SET_SETTINGS,
  SET_DEFAULT_GOAL_CHART_TYPE,
  SET_DEFAULT_TIME_CHART_TYPE,
  SET_GOALS,
} from "../types";

export function setSettings(settings) {
  return { type: SET_SETTINGS, payload: settings };
}

export function setDefaultGoalChartType(chartItemId) {
  return { type: SET_DEFAULT_GOAL_CHART_TYPE, payload: chartItemId };
}

export function setDefaultTimeChartType(chartItemId) {
  return { type: SET_DEFAULT_TIME_CHART_TYPE, payload: chartItemId };
}

export function setGoals(goals) {
  return { type: SET_GOALS, payload: goals };
}
