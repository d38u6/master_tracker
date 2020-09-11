import * as actions from "Store/actions/settings/settings";
import {
  SET_DEFAULT_GOAL_CHART_TYPE,
  SET_DEFAULT_TIME_CHART_TYPE,
  SET_GOALS,
  SET_SETTINGS,
} from "Store/actions/types";

import defaultSettings from "Data/defaultSettings";
import goalChartMenuItems from "Containers/Category/Charts/GoalChart/menuItems";
import timeChartMenuItems from "Containers/Category/Charts/TimeChart/menuItems";
import { defaultGoals } from "Data/goals";

describe("settings actions", () => {
  describe("creates an action to set settings", () => {
    let action;

    beforeEach(() => {
      action = actions.setSettings(defaultSettings);
    });

    it("action should contain correctly type `SET_SETTINGS`", () => {
      expect(action.type).toEqual(SET_SETTINGS);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(defaultSettings);
    });
  });

  describe("creates an action to set default goal chart type", () => {
    let action;
    const chartType = goalChartMenuItems[2].id;

    beforeEach(() => {
      action = actions.setDefaultGoalChartType(chartType);
    });

    it("action should contain correctly type `SET_DEFAULT_GOAL_CHART_TYPE`", () => {
      expect(action.type).toEqual(SET_DEFAULT_GOAL_CHART_TYPE);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(chartType);
    });
  });

  describe("creates an action to set default time chart type", () => {
    let action;
    const chartType = timeChartMenuItems[2].id;

    beforeEach(() => {
      action = actions.setDefaultTimeChartType(chartType);
    });

    it("action should contain correctly type `SET_DEFAULT_TIME_CHART_TYPE`", () => {
      expect(action.type).toEqual(SET_DEFAULT_TIME_CHART_TYPE);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(chartType);
    });
  });

  describe("creates an action to set goals", () => {
    let action;

    beforeEach(() => {
      action = actions.setGoals(defaultGoals);
    });

    it("action should contain correctly type `SET_GOALS`", () => {
      expect(action.type).toEqual(SET_GOALS);
    });

    it("action should contain proper payload properties", () => {
      expect(action.payload).toBe(defaultGoals);
    });
  });
});
