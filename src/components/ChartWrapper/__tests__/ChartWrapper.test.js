import React from "react";
import { shallow } from "enzyme";

import ChartWrapper from "../ChartWrapper";

const props = { className: "testClassName" };

describe("'ChartWrapper' component", () => {
  const chartWrapper = shallow(<ChartWrapper {...props} />);

  //div
  it("render a 'div' element", () => {
    expect(chartWrapper.find("div").exists()).toBe(true);
  });

  it("'div' element should contain 'Wrapper' class name", () => {
    expect(chartWrapper.find("div").hasClass("Wrapper")).toBe(true);
  });

  it("'div' element should contain proper porp class name", () => {
    expect(chartWrapper.find("div").hasClass(props.className)).toBe(true);
  });

  it("when prop className not exist, should contain empty class name", () => {
    const chartWrapper = shallow(<ChartWrapper />);
    expect(chartWrapper.find("div").hasClass("")).toBe(true);
  });
});
