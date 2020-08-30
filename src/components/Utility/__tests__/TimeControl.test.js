import React from "react";
import { shallow } from "enzyme";

import TimeControl from "../TimeControl/TimeControl";

const props = {
  value: 0,
  onChange: jest.fn(),
  label: "Test label",
  className: "testClassName",
  min: 0,
  max: 23,
};

describe("'TimeControl' component", () => {
  const timeControl = shallow(<TimeControl {...props} />);

  //div
  it("render 'div' element", () => {
    expect(timeControl.find("div").exists()).toBe(true);
  });

  it("'div' element should contain prop className class", () => {
    expect(timeControl.find("div").hasClass(props.className)).toBe(true);
  });

  //FormControl
  it("render 'FormControl' component", () => {
    expect(timeControl.find("FormControl").exists()).toBe(true);
  });

  it("'FormControl' should contain 'number' type", () => {
    expect(timeControl.find("FormControl").prop("type")).toBe("number");
  });

  it("'FormControl' should contain correctly value", () => {
    expect(timeControl.find("FormControl").prop("value")).toBe(props.value);
  });

  it("should call 'onChange' callback", () => {
    timeControl.find("FormControl").simulate("change");
    expect(props.onChange).toHaveBeenCalled();
  });

  it("'FormControl' should contain proper 'rest' props", () => {
    const { value, label, onChange, className, ...rest } = props;
    expect(timeControl.find("FormControl").props()).toMatchObject(rest);
  });

  //FormLabel
  it("render 'FormLabel' component", () => {
    expect(timeControl.find("FormLabel").exists()).toBe(true);
  });

  it("'FormLabel' should containt correctly label text", () => {
    expect(timeControl.find("FormLabel").text()).toBe(props.label);
  });
});
