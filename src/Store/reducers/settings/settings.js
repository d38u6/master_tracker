import {
  SET_SETTINGS,
  SET_DEFAULT_GOAL_CHART_TYPE,
  SET_DEFAULT_TIME_CHART_TYPE,
  SET_GOALS,
} from "../../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_SETTINGS:
      return { ...payload };
    case SET_DEFAULT_GOAL_CHART_TYPE:
      return { ...state, defaultGoalChartType: payload };
    case SET_DEFAULT_TIME_CHART_TYPE:
      return { ...state, defaultTimeChartType: payload };
    case SET_GOALS:
      return { ...state, goals: payload };
    default:
      return state;
  }
};
