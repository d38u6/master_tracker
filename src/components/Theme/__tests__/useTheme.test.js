import React from "react";
import { shallow } from "enzyme";

import useTheme from "../useTheme";
import { defaultTheme } from "../ThemeContext";

let useEffect;
jest.spyOn(React, "useEffect").mockImplementation((f) => (useEffect = f));

const TestHook = ({ callback }) => {
  callback();
  return null;
};

describe("useTheme hook", () => {
  let themeHook;
  beforeEach(() =>
    shallow(<TestHook callback={() => (themeHook = useTheme())} />)
  );

  //before initialized
  it("return default theme", () => {
    const [theme] = themeHook;
    expect(theme).toBe(defaultTheme);
  });

  it("return toggleTheme function", () => {
    const [, toggleTheme] = themeHook;
    expect(typeof toggleTheme).toBe("function");
  });

  it("return false initialized", () => {
    const [, , initialized] = themeHook;
    expect(initialized).toBe(false);
  });

  describe("after initialized", () => {
    beforeEach(() => {
      shallow(<TestHook callback={() => (themeHook = useTheme())} />);
      useEffect();
      const [, toggleTheme] = themeHook;
      toggleTheme();
    });

    it("return true initialized", () => {
      const [theme, , initialized] = themeHook;
      expect(initialized).toBe(true);
      expect(theme).toBe("light");
    });
  });

  describe("when call 'toggleTheme'", () => {
    beforeEach(() => {
      shallow(<TestHook callback={() => (themeHook = useTheme())} />);
      const [, toggleTheme] = themeHook;
      toggleTheme();
    });
    it("should change theme to 'light'", () => {
      const [theme] = themeHook;
      expect(theme).toBe("light");
    });
  });
});
