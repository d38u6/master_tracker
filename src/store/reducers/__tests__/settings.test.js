import reducer from "../settings/settings";
import * as actions from "../../actions/settings/settings";

import defaultSettings from "../../../data/defaultSettings";
import goalChartMenuItems from "../../../containers/Charts/GoalChart/menuItems";
import timeChartMenuItems from "../../../containers/Charts/TimeChart/menuItems";
import { defaultGoals } from "../../../data/goals";

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
