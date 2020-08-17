import React from "react";
import * as ReactAll from "react";
import { shallow } from "enzyme";

import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";

const contextValue = { theme: "dark", toggleTheme: jest.fn() };

jest.spyOn(ReactAll, "useContext").mockImplementation(() => contextValue);

describe("'ToggleThemeButton' component", () => {
  const toggleThemeButton = shallow(<ToggleThemeButton />);

  //div
  it("render 'div' element", () => {
    expect(toggleThemeButton.find("div").exists()).toBe(true);
  });

  it("'div' element should contain 'ToggleThemeButton' class", () => {
    expect(toggleThemeButton.find("div").hasClass("ToggleThemeButton")).toBe(
      true
    );
  });

  it("should call 'toggleTheme' callback", () => {
    toggleThemeButton.find("div").simulate("click");
    expect(contextValue.toggleTheme).toHaveBeenCalled();
  });

  //Span
  it("render a 'span' element", () => {
    expect(toggleThemeButton.find("span").exists()).toBe(true);
  });

  it("render 'icon' inside 'span'", () => {
    const contextValue = { theme: "light", toggleTheme: jest.fn() };
    const icon = contextValue.theme === "dark" ? "FiSun" : "FiMoon";
    jest.spyOn(ReactAll, "useContext").mockImplementation(() => contextValue);
    const toggleThemeButton = shallow(<ToggleThemeButton />);

    expect(toggleThemeButton.find(`span > ${icon}`).exists()).toBe(true);
  });
});
