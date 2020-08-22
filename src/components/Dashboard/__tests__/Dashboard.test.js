import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../Dashboard";
import {
  records,
  widgetProps,
  circleProgressBarConf,
  timeChartConf,
} from "../../../data/fixtures";

const props = { records };

describe("'Dashboard' component", () => {
  const dashboard = shallow(<Dashboard {...props} />);

  //Row
  it("render 'Row' component", () => {
    expect(dashboard.find("Row").exists()).toBe(true);
  });

  it("'Row' should contina 'Dashboard' class", () => {
    expect(dashboard.find("Row").hasClass("Dashboard")).toBe(true);
  });

  //GoalChart
  it("render 'Connect(GoalChartContainer)'", () => {
    expect(dashboard.find("Connect(GoalChartContainer)").exists()).toBe(true);
  });

  it("'Connect(GoalChartContainer)' should contain proper 'records' props", () => {
    expect(dashboard.find("Connect(GoalChartContainer)").prop("records")).toBe(
      props.records
    );
  });

  describe("render function inside 'Connect(GoalChartContainer)'", () => {
    const props = { ...widgetProps, progressBarConf: circleProgressBarConf };
    const wrapper = shallow(
      dashboard.find("Connect(GoalChartContainer)").prop("render")(props)
    );

    it(`render 'Col' component with 'md="6"' prop`, () => {
      expect(wrapper.find("Col").props()).toMatchObject({ md: "6" });
    });

    it("render proper name", () => {
      expect(wrapper.find("span").text()).toBe(props.name);
    });

    it("render 'ContextMenu' component with proper props", () => {
      expect(wrapper.find("ContextMenu").props()).toMatchObject({
        items: props.menuItems,
        onSelect: props.selectItem,
      });
    });

    it("render 'CircleProgressBar' with proper props", () => {
      expect(wrapper.find("CircleProgressBar").props()).toMatchObject(
        props.progressBarConf
      );
    });
  });
  //;

  //TimeChart
  it("render 'Connect(TimeChartContainer)'", () => {
    expect(dashboard.find("Connect(TimeChartContainer)").exists()).toBe(true);
  });

  it("'Connect(TimeChartContainer)' should contain proper 'records' props", () => {
    expect(dashboard.find("Connect(TimeChartContainer)").prop("records")).toBe(
      props.records
    );
  });

  describe("render function inside 'Connect(TimeChartContainer)'", () => {
    const props = { ...widgetProps, chartConf: timeChartConf };
    const wrapper = shallow(
      dashboard.find("Connect(TimeChartContainer)").prop("render")(props)
    );

    it(`render 'Col' component with 'md="6"' prop`, () => {
      expect(wrapper.find("Col").props()).toMatchObject({ md: "6" });
    });

    it("render proper name", () => {
      expect(wrapper.find("span").text()).toBe(props.name);
    });

    it("render 'ContextMenu' component with proper props", () => {
      expect(wrapper.find("ContextMenu").props()).toMatchObject({
        items: props.menuItems,
        onSelect: props.selectItem,
      });
    });

    it("render 'Chart' with proper props", () => {
      expect(wrapper.find("WithTheme(ChartWithTheme)").props()).toMatchObject(
        props.chartConf
      );
    });
  });
});
