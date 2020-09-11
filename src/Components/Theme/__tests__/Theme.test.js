import React from "react";
import { shallow } from "enzyme";

import Theme from "Components/Theme/Theme";

let useEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (useEffect = f));

describe("'Theme' component", () => {
  const theme = shallow(<Theme />);

  it("default should render nothing", () => {
    expect(theme.isEmptyRender()).toBe(true);
  });

  describe("when will it be initialized", () => {
    let theme;
    beforeEach(() => {
      theme = shallow(<Theme />);
      useEffect();
    });

    //ContextProvider
    it("render 'ContextProvider'", () => {
      expect(theme.find("ContextProvider").exists()).toBe(true);
    });

    it("'ContextProvider' should contain default 'dark theme' inside 'value' prop", () => {
      expect(theme.prop("value").theme).toBe("dark");
    });

    it("'ContextProvider' should contain 'toggleTheme function inside 'value' prop", () => {
      expect(typeof theme.prop("value").toggleTheme).toBe("function");
    });

    it("should toggle theme, when call 'toggleTheme' function", () => {
      theme.prop("value").toggleTheme();
      expect(theme.prop("value").theme).toBe("light");
    });

    it("should toggle theme again, when call 'toggleTheme' function", () => {
      theme.prop("value").toggleTheme();
      expect(theme.prop("value").theme).toBe("dark");
    });
  });
});
