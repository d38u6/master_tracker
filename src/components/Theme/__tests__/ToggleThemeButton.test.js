import React from "react";
import * as ReactAll from "react";
import { shallow } from "enzyme";

import ToggleThemeButton from "../ToggleThemeButton";

const contextValue = { theme: "dark", toggleTheme: jest.fn() };

jest.spyOn(ReactAll, "useContext").mockImplementation(() => contextValue);

describe("'ToggleThemeButton' component", () => {
  const toggleThemeButton = shallow(<ToggleThemeButton />);

  //Button
  it("render 'Button' component", () => {
    expect(toggleThemeButton.find("Button").exists()).toBe(true);
  });

  it("'Button' should contain proper 'variant' prop", () => {
    const variant = contextValue.theme === "dark" ? "light" : "dark";
    expect(toggleThemeButton.find("Button").prop("variant")).toBe(variant);
  });

  it("should call 'toggleTheme' callback", () => {
    toggleThemeButton.find("Button").simulate("click");
    expect(contextValue.toggleTheme).toHaveBeenCalled();
  });

  //Span
  it("render a 'span' element", () => {
    expect(toggleThemeButton.find("span").exists()).toBe(true);
  });

  it("render 'variant' text inside 'span'", () => {
    const contextValue = { theme: "light", toggleTheme: jest.fn() };
    const variant = contextValue.theme === "dark" ? "light" : "dark";
    jest.spyOn(ReactAll, "useContext").mockImplementation(() => contextValue);
    const toggleThemeButton = shallow(<ToggleThemeButton />);

    expect(toggleThemeButton.find("span").text()).toBe(variant);
  });
});
