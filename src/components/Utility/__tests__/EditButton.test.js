import React from "react";
import { shallow } from "enzyme";

import EditButton from "../EditButton/EditButton";

const props = { onClick: jest.fn() };

describe("'EditButton' component", () => {
  const editButton = shallow(<EditButton {...props} />);

  //div
  it("render 'div' element", () => {
    expect(editButton.find("div").exists()).toBe(true);
  });

  it("'should' contain 'EditButton' class", () => {
    expect(editButton.find("div").hasClass("EditButton")).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    editButton.find("div").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });

  //FaPencilAlt icon
  it("render 'FaPencilAlt' icon inside 'div'", () => {
    expect(editButton.find("div > FaPencilAlt").exists()).toBe(true);
  });
});
