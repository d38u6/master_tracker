import React from "react";
import { shallow } from "enzyme";

import { TimeChartContainer } from "Containers/Category/Charts/TimeChart/TimeChartContainer";
import menuItems from "Containers/Category/Charts/TimeChart/menuItems";
import { records } from "Data/fixtures";
import mapRecordsToDays from "Utility/mapRecordsToDays";
import { createTimeFilter, createDays } from "Utility/time";

const props = { records, defaultChartType: menuItems[1].id, render: jest.fn() };

const days = mapRecordsToDays(records);

const clacData = (filter) => {
  const timeFilter = createTimeFilter(filter);
  const emptyDays = [...createDays(filter)].reduce(
    (pv, cv) => pv.set(cv, 0),
    new Map()
  );
  const dataDays = days
    .filter(({ date }) => timeFilter(date))
    .reduce(
      (pv, { date, value }) =>
        pv.set(new Date(date).setHours(0, 0, 0, 0), value),
      emptyDays
    );

  return [...dataDays].map(([date, value]) => ({
    time: date,
    value,
  }));
};

describe("'TimeChartContainer' component", () => {
  shallow(<TimeChartContainer {...props} />);

  let properties;
  beforeEach(() => {
    properties = [...props.render.mock.calls].pop()[0];
  });

  const selectedItem = menuItems.find(
    ({ id }) => id === props.defaultChartType
  );

  //selectItem fn
  it("should call render fn with, 'selectItem' property", () => {
    expect(typeof properties.selectItem).toBe("function");
  });

  //name
  it("should call render fn with correctly 'name' property", () => {
    expect(properties.name).toBe(selectedItem.caption);
  });

  //menuItems
  it("should call render fn with, 'menuItems' property", () => {
    expect(properties.menuItems).toEqual(
      menuItems.map((i) => ({
        ...i,
        active: i.id === props.defaultChartType,
      }))
    );
  });

  //data
  it("should call render fn with proper 'data' property", () => {
    expect(properties.data).toEqual(clacData(selectedItem.filter));
  });

  describe("When change the active menu item", () => {
    const selectedItem = menuItems[3];
    let properties;

    beforeEach(() => {
      [...props.render.mock.calls].pop()[0].selectItem(selectedItem.id);
      properties = [...props.render.mock.calls].pop()[0];
    });

    //name
    it("should call render fn with, 'name' property", () => {
      expect(properties.name).toBe(selectedItem.caption);
    });

    //menuItems
    it("should call render fn with, 'menuItems' property", () => {
      expect(properties.menuItems).toEqual(
        menuItems.map((i) => ({ ...i, active: i.id === selectedItem.id }))
      );
    });
  });
});
