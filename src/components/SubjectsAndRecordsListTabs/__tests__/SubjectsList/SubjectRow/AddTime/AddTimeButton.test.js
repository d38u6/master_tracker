import React from "react";
import { shallow } from "enzyme";

import AddTimeButton from "../../../../SubjectsList/SubjectRow/AddTime/AddTimeButton/AddTimeButton";

const props = { onClick: jest.fn() };

describe("'AddTimeButton' component", () => {
  const addTimeButton = shallow(<AddTimeButton {...props} />);

  //Button
  it("render 'Button' component", () => {
    expect(addTimeButton.find("Button").exists()).toBe(true);
  });

  it("Button' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      size: "sm",
      className: "AddTimeButton",
      onClick: props.onClick,
    };
    expect(addTimeButton.find("Button").props()).toMatchObject(desiredProps);
  });

  it("'Button' component should contain 'Add Time' text", () => {
    expect(addTimeButton.find("Button").text()).toMatch("Add Time");
  });

  // Button > BsPlus
  it("inside 'Button' should render 'BsPlus' icon", () => {
    expect(addTimeButton.find("Button > BsPlus").exists()).toBe(true);
  });

  it("'BsPlus' should contain 'Icon' class", () => {
    expect(addTimeButton.find("Button > BsPlus").hasClass("Icon")).toBe(true);
  });

  it("should call onClick callback", () => {
    addTimeButton.find("Button").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
