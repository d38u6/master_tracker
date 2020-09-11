import React from "react";
import { shallow } from "enzyme";

import { ChartWithTheme } from "Components/Utility/WithTheme/ChartWithTheme/ChartWithTheme";
import { theme } from "Data/fixtures";

const props = { theme };

describe("'ChartWithTheme' component", () => {
  const chartWithTheme = shallow(<ChartWithTheme {...props} />);

  it("render 'Chart' component", () => {
    expect(chartWithTheme.find("Chart").exists()).toBe(true);
  });

  it("'Chart' should contain correct true 'dark' prop", () => {
    expect(chartWithTheme.find("Chart").prop("dark")).toBe(
      props.theme.bg === "dark"
    );
  });

  it("'Chart' should contain correct false 'dark' prop", () => {
    const props = { theme: { bg: "light", text: "dark" } };
    const chartWithTheme = shallow(<ChartWithTheme {...props} />);
    expect(chartWithTheme.find("Chart").prop("dark")).toBe(
      props.theme.bg === "dark"
    );
  });
});
