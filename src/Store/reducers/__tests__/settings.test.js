import reducer from "Store/reducers/settings/settings";
import * as actions from "Store/actions/settings/settings";

import defaultSettings from "Data/defaultSettings";
import goalChartMenuItems from "Containers/Category/Charts/GoalChart/menuItems";
import timeChartMenuItems from "Containers/Category/Charts/TimeChart/menuItems";
import { defaultGoals } from "Data/goals";

describe("settings reducer", () => {
  it("should return default state with unknown action", () => {
    expect(reducer(defaultSettings, { type: "unknown" })).toStrictEqual({
      ...defaultSettings,
    });
  });

  it("should return state with settings", () => {
    expect(
      reducer(undefined, actions.setSettings(defaultSettings))
    ).toStrictEqual(defaultSettings);
  });

  it("should set default goal chart type to state", () => {
    const state = reducer(
      defaultSettings,
      actions.setDefaultGoalChartType(goalChartMenuItems[1].id)
    );
    expect(state).toStrictEqual({
      ...defaultSettings,
      defaultGoalChartType: goalChartMenuItems[1].id,
    });
  });

  it("should set default time chart type to state", () => {
    const state = reducer(
      defaultSettings,
      actions.setDefaultTimeChartType(timeChartMenuItems[1].id)
    );
    expect(state).toStrictEqual({
      ...defaultSettings,
      defaultTimeChartType: timeChartMenuItems[1].id,
    });
  });

  it("should set default goals to state", () => {
    const goals = defaultGoals.daily + 25;
    const state = reducer(defaultSettings, actions.setGoals(goals));

    expect(state).toStrictEqual({
      ...defaultSettings,
      goals,
    });
  });
});
