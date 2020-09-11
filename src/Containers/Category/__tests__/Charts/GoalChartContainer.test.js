import React from "react";
import { shallow } from "enzyme";

import { GoalChartContainer } from "Containers/Category/Charts/GoalChart/GoalChartContainer";
import menuItems from "Containers/Category/Charts/GoalChart/menuItems";
import { records } from "Data/fixtures";
import { createTimeFilter } from "Utility/time";
import { goalsLevels, defaultGoals } from "Data/goals";

const props = {
  records,
  defaultChartType: menuItems[1].id,
  goals: defaultGoals,
  render: jest.fn(),
};

const calcSummaryTime = (filter) => {
  const timeFilter = createTimeFilter(filter);
  return records
    .filter(({ date }) => timeFilter(date))
    .reduce((pv, { value }) => pv + value, 0);
};

describe("'GoalChartContainer' component", () => {
  shallow(<GoalChartContainer {...props} />);
  let properties;
  beforeEach(() => {
    properties = [...props.render.mock.calls].pop()[0];
  });

  const selectedItem = menuItems.find(
    ({ id }) => id === props.defaultChartType
  );

  //selectItem fn
  it("should call render fn with, 'selectItem' property", () => {
    const properties = props.render.mock.calls[0][0];
    expect(typeof properties.selectItem).toBe("function");
  });

  it("should call render fn with, correctly 'name' property", () => {
    expect(properties.name).toBe(selectedItem.caption);
  });

  describe("when the levels is chosen", () => {
    const selectedItem = menuItems[0];
    const summaryTime = calcSummaryTime(selectedItem.filter);
    const currentLevel =
      goalsLevels.findIndex((value) => value > summaryTime) + 1;

    let properties;
    beforeEach(() => {
      [...props.render.mock.calls].pop()[0].selectItem(selectedItem.id);
      properties = [...props.render.mock.calls].pop()[0];
    });

    it("should call render fn with, correctly 'menuItem' property", () => {
      expect(properties.menuItems).toEqual(
        menuItems.map((i) => ({ ...i, active: i.id === selectedItem.id }))
      );
    });

    it("should call render fn with, correctly 'name' property", () => {
      expect(properties.name).toBe(`Level ${currentLevel}`);
    });

    it("should call render fn with, correctly 'value' property insied progressBarConf", () => {
      expect(properties.progressBarConf.value).toBe(summaryTime);
    });

    it("should call render fn with, correctly 'goalValue' property insied progressBarConf", () => {
      expect(properties.progressBarConf.goalValue).toBe(
        goalsLevels[currentLevel - 1]
      );
    });

    it("should call render fn with, correctly 'diff' property insied progressBarConf", () => {
      expect(properties.progressBarConf.diff).toBe(
        goalsLevels[currentLevel - 2]
      );
    });
  });

  describe("when the weekly is chosen", () => {
    const selectedItem = menuItems[2];
    const summaryTime = calcSummaryTime(selectedItem.filter);

    let properties;
    beforeEach(() => {
      [...props.render.mock.calls].pop()[0].selectItem(selectedItem.id);
      properties = [...props.render.mock.calls].pop()[0];
    });

    it("should call render fn with, correctly 'menuItem' property", () => {
      expect(properties.menuItems).toEqual(
        menuItems.map((i) => ({ ...i, active: i.id === selectedItem.id }))
      );
    });

    it("should call render fn with, correctly 'name' property", () => {
      expect(properties.name).toBe(selectedItem.caption);
    });

    it("should call render fn with, correctly 'value' property insied progressBarConf", () => {
      expect(properties.progressBarConf.value).toBe(summaryTime);
    });

    it("should call render fn with, correctly 'goalValue' property insied progressBarConf", () => {
      expect(properties.progressBarConf.goalValue).toBe(
        props.goals[selectedItem.id]
      );
    });

    it("should call render fn with, correctly 'diff' property insied progressBarConf", () => {
      expect(properties.progressBarConf.diff).toBe(0);
    });
  });
});
