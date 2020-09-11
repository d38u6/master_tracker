import React from "react";
import { shallow } from "enzyme";

import SettingsHeader from "Components/Settings/SettingsHeader/SettingsHeader";

const props = { title: "test title" };

describe("'SettingsHeader' component", () => {
  const settingsHeader = shallow(<SettingsHeader {...props} />);

  //h4
  it("render 'h4' element", () => {
    expect(settingsHeader.find("h4").exists()).toBe(true);
  });

  it("'h4' element should containt 'Header' class", () => {
    expect(settingsHeader.find("h4").hasClass("Header")).toBe(true);
  });

  it("'h4' element should containt correctly 'title' text", () => {
    expect(settingsHeader.find("h4").text()).toBe(props.title);
  });
});
