import React from "react";
import { shallow } from "enzyme";

import AddButton from "../AddButton/AddButton";

const props = { onClick: jest.fn() };

describe("'AddButton' component", () => {
  const addButton = shallow(<AddButton {...props} />);

  //Col
  it("render 'Col' component", () => {
    expect(addButton.find("Col").exists()).toBe(true);
  });

  it("'Col' should contain correct md=4 prop", () => {
    expect(addButton.find("Col").prop("md")).toBe("4");
  });

  it("'Col' should contain 'ButtonWrapper' class", () => {
    expect(addButton.find("Col").hasClass("ButtonWrapper")).toBe(true);
  });

  //Button
  it("render 'Button' component", () => {
    expect(addButton.find("Button").exists()).toBe(true);
  });

  it("'Button' should contain correct 'success' 'variant' prop", () => {
    expect(addButton.find("Button").prop("variant")).toBe("success");
  });

  it("'Button' should contain 'AddButton' class", () => {
    expect(addButton.find("Button").hasClass("AddButton")).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    addButton.find("Button").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });

  //FaPlus icon
  it("render 'FaPlus' icon inside 'Button'", () => {
    expect(addButton.find("Button > FaPlus").exists()).toBe(true);
  });
});
