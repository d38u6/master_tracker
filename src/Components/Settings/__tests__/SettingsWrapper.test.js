import React from "react";
import { shallow } from "enzyme";

import SettingsWrapper from "Components/Settings/SettingsWrapper/SettingsWrapper";

const props = { className: "testClassName" };

describe("'SettingsWrapper' component", () => {
  const settingsWrapper = shallow(<SettingsWrapper {...props} />);

  //div
  it("render a 'div' element", () => {
    expect(settingsWrapper.find("div").exists()).toBe(true);
  });

  it("'div' element should has 'SettingsWrapper' class", () => {
    expect(settingsWrapper.find("div").hasClass("SettingsWrapper")).toBe(true);
  });

  it("'div' element should has correctly prop class", () => {
    expect(settingsWrapper.find("div").hasClass(props.className)).toBe(true);
  });
});
