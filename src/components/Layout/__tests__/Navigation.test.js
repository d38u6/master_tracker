import React from "react";
import { shallow } from "enzyme";

import Navigation from "../Header/Navigation/Navigation";

describe("'Navigation' component", () => {
  const navigation = shallow(<Navigation />);

  //nav
  it("render 'nav' component", () => {
    expect(navigation.find("Nav").exists()).toBe(true);
  });

  //Home
  it("render 'NavLink' component with proper props", () => {
    const desiredProps = { to: "/", exact: true };
    expect(navigation.find("NavLink").at(0).props()).toMatchObject(
      desiredProps
    );
  });

  it("render icon 'AiFillHome' and Home text", () => {
    expect(navigation.find("NavLink").at(0).text()).toBe("<AiFillHome /> Home");
  });

  //Settings
  it("render 'NavLink' component with proper props", () => {
    const desiredProps = { to: "/settings" };
    expect(navigation.find("NavLink").at(1).props()).toMatchObject(
      desiredProps
    );
  });

  it("render icon 'AiFillSettings' and Settings text", () => {
    expect(navigation.find("NavLink").at(1).text()).toBe(
      "<AiFillSetting /> Settings"
    );
  });
});
