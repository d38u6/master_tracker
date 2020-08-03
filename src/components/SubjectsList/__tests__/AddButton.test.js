import React from "react";
import { shallow } from "enzyme";

import AddButton from "../AddButton/AddButton";

const props = { onClick: jest.fn() };

describe("'AddButton' component", () => {
  const addButton = shallow(<AddButton {...props} />);

  //tr
  it("render 'tr' element", () => {
    expect(addButton.find("tr").exists()).toBe(true);
  });

  //td
  it("render 'td' element", () => {
    expect(addButton.find("td").exists()).toBe(true);
  });

  it("'td' element should contain proper props", () => {
    const desiredProps = { colSpan: "4", className: "Wrapper" };
    expect(addButton.find("td").props()).toMatchObject(desiredProps);
  });

  //Button
  it("render 'Button' component", () => {
    expect(addButton.find("Button").exists()).toBe(true);
  });

  it("Button' component should contain proper props", () => {
    const desiredProps = {
      variant: "success",
      size: "sm",
      className: "AddButton",
      onClick: props.onClick,
    };
    expect(addButton.find("Button").props()).toMatchObject(desiredProps);
  });

  it("'Button' component should contain 'Add New' text", () => {
    expect(addButton.find("Button").text()).toMatch("Add New");
  });

  // Button > BsPlus
  it("inside 'Button' should render 'BsPlus' icon", () => {
    expect(addButton.find("Button > BsPlus").exists()).toBe(true);
  });

  it("'BsPlus' should contain 'Icon' class", () => {
    expect(addButton.find("Button > BsPlus").hasClass("Icon")).toBe(true);
  });

  it("should call onClick callback", () => {
    addButton.find("Button").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
