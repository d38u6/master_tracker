import React from "react";
import { shallow } from "enzyme";

import TimeChartContainer from "../TimeChartContainer";
import menuItems from "../menuItems";
import { records } from "../../../data/fixtures";
import mapRecordsToDays from "../../../utility/mapRecordsToDays";
import { createTimeFilter, createDays } from "../../../utility/time";

const props = { records, render: jest.fn() };

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

  return [[...dataDays].map(([date, value]) => [new Date(date), value])];
};

describe("'TimeChartContainer' component", () => {
  shallow(<TimeChartContainer {...props} />);

  const selectedItem = menuItems[0];
  let properties;
  beforeEach(() => {
    properties = [...props.render.mock.calls].pop()[0];
  });

  //selectItem fn
  it("should call render fn with, 'selectItem' property", () => {
    expect(typeof properties.selectItem).toBe("function");
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

  //chartConf
  it("should call render fn with, 'chartConf.data' property", () => {
    expect(properties.chartConf.data).toEqual(clacData(selectedItem.filter));
  });

  it("should call render fn with, 'chartConf.axes' property", () => {
    expect(properties.chartConf.axes).toEqual([
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ]);
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

    //chartConf
    it("should call render fn with, 'chartConf.axes' property", () => {
      expect(properties.chartConf.axes).toEqual([
        { primary: true, type: "time", position: "bottom" },
        { type: "linear", position: "left" },
      ]);
    });

    it("should call render fn with, 'chartConf.axes' property", () => {
      expect(properties.chartConf.axes).toEqual([
        { primary: true, type: "time", position: "bottom" },
        { type: "linear", position: "left" },
      ]);
    });
  });
});
