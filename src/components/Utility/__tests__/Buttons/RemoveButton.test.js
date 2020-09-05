import React from "react";
import { shallow } from "enzyme";

import RemoveButton from "../../Buttons/RemoveButton/RemoveButton";

const props = { onClick: jest.fn() };

describe("'RemoveButton' component", () => {
  const removeButton = shallow(<RemoveButton {...props} />);

  //div
  it("render 'div' element", () => {
    expect(removeButton.find("div").exists()).toBe(true);
  });

  it("'should' contain 'RemoveButton' class", () => {
    expect(removeButton.find("div").hasClass("RemoveButton")).toBe(true);
  });

  it("should call 'onClick' callback", () => {
    removeButton.find("div").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });

  it("'div' should contain 'Remove' text inside", () => {
    expect(removeButton.find("div").text()).toMatch("Remove");
  });

  //FaTrash icon
  it("render 'FaTrash' icon inside 'div'", () => {
    expect(removeButton.find("div > FaTrash").exists()).toBe(true);
  });
});
