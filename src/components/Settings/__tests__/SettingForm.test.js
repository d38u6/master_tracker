import React from "react";
import { shallow } from "enzyme";

import SettingForm from "../SettingForm/SettingForm";

const props = { id: "testId", label: "settingLabel" };

describe("'SettingForm' component", () => {
  const settingForm = shallow(<SettingForm {...props} />);

  //Form
  it("render 'Form' component", () => {
    expect(settingForm.find("Form").exists()).toBe(true);
  });
  it("'Form' component should has 'Form' class", () => {
    expect(settingForm.find("Form").hasClass("Form")).toBe(true);
  });

  //FormGroup
  it("render 'FormGroup' component", () => {
    expect(settingForm.find("FormGroup").exists()).toBe(true);
  });
  it("'FormGroup' component should contain correctly 'controlId' prop", () => {
    expect(settingForm.find("FormGroup").prop("controlId")).toBe(props.id);
  });

  //FormLabel
  it("render 'FormLabel' component", () => {
    expect(settingForm.find("FormLabel").exists()).toBe(true);
  });
  it("'FormLabel' component, should contain proper props", () => {
    const desiredProps = { column: true, sm: 4, className: "Label" };
    expect(settingForm.find("FormLabel").props()).toMatchObject(desiredProps);
  });
  it("'FormLabel' component, should contain correctly label text", () => {
    expect(settingForm.find("FormLabel").text()).toBe(props.label);
  });

  //Col
  it("render 'Col' component", () => {
    expect(settingForm.find("Col").exists()).toBe(true);
  });
  it("'Col' component, should contain proper props", () => {
    const desiredProps = { sm: 8, className: "Control" };
    expect(settingForm.find("Col").props()).toMatchObject(desiredProps);
  });
});
